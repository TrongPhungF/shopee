package com.org.userservice.service;

import com.org.userservice.dtos.SignUpRequest;

public interface UserService {
	 String signUpUser(SignUpRequest signUpRequest);
}
