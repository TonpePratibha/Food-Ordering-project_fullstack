package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.entities.Restaurent;
@Service
public interface RestaurentService {
	 Restaurent registerRestaurent(RestaurentDTO dto);
    RestaurentDTO authenticaterestaurent(AuthDTO dto);
  
	List<Restaurent> getAllRestaurents();
	void deleteRestro(Long rid);
	Optional<Restaurent> getRestaurantById(Long id);
	Restaurent updateRestaurant(Long id, Restaurent restaurantDetails);
}
