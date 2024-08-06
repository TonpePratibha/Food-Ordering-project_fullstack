package com.app.dto;

import java.math.BigDecimal;

import com.app.entities.FoodType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemDTO extends BaseDTO{
	
private String name;
private String description;
private BigDecimal price;
private FoodType type;





}
