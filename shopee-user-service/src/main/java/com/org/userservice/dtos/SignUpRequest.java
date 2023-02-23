package com.org.userservice.dtos;

import lombok.Data;

@Data
public class SignUpRequest {
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;


}