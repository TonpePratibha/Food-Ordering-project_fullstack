package com.app.dto;

import java.math.BigDecimal;

import com.app.entities.Item;
import com.app.entities.User;

public class CartDTO extends BaseDTO{
	
private int qty;
private BigDecimal price;
private Long itemid;
private Long userid;
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
public Long getItemid() {
	return itemid;
}
public void setItemid(Long itemid) {
	this.itemid = itemid;
}
public Long getUserid() {
	return userid;
}
public void setUserid(Long userid) {
	this.userid = userid;
}
@Override
public String toString() {
	return "CartDTO [qty=" + qty + ", price=" + price + ", itemid=" + itemid + ", userid=" + userid + "]";
}




}
