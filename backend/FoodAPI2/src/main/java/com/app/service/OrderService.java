package com.app.service;

import com.app.dto.OrderDTO;

public interface OrderService {

	OrderDTO createOrder(OrderDTO orderDTO);

	OrderDTO getOrderById(Long id);



	void deleteOrder(Long id);
	OrderDTO updateOrder(Long id, OrderDTO orderDTO);

}
