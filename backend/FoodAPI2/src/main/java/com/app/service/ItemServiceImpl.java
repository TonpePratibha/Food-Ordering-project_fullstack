package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.InvalidCredentialsException;
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
	private ItemRepository itemRepository;

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired 
	private RestaurentRepository restrorepository;

	@Override
	public List<ItemDTO> getItems() {
	
		return itemRepository.findAll()   //gets data from database
				.stream()            //converts into sequence of data then list(item) into stream(item) for functional programming
				.map(item->modelmapper.map(item, ItemDTO.class))  //lammda exress used for item to itemdto conversion
				.collect(Collectors.toList()); //strem to list or any type
	}
	

	public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    public Item createItem(Long restaurantId, Item item) {
        Restaurent restaurant = restrorepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        item.setRestaurent(restaurant);
        return itemRepository.save(item);
    }

   
    	
    	   
//    	 @Override
//    	    public Item updateItem(Long id, Item updatedItem) {
//    	        Optional<Item> optionalItem = itemRepository.findById(id);
//    	        if (optionalItem.isPresent()) {
//    	            Item item = optionalItem.get();
//    	            item.setName(updatedItem.getName());
//    	            item.setDescription(updatedItem.getDescription());
//    	            item.setPrice(updatedItem.getPrice());
//    	            item.setType(updatedItem.getType());
//    	            item.setRestaurent(updatedItem.getRestaurent());
//    	            return itemRepository.save(item);
//    	        } else {
//    	            return null;// Or throw an exception
//    	        }
//    	    }

    @Override
    public Item updateItem(Long id, Item updatedItem) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        if (optionalItem.isPresent()) {
            Item item = optionalItem.get();
            item.setName(updatedItem.getName());
            item.setDescription(updatedItem.getDescription());
            item.setPrice(updatedItem.getPrice());
            item.setType(updatedItem.getType());

            if (updatedItem.getRestaurent() == null || !restrorepository.existsById(updatedItem.getRestaurent().getId())) {
                throw new RuntimeException("Restaurant not found");
            }
            item.setRestaurent(updatedItem.getRestaurent());

            return itemRepository.save(item);
        } else {
            throw new RuntimeException("Item not found");
        }
    }
    
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
	
	
	
	
	
	
}
