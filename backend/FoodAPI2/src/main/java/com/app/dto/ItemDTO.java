package com.app.dto;

import java.math.BigDecimal;

import com.app.entities.FoodType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


public class ItemDTO extends BaseDTO{
	
private String name;
private String description;
private BigDecimal price;
private FoodType type;

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public BigDecimal getPrice() {
	return price;
}
public void setPrice(BigDecimal price) {
	this.price = price;
}
public FoodType getType() {
	return type;
}
public void setType(FoodType type) {
	this.type = type;
}
@Override
public String toString() {
	return "ItemDTO [name=" + name + ", description=" + description + ", price=" + price + ", type=" + type + "]";
}





}
