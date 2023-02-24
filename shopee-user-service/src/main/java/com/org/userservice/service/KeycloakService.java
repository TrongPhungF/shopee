package com.org.userservice.service;


import com.org.userservice.dtos.LoginRequest;
import com.org.userservice.dtos.UserDTO;
import org.keycloak.representations.AccessTokenResponse;

public interface KeycloakService {
    public AccessTokenResponse loginWithKeycloak(LoginRequest request);
    public int createUserWithKeycloak(UserDTO userDTO);
}
