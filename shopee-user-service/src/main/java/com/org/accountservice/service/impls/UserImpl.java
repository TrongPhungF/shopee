package com.org.accountservice.service.impls;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.org.accountservice.converter.UserConvert;
import com.org.accountservice.dtos.UserDTO;
import com.org.accountservice.model.User;
import com.org.accountservice.repositories.UserRepository;
import com.org.accountservice.service.UserService;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserImpl implements UserService{

	private final ModelMapper modelMapper;
	private final UserRepository userRepository;
	private final UserConvert userConvert;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

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
    public void saveUser(UserDTO userDTO){
		userDTO.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
		userDTO.setCreatedDate(LocalDate.now());
		 userRepository.save(modelMapper.map(userDTO, User.class));
	}
	@Override
	public List<UserDTO> findAl() {
		return userRepository.findAll().stream().map(userConvert::toDTO).collect(Collectors.toList());
	}
}
