package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ItemDTO;
import com.app.entities.Item;
import com.app.entities.Restaurent;
import com.app.repository.ItemRepository;
import com.app.repository.RestaurentRepository;

@Service
@Transactional

public class ItemServiceImpl implements ItemService{

	@Autowired
	private ItemRepository itemrepository;

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired 
	private RestaurentRepository restrorepository;

	@Override
	public List<ItemDTO> getItems() {
	
		return itemrepository.findAll()   //gets data from database
				.stream()            //converts into sequence of data then list(item) into stream(item) for functional programming
				.map(item->modelmapper.map(item, ItemDTO.class))  //lammda exress used for item to itemdto conversion
				.collect(Collectors.toList()); //strem to list or any type
	}
	

//    public Item AddItem(Item item, Long restaurentId) {
//        Optional<Restaurent> optionalRestaurent = restrorepository.findById(restaurentId);
//        if (!optionalRestaurent.isPresent()) {
//            throw new ResourceNotFoundException("Restaurent not found with id: " + restaurentId);
//        }
//        item.setRestaurent(optionalRestaurent.get());
//        return itemrepository.save(item);
//    }
	
	
	
	
	
	
	
}
