package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.entities.Restaurent;
import com.app.repository.RestaurentRepository;

@Service
@Transactional
public class RestaurentServiceImpl implements RestaurentService{
	
	@Autowired
	private RestaurentRepository restroRepository;
	@Autowired
	private ModelMapper modelmapper;
	
	  public Restaurent registerRestaurent(RestaurentDTO dto) {
	        Restaurent restaurent = new Restaurent();
	        
	        restaurent.setRestaurentname(dto.getRestaurentname());
	        restaurent.setEmail(dto.getEmail());
	        restaurent.setAddress(dto.getAddress());
	        restaurent.setMobileno(dto.getMobileno());
	        restaurent.setCategory(dto.getCategory());
	        restaurent.setPassword(dto.getPassword());

	        return restroRepository.save(restaurent);
	    }


	  
	@Override
	public RestaurentDTO authenticaterestaurent(AuthDTO dto) {
		Restaurent restro=restroRepository
				.findByEmail(dto.getEmail())
				.orElseThrow(()->
					new InvalidCredentialsException("invalid email ")
					
				);
		if(!dto.getPassword().equals(restro.getPassword())) {
			throw new InvalidCredentialsException("ivalid password");
		}
		return modelmapper.map(restro, RestaurentDTO.class);
		
	}



	@Override
	public List<Restaurent> getAllRestaurents() {
		// TODO Auto-generated method stub
		return restroRepository.findAll();
	}



	@Override
	public void deleteRestro(Long rid) {
		 restroRepository.deleteById(rid);
	}

	@Override
	 public Optional<Restaurent> getRestaurantById(Long id) {
         return restroRepository.findById(id);
     }



	@Override
	public Restaurent updateRestaurant(Long id, Restaurent newrestro) {
		
		Restaurent restaurent = restroRepository.findById(id).orElseThrow(() -> new RuntimeException("Restaurant not found"));
        restaurent.setAddress(newrestro.getAddress());
        restaurent.setCategory(newrestro.getCategory());
        restaurent.setEmail(newrestro.getEmail());
        restaurent.setImage(newrestro.getImage());
        restaurent.setMobileno(newrestro.getMobileno());
        restaurent.setPassword(newrestro.getPassword());
        restaurent.setRestaurentname(newrestro.getRestaurentname());
		
		
        return restroRepository.save(restaurent);
	}

	
	
	  
	  
	  
}
