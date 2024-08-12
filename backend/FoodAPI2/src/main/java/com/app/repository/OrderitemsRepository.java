package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.OrderItems;

public interface OrderitemsRepository extends JpaRepository<OrderItems, Long> {

}
