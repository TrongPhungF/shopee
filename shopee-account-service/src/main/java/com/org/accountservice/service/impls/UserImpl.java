package com.org.accountservice.service.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.org.accountservice.converter.UserConvert;
import com.org.accountservice.dtos.UserDTO;
import com.org.accountservice.entities.User;
import com.org.accountservice.repositories.UserRepository;
import com.org.accountservice.service.UserService;

@Service
public class UserImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserConvert userConvert;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
    public UserDTO loadUserByUsername(UserDTO user){
		
		User currentUser = userRepository.findByUserName(user.getUserName());
		if (currentUser == null) {
			new Exception("Không có User");
		}
		if (!bCryptPasswordEncoder.matches(user.getPassword(), currentUser.getPassword())) {			
			return null;
		}
        
        return userConvert.toDTO(currentUser);
    }
	
	@Override
    public UserDTO save(User user){
		
		return userConvert.toDTO(userRepository.save(user));
    
	}
	
}
