package com.org.userservice.service.impls;

import com.org.userservice.dtos.LoginRequest;
import com.org.userservice.dtos.UserDTO;
import com.org.userservice.service.KeycloakService;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.ClientResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.ws.rs.core.Response;
import java.util.*;

@Service
@Transactional
public class KeycloakServiceImpl implements KeycloakService {

    private final Logger LOGGER = LoggerFactory.getLogger(getClass());

    @Value("${keycloak.auth-server-url}")
    private String serverUrl;

    @Value("${keycloak.realm}")
    private String realm;

    @Value("${keycloak.resource}")
    private String clientId;

    @Value("${keycloak.admin-user}")
    private String adminUsername;

    @Value("${keycloak.admin-password}")
    private String adminPassword;

    @Value("${keycloak.credentials.secret}")
    private String clientSecret;

    private final Map<String, List<String>> roleMapping = new HashMap<>();

    @Override
    public AccessTokenResponse loginWithKeycloak(LoginRequest request) {

        Keycloak loginKeycloak = buildKeycloak(request.getUserName(), request.getPassword());
        AccessTokenResponse accessTokenResponse = null;

        try{
            accessTokenResponse = loginKeycloak.tokenManager().getAccessToken();
            accessTokenResponse.setIdToken(UUID.randomUUID().toString());
            return accessTokenResponse;
        }catch (Exception e){
            return null;
        }
    }

    private Keycloak buildKeycloak(String userName, String password) {

        return KeycloakBuilder.builder()
                .realm(realm)
                .serverUrl(serverUrl)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .username(userName)
                .password(password)
                .build();

    }
    private Keycloak getAdminKeycloak() {
        return KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .username(adminUsername)
                .password(adminPassword)
                .grantType("password")
                .clientSecret(clientSecret)
                .build();
    }




    @Override
    public int createUserWithKeycloak(UserDTO userDTO) {

        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak is started");

        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setFirstName(userDTO.getFirstName());
        userRepresentation.setLastName(userDTO.getLastName());
        userRepresentation.setEmail(userDTO.getEmail());
        userRepresentation.setEmailVerified(true);
        userRepresentation.setUsername(userDTO.getUserName());
        HashMap<String, List<String>> clientRoles = new HashMap<>();
        clientRoles.put(clientId,Collections.singletonList(userDTO.getRole()));
        userRepresentation.setClientRoles(clientRoles);
        userRepresentation.setEnabled(true);

        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | userRepresentation is completed");

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setType("password");
        credentialRepresentation.setValue(userDTO.getPassword());
        credentialRepresentation.setTemporary(false);

        userRepresentation.setCredentials(Collections.singletonList(credentialRepresentation));

        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | credentialRepresentation is completed");
        Keycloak keycloak = getAdminKeycloak();
        UsersResource usersResource = keycloak.realm(realm).users();

        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | usersResource : " + usersResource.toString());

        Response response = keycloak.realm(realm).users().create(userRepresentation);

        List<UserRepresentation> userList =
                keycloak.realm(realm).users().search(userDTO.getUserName()).stream()
                    .filter(userRep -> userRep.getUsername().equals(userDTO.getUserName())).toList();
        userRepresentation = userList.get(0);


        // Create user (requires manage-users role)
       // Response response = usersResource.create(userRepresentation);

        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | Create User : ");
        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | response STATUS : " + response.getStatus());
        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | response INFO : " + response.getStatusInfo());

        String userId = CreatedResponseUtil.getCreatedId(response);
        LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | userId : " + userId);

        this.assignRoleToUser(userRepresentation.getId(), userDTO.getRole());

//        RoleRepresentation savedRoleRepresentation = keycloak.realm(realm).roles()
//                .get(userDTO.getRole()).toRepresentation();

//        keycloak.realm(realm).users().get(userId).roles().realmLevel()
//                .add(Collections.singletonList(savedRoleRepresentation));



       LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | Added Role to User");

        return response.getStatus();

    }

    private void assignRoleToUser(String userId, String role) {
        Keycloak keycloak = getAdminKeycloak();
        UsersResource usersResource = keycloak.realm(realm).users();
        UserResource userResource = usersResource.get(userId);

        //getting client
        ClientRepresentation clientRepresentation = keycloak.realm(realm).clients()
                .findAll().stream().filter(
                        client -> client.getClientId().equals(clientId)).toList().get(0);
        ClientResource clientResource = keycloak.realm(realm).clients().get(clientRepresentation.getId());
        //getting role
        RoleRepresentation roleRepresentation = clientResource.roles().list()
                .stream().filter(element -> element.getName().equals(role)).toList().get(0);
        //assigning to user
        userResource.roles().clientLevel(clientRepresentation.getId()).add(Collections.singletonList(roleRepresentation));
    }


    public void deleteKeycloakUser(UserDTO userDTO) {
        Keycloak keycloak = getAdminKeycloak();
        List<UserRepresentation> userList = keycloak.realm(realm).users().search(userDTO.getUserName());
        for (UserRepresentation user : userList) {
            if (user.getUsername().equals(userDTO.getUserName())) {
                keycloak.realm(realm).users().delete(user.getId());
            }
        }
    }
}
