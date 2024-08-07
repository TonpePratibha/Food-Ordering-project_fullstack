package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ItemDTO;
import com.app.entities.Item;



public interface ItemService {
   
        List<ItemDTO> getItems();
        void deleteItem(Long id);
        Item updateItem(Long id, Item itemDetails);
        Item createItem(Long restaurantId, Item item);
        Optional<Item> getItemById(Long id);
}
