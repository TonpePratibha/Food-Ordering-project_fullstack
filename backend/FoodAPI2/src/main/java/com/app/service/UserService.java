package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.dto.UserDTO;
import com.app.entities.Restaurent;
import com.app.entities.User;

public interface UserService {
	User registerUser(UserDTO dto);
	UserDTO authenticateUser(AuthDTO dto);
	List<User> getAllUsers();
	Optional<User> getUserById(Long id);
	User updateUser(Long id, User userDetails);
	void deleteUser(Long id);
}
