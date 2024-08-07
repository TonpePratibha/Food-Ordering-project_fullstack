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

import com.app.dto.ItemDTO;
import com.app.entities.Item;
import com.app.service.ItemService;



@RestController
@RequestMapping("/items")
public class ItemController {

	@Autowired
	private ItemService itemservice;
	
	public ItemController() {
		System.out.println("in contoleer"+getClass());
	}
	@GetMapping
	public List<ItemDTO> getallItems(){
		System.out.println("into getitems");
		return itemservice.getItems();
	}
	
	
	    @GetMapping("/{id}")
	    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
	        Optional<Item> item = itemservice.getItemById(id);
	        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping("/{restaurentId}")
	    public ResponseEntity<Item> createItem(@PathVariable Long restaurentId, @RequestBody Item item) {
	        Item createdItem = itemservice.createItem(restaurentId, item);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<?> updateItem(@PathVariable Long id, @RequestBody Item updatedItem) {
	        try {
	            Item item = itemservice.updateItem(id, updatedItem);
	            return ResponseEntity.ok(item);
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	        }
	    }


	    @DeleteMapping("/{id}") 
	    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
	        itemservice.deleteItem(id);
	        return ResponseEntity.noContent().build();
	    }
	
	
	
	
	
}
