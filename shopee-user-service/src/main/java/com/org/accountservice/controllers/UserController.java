package com.org.accountservice.controllers;


import com.org.accountservice.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.org.accountservice.dtos.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1")
public class UserController {

	private final UserService userService;

	@PostMapping("/login")
	public UserDTO login(@RequestBody UserDTO user) {
		return  userService.loadUserByUsername(user);
	}

	@GetMapping("/users")
	public List<UserDTO> getAllUserDTO() {
		return  userService.findAl();
	}

	@PostMapping("/users")
	public void saveUser(@RequestBody UserDTO userDTO) {
		  userService.saveUser(userDTO);
	}
}
