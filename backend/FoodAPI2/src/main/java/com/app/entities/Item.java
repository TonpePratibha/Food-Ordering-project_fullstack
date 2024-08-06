package com.app.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="items")

public class Item extends BaseEntity {

@Column(length=50,nullable=false)
private String name;

@Column(length=100,nullable=false)
private String description;
@Column(nullable=false)
private BigDecimal price;

@Enumerated(EnumType.STRING)
@Column(length=20)
private FoodType type;

//oner directional manyitems in one restaute 
@ManyToOne
@JoinColumn(name="restaurentid" ,nullable=false)
private Restaurent restaurent;

public Item() {
	
}

public Item(String name, String description, BigDecimal price, FoodType type, Restaurent restaurent) {
	super();
	this.name = name;
	this.description = description;
	this.price = price;
	this.type = type;
	this.restaurent = restaurent;
}

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

public Restaurent getRestaurent() {
	return restaurent;
}

public void setRestaurent(Restaurent restaurent) {
	this.restaurent = restaurent;
}

@Override
public String toString() {
	return "Item [name=" + name + ", description=" + description + ", price=" + price + ", type=" + type
			+ ", restaurent=" + restaurent + "]";
}






	


}
