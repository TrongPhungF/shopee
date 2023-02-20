package com.org.accountservice.service;

import com.org.accountservice.dtos.*;
import java.util.List;

public interface UserService {
	void saveUser(UserDTO userDTO);
	UserDTO loadUserByUsername(UserDTO user);
	List<UserDTO> findAl();
}
