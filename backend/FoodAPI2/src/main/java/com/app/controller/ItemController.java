package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	
//	@PostMapping
//	public Item addItem(@RequestBody Item newitem ) {
//		System.out.println("in add item");
//		return itemservice.AddItem(newitem);
//	}
	
	
	
	
	
	
}
