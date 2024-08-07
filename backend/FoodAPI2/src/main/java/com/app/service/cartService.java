package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;

public interface cartService {
	 List<CartDTO> getAllCarts();
	    CartDTO getCartById(Long id);
	    CartDTO createCart(CartDTO cartDTO);
	    CartDTO updateCart(Long id, CartDTO updatedCartDTO);
	    void deleteCart(Long id);

}
