package com.org.accountservice.converter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.org.accountservice.dtos.UserDTO;
import com.org.accountservice.entities.User;



@Component
public class UserConvert {

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public User toEntity(UserDTO userDTO) {
		User user = new User();
		user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		user.setUserName(userDTO.getUserName());
		return user;
	}
	
	public UserDTO toDTO(User user) {
		user.setPassword(null);
		return modelMapper.map(user, UserDTO.class);
	}

	
}
