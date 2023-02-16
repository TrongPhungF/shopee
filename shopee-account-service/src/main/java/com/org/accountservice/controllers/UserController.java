package com.org.accountservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.org.accountservice.dtos.UserDTO;
import com.org.accountservice.service.UserService;

@RestController
@RequestMapping(value = "/api/v1/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/")
	public UserDTO login(@RequestBody UserDTO user) {
		
		return  userService.loadUserByUsername(user);
	}
	
}
