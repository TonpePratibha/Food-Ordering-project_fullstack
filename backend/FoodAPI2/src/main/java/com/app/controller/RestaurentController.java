package com.app.controller;

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
import com.app.entities.Restaurent;
import com.app.entities.User;
import com.app.service.RestaurentService;

@RestController
@RequestMapping("/restaurents")
public class RestaurentController {
	
     @Autowired
	private RestaurentService restroservice;
	
     @PostMapping("/register")
	public ResponseEntity<Restaurent> registerRestaurent(@RequestBody RestaurentDTO rdto){
     {
    Restaurent registeredRestaurent=restroservice.registerRestaurent(rdto)	;
    return ResponseEntity.status(HttpStatus.CREATED).body(registeredRestaurent);
     }}
     
    
     @PostMapping("/signin")
     public ResponseEntity<?> RestaurentSignIn(@RequestBody AuthDTO dto){
    	 System.out.println("in sign in of restro"+dto);
    	 try {
    		 RestaurentDTO restroDto=restroservice.authenticaterestaurent(dto);
    		 return ResponseEntity.ok(restroDto);
    	 }
    	 catch(RuntimeException e) {
    		 System.out.println(e);
    		 
    		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
    	 }
     }
     
     @GetMapping
	    public List<Restaurent> getAllRestaurents() {
	        return restroservice.getAllRestaurents();
	    }
     
     @DeleteMapping("/{rid}")
     public ResponseEntity<Void> deleteUser(@PathVariable Long rid) {
         restroservice.deleteRestro(rid);
         return ResponseEntity.noContent().build();
     }

     @GetMapping("/{rid}")
     public ResponseEntity<Restaurent> getRestaurantById(@PathVariable Long rid) {
         Optional<Restaurent> restaurant = restroservice.getRestaurantById(rid);
         return restaurant.map(ResponseEntity::ok)
        		 .orElseGet(() -> ResponseEntity.notFound().build());
     }
     
     @PutMapping("/{rid}")
     public ResponseEntity<Restaurent> updateRestaurant(@PathVariable Long rid, @RequestBody Restaurent restaurantDetails) {
         Restaurent updatedRestaurant = restroservice.updateRestaurant(rid, restaurantDetails);
         return ResponseEntity.ok(updatedRestaurant);
     }
     
}
     
     
     
     

