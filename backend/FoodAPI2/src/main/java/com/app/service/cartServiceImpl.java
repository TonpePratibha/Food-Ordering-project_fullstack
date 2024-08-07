package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CartDTO;
import com.app.entities.Cart;
import com.app.entities.Item;
import com.app.entities.User;
import com.app.repository.CartRepository;
import com.app.repository.ItemRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class cartServiceImpl implements cartService
{
    @Autowired
    private CartRepository cartrepository;
    
    @Autowired
    private ItemRepository itemrepository;
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<CartDTO> getAllCarts() {
        return cartrepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public CartDTO getCartById(Long id) {
        Optional<Cart> optionalCart = cartrepository.findById(id);
        return optionalCart.map(this::convertToDTO).orElse(null);
    }

    @Override
    public CartDTO createCart(CartDTO cartDTO) {
        Cart cart = convertToEntity(cartDTO);
        if (cart.getItem() == null || !itemrepository.existsById(cart.getItem().getId())) {
            throw new RuntimeException("Item not found");
        }
        if (cart.getUser() == null || !userRepository.existsById(cart.getUser().getId())) {
            throw new RuntimeException("User not found");
        }
        return convertToDTO(cartrepository.save(cart));
    }

    @Override
    public CartDTO updateCart(Long id, CartDTO updatedCartDTO) {
        Optional<Cart> optionalCart = cartrepository.findById(id);
        if (optionalCart.isPresent()) {
            Cart cart = optionalCart.get();
            cart.setQty(updatedCartDTO.getQty());
            cart.setPrice(updatedCartDTO.getPrice());

            if (updatedCartDTO.getItemid() != null) {
                Optional<Item> optionalItem = itemrepository.findById(updatedCartDTO.getItemid());
                if (!optionalItem.isPresent()) {
                    throw new RuntimeException("Item not found");
                }
                cart.setItem(optionalItem.get());
            }

            if (updatedCartDTO.getUserid() != null) {
                Optional<User> optionalUser = userRepository.findById(updatedCartDTO.getUserid());
                if (!optionalUser.isPresent()) {
                    throw new RuntimeException("User not found");
                }
                cart.setUser(optionalUser.get());
            }

            return convertToDTO(cartrepository.save(cart));
        } else {
            throw new RuntimeException("Cart not found");
        }
    }

    @Override
    public void deleteCart(Long id) {
        cartrepository.deleteById(id);
    }

    private CartDTO convertToDTO(Cart cart) {
        CartDTO cartDTO = new CartDTO();
        cartDTO.setId(cart.getId());
        cartDTO.setQty(cart.getQty());
        cartDTO.setPrice(cart.getPrice());
        cartDTO.setItemid(cart.getItem().getId());
        cartDTO.setUserid(cart.getUser().getId());
        return cartDTO;
    }

    private Cart convertToEntity(CartDTO cartDTO) {
        Cart cart = new Cart();
        cart.setQty(cartDTO.getQty());
        cart.setPrice(cartDTO.getPrice());

        if (cartDTO.getItemid() != null) {
            Optional<Item> optionalItem = itemrepository.findById(cartDTO.getItemid());
            if (optionalItem.isPresent()) {
                cart.setItem(optionalItem.get());
            }
        }

        if (cartDTO.getUserid() != null) {
            Optional<User> optionalUser = userRepository.findById(cartDTO.getUserid());
            if (optionalUser.isPresent()) {
                cart.setUser(optionalUser.get());
            }
        }

        return cart;
    }
    
    
}
