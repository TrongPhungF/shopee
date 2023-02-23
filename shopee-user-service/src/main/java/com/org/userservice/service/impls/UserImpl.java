package com.org.userservice.service.impls;

import com.org.userservice.converter.UserMapper;
import com.org.userservice.dtos.SignUpRequest;
import com.org.userservice.dtos.UserDTO;
import com.org.userservice.model.User;
import com.org.userservice.repositories.UserRepository;
import com.org.userservice.service.KeycloakService;
import com.org.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional
public class UserImpl implements UserService{


	private final Logger LOGGER = LoggerFactory.getLogger(getClass());

	private final UserRepository userRepository;

	private final KeycloakService keycloakService;

	@Override
	public String signUpUser(SignUpRequest signUpRequest) {

		LOGGER.info("UserServiceImpl | signUpUser is started");

		UserDTO userDTO = new UserDTO();
		userDTO.setFirstName(signUpRequest.getFirstName());
		userDTO.setLastName(signUpRequest.getLastName());
		userDTO.setEmail(signUpRequest.getEmail());
		userDTO.setPassword(signUpRequest.getPassword());
		userDTO.setRole("ROLE_USER");
		userDTO.setUserName(signUpRequest.getUserName());

		int status = keycloakService.createUserWithKeycloak(userDTO);

		if(status == 201){

			LOGGER.info("UserServiceImpl | signUpUser | status : " + status);

			User signUpUser = UserMapper.signUpRequestToUser(signUpRequest);

			signUpUser.setCreatedDate(LocalDateTime.now());
			signUpUser.setRole("ROLE_USER");
			userRepository.save(signUpUser);

			return "Sign Up completed";
		}

		return "Not Register";
	}
}
