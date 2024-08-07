package com.app.entities;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="orders")
public class Order extends BaseEntity {
	
    @Column
	private LocalDateTime orderdate;
     
     @Column
	private BigDecimal totalprice;
     
     @Enumerated(EnumType.STRING)
     @Column(length=20)
	private Status Status;
     
     @Column
	private int qty;
	
@ManyToOne
@JoinColumn(name="userid")
private User user;

@ManyToOne
@JoinColumn(name="restaurentid")
private Restaurent restro;

	
public Order() {
	
}


public Order(LocalDateTime orderdate, BigDecimal totalprice, com.app.entities.Status status, int qty, User user,
		Restaurent restro) {
	super();
	this.orderdate = orderdate;
	this.totalprice = totalprice;
	Status = status;
	this.qty = qty;
	this.user = user;
	this.restro = restro;
}


public LocalDateTime getOrderdate() {
	return orderdate;
}


public void setOrderdate(LocalDateTime orderdate) {
	this.orderdate = orderdate;
}


public BigDecimal getTotalprice() {
	return totalprice;
}


public void setTotalprice(BigDecimal totalprice) {
	this.totalprice = totalprice;
}


public Status getStatus() {
	return Status;
}


public void setStatus(Status status) {
	Status = status;
}


public int getQty() {
	return qty;
}


public void setQty(int qty) {
	this.qty = qty;
}


public User getUser() {
	return user;
}


public void setUser(User user) {
	this.user = user;
}


public Restaurent getRestro() {
	return restro;
}


public void setRestro(Restaurent restro) {
	this.restro = restro;
}


@Override
public String toString() {
	return "Order [orderdate=" + orderdate + ", totalprice=" + totalprice + ", Status=" + Status + ", qty=" + qty
			+ ", user=" + user + ", restro=" + restro + "]";
}





}
