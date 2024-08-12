package com.app.service;

import java.util.Optional;

import com.app.dto.OrderDTO;

public interface OrderService {

	OrderDTO createOrder(OrderDTO orderDTO);

	Optional<OrderDTO> getOrderById(Long id);



	void deleteOrder(Long id);
	OrderDTO updateOrder(Long id, OrderDTO orderDTO);

}
