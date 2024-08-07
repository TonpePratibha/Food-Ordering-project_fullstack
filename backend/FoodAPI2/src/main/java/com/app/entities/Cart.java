package com.app.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="carts")
public class Cart extends BaseEntity{
@Column(length=10)
	private int qty;
@Column(nullable=false)
	private BigDecimal price;
	
@ManyToOne
@JoinColumn(name="item_id",nullable=false)
	private Item item;
@ManyToOne
@JoinColumn(name="user_id",nullable=false)
	private User user;
public int getQty() {
	return qty;
}
public void setQty(int qty) {
	this.qty = qty;
}
public BigDecimal getPrice() {
	return price;
}
public void setPrice(BigDecimal price) {
	this.price = price;
}
public Item getItem() {
	return item;
}
public void setItem(Item item) {
	this.item = item;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
@Override
public String toString() {
	return "Cart [qty=" + qty + ", price=" + price + ", item=" + item + ", user=" + user + "]";
}



	
	
	
}
