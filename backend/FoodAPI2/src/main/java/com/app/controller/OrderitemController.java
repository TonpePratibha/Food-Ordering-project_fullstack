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

import com.app.dto.OrderDTO;
import com.app.dto.OrderitemsDTO;
import com.app.entities.Item;
import com.app.entities.Order;
import com.app.entities.OrderItems;
import com.app.service.ItemService;
import com.app.service.OrderService;
import com.app.service.OrderitemsService;

@RestController
@RequestMapping("/orderitems")
public class OrderitemController {
	@Autowired
	private OrderitemsService orderItemsService;
	
	 @Autowired
	    private OrderService orderService; 
	    @Autowired
	    private ItemService itemService;  
	
	// Get all OrderItems
	   @GetMapping
	    public ResponseEntity<List<OrderitemsDTO>> getAllOrderItems() {
	        List<OrderitemsDTO> orderItems = orderItemsService.getAllOrderItems();
	        return new ResponseEntity<>(orderItems, HttpStatus.OK);
	    }

	// Get an OrderItem by ID
	   @GetMapping("/{id}")
	    public ResponseEntity<OrderitemsDTO> getOrderItemById(@PathVariable Long id) {
	        Optional<OrderitemsDTO> orderItemDtoOpt = orderItemsService.getOrderItemById(id);
	        return orderItemDtoOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }


	
	// Delete an OrderItem
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOrderItem(@PathVariable Long id) {
		try {
			orderItemsService.deleteOrderItem(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	 @PostMapping
	    public OrderItems createOrderItems(@RequestBody OrderitemsDTO orderItemsDTO) {
	        OrderItems orderItems = convertToEntity(orderItemsDTO);
	        return orderItemsService.createOrderItems(orderItems);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<OrderItems> updateOrderItems(@PathVariable Long id, @RequestBody OrderitemsDTO orderItemsDTO) {
	        OrderItems updatedOrderItems = convertToEntity(orderItemsDTO);
	        return ResponseEntity.ok(orderItemsService.updateOrderItems(id, updatedOrderItems));
	    }


	    private OrderItems convertToEntity(OrderitemsDTO orderItemsDTO) {
	        OrderItems orderItems = new OrderItems();
	        orderItems.setQty(orderItemsDTO.getQty());
	        orderItems.setPrice(orderItemsDTO.getPrice());
	        // Here you need to fetch and set Order and Item entities from their respective services
	        // orderItems.setOrder(orderService.getOrderById(orderItemsDTO.getOrderId()));
	        // orderItems.setItem(itemService.getItemById(orderItemsDTO.getItemId()));
	        return orderItems;
	    }
	
	   
	   

}
