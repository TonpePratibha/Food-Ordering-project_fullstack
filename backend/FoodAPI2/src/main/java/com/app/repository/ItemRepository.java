package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	 List<Item> findByRestaurentId(Long restaurantId);
}
