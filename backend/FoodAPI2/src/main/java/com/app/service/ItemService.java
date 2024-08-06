package com.app.service;

import java.util.List;

import com.app.dto.ItemDTO;
import com.app.entities.Item;



public interface ItemService {
       // Item AddItem(Item item,Long restaurentId);
        List<ItemDTO> getItems();
}
