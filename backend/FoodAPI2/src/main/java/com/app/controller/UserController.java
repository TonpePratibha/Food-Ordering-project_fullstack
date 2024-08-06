package com.app.controller;

import java.io.Console;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	
	
	
	
	@PostMapping("/register")
	public ResponseEntity<User> RegisterUser(@RequestBody UserDTO dto){
		
		User registeredUser=userService.registerUser(dto);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
	}
	
	 @PostMapping("/signin")
     public ResponseEntity<?> UserSignIn(@RequestBody AuthDTO dto){
    	 System.out.println("in sign in of restro"+dto);
    	 try {
    		 UserDTO userDto=userService.authenticateUser(dto);
    		 return ResponseEntity.ok(userDto);
    	 }
    	 catch(RuntimeException e) {
    		 System.out.println(e);
    		 
    		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
    	 }
	 }

   	  @GetMapping
   	    public List<User> getAllUsers() {
   	        return userService.getAllUsers();
   	    }
      @GetMapping("/{id}")
      public ResponseEntity<User> getUserById(@PathVariable Long id) {
          Optional<User> user = userService.getUserById(id);
          return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
      }
    	 

      @PutMapping("/{id}")
      public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
          User updatedUser = userService.updateUser(id, userDetails);
          return ResponseEntity.ok(updatedUser);
      }

      @DeleteMapping("/{id}")
      public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
          userService.deleteUser(id);
          return ResponseEntity.noContent().build();
      }
    	 
     
}
