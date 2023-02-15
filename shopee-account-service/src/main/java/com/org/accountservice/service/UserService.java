package com.org.accountservice.service;

import com.org.accountservice.dtos.UserDTO;
import com.org.accountservice.entities.User;

public interface UserService {


	UserDTO save(User user);

	UserDTO loadUserByUsername(UserDTO user);

}
