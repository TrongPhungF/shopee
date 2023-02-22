package com.org.userservice.service.impls;

import com.org.userservice.configs.KeycloakConfig;
import com.org.userservice.dtos.LoginRequest;
import com.org.userservice.dtos.UserDTO;
import com.org.userservice.service.KeycloakService;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.ws.rs.core.Response;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class KeycloakServiceImpl implements KeycloakService {

   // private final Logger LOGGER = LoggerFactory.getLogger(getClass());

    private final Keycloak keycloak;

    public KeycloakServiceImpl(Keycloak keycloak) {
        this.keycloak = keycloak;
    }

    @Override
    public AccessTokenResponse loginWithKeycloak(LoginRequest request) {

        Keycloak loginKeycloak = buildKeycloak(request.getUserName(), request.getPassword());
        AccessTokenResponse accessTokenResponse = null;

        try{
            accessTokenResponse = loginKeycloak.tokenManager().getAccessToken();
            return accessTokenResponse;
        }catch (Exception e){
            return null;
        }
    }

    private Keycloak buildKeycloak(String userName, String password) {

        return KeycloakBuilder.builder()
                .realm(KeycloakConfig.realm)
                .serverUrl(KeycloakConfig.serverUrl)
                .clientId(KeycloakConfig.clientId)
                .clientSecret(KeycloakConfig.clientSecret)
                .username(userName)
                .password(password)
                .build();

    }

    @Override
    public int createUserWithKeycloak(UserDTO userDTO) {

        //LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak is started");

        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setFirstName(userDTO.getFirstName());
        userRepresentation.setLastName(userDTO.getLastName());
        userRepresentation.setEmail(userDTO.getEmail());
        userRepresentation.setUsername(userDTO.getUserName());
        HashMap<String, List<String>> clientRoles = new HashMap<>();
        clientRoles.put(KeycloakConfig.clientId,Collections.singletonList(userDTO.getRole()));
        userRepresentation.setClientRoles(clientRoles);

        userRepresentation.setEnabled(true);

        //LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | userRepresentation is completed");

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setType("password");
        credentialRepresentation.setValue(userDTO.getPassword());
        credentialRepresentation.setTemporary(false);

        userRepresentation.setCredentials(Collections.singletonList(credentialRepresentation));

      //  LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | credentialRepresentation is completed");

        UsersResource usersResource = keycloak.realm(KeycloakConfig.realm).users();

       // LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | usersResource : " + usersResource.toString());

        // Create user (requires manage-users role)
        Response response = usersResource.create(userRepresentation);

      //  LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | Create User : ");
     //   LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | response STATUS : " + response.getStatus());
    //    LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | response INFO : " + response.getStatusInfo());

        String userId = CreatedResponseUtil.getCreatedId(response);
       // LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | userId : " + userId);

        RoleRepresentation savedRoleRepresentation = keycloak.realm(KeycloakConfig.realm).roles()
                .get(userDTO.getRole()).toRepresentation();

        keycloak.realm(KeycloakConfig.realm).users().get(userId).roles().realmLevel()
                .add(Collections.singletonList(savedRoleRepresentation));

       // LOGGER.info("KeycloakServiceImpl | createUserWithKeycloak | Added Role to User");

        return response.getStatus();

    }

}
