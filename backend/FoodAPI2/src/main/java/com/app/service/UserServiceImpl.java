package com.app.service;

import java.io.Console;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.dto.UserDTO;
import com.app.entities.Restaurent;
import com.app.entities.User;
import com.app.repository.UserRepository;
@Service
@Transactional
public class UserServiceImpl implements UserService{

@Autowired
private UserRepository userRepository;

@Autowired
private ModelMapper modelmapper;

@Override
public User registerUser(UserDTO dto) {
	
	User user= new User();
	user.setUsername(dto.getUsername());
	user.setPassword(dto.getPassword());
	user.setEmail(dto.getEmail());
	user.setAddress(dto.getAddress());
	user.setMobileno(dto.getMobileno());
			
			
			
			
	return userRepository.save(user);
}

@Override
public UserDTO authenticateUser(AuthDTO dto) {
	
	User user=userRepository.findByEmail(dto.getEmail())
			.orElseThrow(()->
			new InvalidCredentialsException("invalid email"));
	if(!dto.getPassword().equals(user.getPassword())) {
		throw new InvalidCredentialsException("ivalid password");
	}
	return modelmapper.map(user, UserDTO.class);
}

@Override
public List<User> getAllUsers() {
	
	return userRepository.findAll();
}


public Optional<User> getUserById(Long id) {
    return userRepository.findById(id);
}



public User updateUser(Long id, User userDetails) {
    User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
   user.setUsername(userDetails.getUsername());
   user.setAddress(userDetails.getAddress());
   user.setEmail(userDetails.getEmail());
   user.setMobileno(userDetails.getMobileno());
   user.setPassword(userDetails.getPassword());
    
    return userRepository.save(user);
}

public void deleteUser(Long id) {
    userRepository.deleteById(id);
}



  
}
