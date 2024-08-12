package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.OrderitemsDTO;
import com.app.entities.Item;
import com.app.entities.Order;
import com.app.entities.OrderItems;
import com.app.repository.OrderitemsRepository;

@Service
@Transactional
public class OrderitemsServiceImpl implements OrderitemsService{
	
	 @Autowired
	    private OrderitemsRepository orderitemsRepository;

	   

	    // Get all OrderItems
	    public List<OrderitemsDTO> getAllOrderItems() {
	        List<OrderItems> orderItemsList = orderitemsRepository.findAll();
	        return orderItemsList.stream()
	                             .map(this::convertToDto)
	                             .collect(Collectors.toList());
	    }


	    // Get an OrderItem by ID
	    public Optional<OrderitemsDTO> getOrderItemById(Long id) {
	        return orderitemsRepository.findById(id)
	                                   .map(this::convertToDto);
	    }


	    // Delete an OrderItem
	    public void deleteOrderItem(Long id) {
	        if (orderitemsRepository.existsById(id)) {
	            orderitemsRepository.deleteById(id);
	        } else {
	            throw new RuntimeException("OrderItem not found with id " + id);
	        }
	    }
	
	 public  OrderitemsDTO convertToDto(OrderItems orderItems) {
	        OrderitemsDTO dto = new OrderitemsDTO();
	        dto.setId(orderItems.getId());
	        dto.setQty(orderItems.getQty());
	        dto.setPrice(orderItems.getPrice());
	        dto.setOrderId(orderItems.getOrder().getId());
	        dto.setItemId(orderItems.getItem().getId());
	        return dto;
	    }

	    public  OrderItems convertToEntity(OrderitemsDTO dto, Order order, Item item) {
	        OrderItems orderItems = new OrderItems();
	        orderItems.setQty(dto.getQty());
	        orderItems.setPrice(dto.getPrice());
	        orderItems.setOrder(order);
	        orderItems.setItem(item);
	        return orderItems;
	    }
	

	    public OrderItems createOrderItems(OrderItems orderItems) {
	        return orderitemsRepository.save(orderItems);
	    }

	    
	    
	    public OrderItems updateOrderItems(Long id, OrderItems updatedOrderItems) {
	        return orderitemsRepository.findById(id)
	                .map(orderItems -> {
	                    orderItems.setQty(updatedOrderItems.getQty());
	                    orderItems.setPrice(updatedOrderItems.getPrice());
	                    orderItems.setOrder(updatedOrderItems.getOrder());
	                    orderItems.setItem(updatedOrderItems.getItem());
	                    return orderitemsRepository.save(orderItems);
	                })
	                .orElseThrow(() -> new RuntimeException("OrderItems not found with id " + id));
	    }
	
	
	    
}
