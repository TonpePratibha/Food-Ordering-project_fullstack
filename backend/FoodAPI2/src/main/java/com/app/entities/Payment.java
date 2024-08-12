package com.app.entities;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="Payments")
public class Payment extends BaseEntity {
	
@Column(nullable=false)
	private LocalDateTime paymentDate;

@Column(nullable=false)
	private BigDecimal amount;
	
@Enumerated(EnumType.STRING)
@Column(name="payment_status")
private Status status;
	
@Column(name="card_number",nullable=false)
private Long cardnum;
	@JsonIgnore
@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="order_id")
private Order orders;
	@JsonIgnore
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	public Payment() {}

	
	
	public Payment(LocalDateTime paymentDate, BigDecimal amount, Status status, Long cardnum, Order orders, User user) {
		super();
		this.paymentDate = paymentDate;
		this.amount = amount;
		this.status = status;
		this.cardnum = cardnum;
		this.orders = orders;
		this.user = user;
	}



	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Long getCardnum() {
		return cardnum;
	}

	public void setCardnum(Long cardnum) {
		this.cardnum = cardnum;
	}

	public Order getOrders() {
		return orders;
	}

	public void setOrders(Order orders) {
		this.orders = orders;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Payment [paymentDate=" + paymentDate + ", amount=" + amount + ", status=" + status + ", cardnum="
				+ cardnum + ", orders=" + orders + ", user=" + user + "]";
	}

	
	
}
