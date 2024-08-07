package com.app.service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.OrderDTO;
import com.app.entities.Order;
import com.app.entities.Restaurent;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.repository.OrderRepository;
import com.app.repository.RestaurentRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{
	 @Autowired
	    private OrderRepository orderRepository;

	    @Autowired
	    private UserRepository userRepository;

	    @Autowired
	    private RestaurentRepository restaurentRepository;

	    @Override
	    public OrderDTO createOrder(OrderDTO orderDTO) {
	        Order order = convertToEntity(orderDTO);
	        Order savedOrder = orderRepository.save(order);
	        return convertToDTO(savedOrder);
	    }

	    @Override
	    public OrderDTO getOrderById(Long id) {
	        Order order = orderRepository.findById(id)
	            .orElseThrow(() -> new EntityNotFoundException("Order not found"));
	        return convertToDTO(order);
	    }

	    @Override
	    public OrderDTO updateOrder(Long id, OrderDTO orderDTO) {
	        Order existingOrder = orderRepository.findById(id)
	            .orElseThrow(() -> new EntityNotFoundException("Order not found"));
	        existingOrder.setOrderdate(orderDTO.getOrderdate());
	        existingOrder.setTotalprice(orderDTO.getTotalprice());
	        existingOrder.setStatus(Status.valueOf(orderDTO.getStatus()));
	        existingOrder.setQty(orderDTO.getQty());

	        User user = userRepository.findById(orderDTO.getUserId())
	            .orElseThrow(() -> new EntityNotFoundException("User not found"));
	        existingOrder.setUser(user);

	        Restaurent restro = restaurentRepository.findById(orderDTO.getRestaurentId())
	            .orElseThrow(() -> new EntityNotFoundException("Restaurent not found"));
	        existingOrder.setRestro(restro);

	        Order updatedOrder = orderRepository.save(existingOrder);
	        return convertToDTO(updatedOrder);
	    }

	    @Override
	    public void deleteOrder(Long id) {
	        Order order = orderRepository.findById(id)
	            .orElseThrow(() -> new EntityNotFoundException("Order not found"));
	        orderRepository.delete(order);
	    }

	    private OrderDTO convertToDTO(Order order) {
	        OrderDTO orderDTO = new OrderDTO();
	        orderDTO.setId(order.getId());
	        orderDTO.setOrderdate(order.getOrderdate());
	        orderDTO.setTotalprice(order.getTotalprice());
	        orderDTO.setStatus(order.getStatus().toString());
	        orderDTO.setQty(order.getQty());
	        orderDTO.setUserId(order.getUser().getId());
	        orderDTO.setRestaurentId(order.getRestro().getId());
	        return orderDTO;
	    }

	    private Order convertToEntity(OrderDTO orderDTO) {
	        Order order = new Order();
	        order.setId(orderDTO.getId());
	        order.setOrderdate(orderDTO.getOrderdate());
	        order.setTotalprice(orderDTO.getTotalprice());
	        order.setStatus(Status.valueOf(orderDTO.getStatus()));
	        order.setQty(orderDTO.getQty());

	        User user = userRepository.findById(orderDTO.getUserId())
	            .orElseThrow(() -> new EntityNotFoundException("User not found"));
	        order.setUser(user);

	        Restaurent restro = restaurentRepository.findById(orderDTO.getRestaurentId())
	            .orElseThrow(() -> new EntityNotFoundException("Restaurent not found"));
	        order.setRestro(restro);

	        return order;
	    }

}
