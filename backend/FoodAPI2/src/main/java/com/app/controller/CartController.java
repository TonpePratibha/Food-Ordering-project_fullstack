package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.service.cartService;

@RestController
@RequestMapping("/carts")
public class CartController {

	@Autowired
	private cartService cartservice;
	
	  @GetMapping
	    public List<CartDTO> getAllCarts() {
	        return cartservice.getAllCarts();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<CartDTO> getCartById(@PathVariable Long id) {
	        CartDTO cart = cartservice.getCartById(id);
	        if (cart != null) {
	            return ResponseEntity.ok(cart);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @PostMapping
	    public ResponseEntity<CartDTO> createCart(@RequestBody CartDTO cartDTO) {
	        try {
	            CartDTO createdCart = cartservice.createCart(cartDTO);
	            return ResponseEntity.ok(createdCart);
	        } catch (RuntimeException e) {
	            return ResponseEntity.badRequest().body(null);
	        }
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<CartDTO> updateCart(@PathVariable Long id, @RequestBody CartDTO updatedCartDTO) {
	        try {
	            CartDTO cart = cartservice.updateCart(id, updatedCartDTO);
	            return ResponseEntity.ok(cart);
	        } catch (RuntimeException e) {
	            return ResponseEntity.badRequest().body(null);
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
	        cartservice.deleteCart(id);
	        return ResponseEntity.noContent().build();
	    }
	
	
}
