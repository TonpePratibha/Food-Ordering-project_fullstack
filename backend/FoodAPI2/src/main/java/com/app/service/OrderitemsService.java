package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.OrderitemsDTO;
import com.app.entities.Item;
import com.app.entities.Order;
import com.app.entities.OrderItems;

public interface OrderitemsService {

	 //List<OrderitemsDTO> getAllOrderItems() ;
	//java.util.Optional<OrderitemsDTO> getOrderItemById(Long id);

	//void deleteOrderItem(Long id);

	

	OrderItems createOrderItems(OrderItems orderItems) ;
	OrderItems updateOrderItems(Long id, OrderItems updatedOrderItems);
	
 OrderItems convertToEntity(OrderitemsDTO dto, Order order, Item item);

	
	List<OrderitemsDTO> getAllOrderItems();
	Optional<OrderitemsDTO> getOrderItemById(Long id);
	void deleteOrderItem(Long id);
}
