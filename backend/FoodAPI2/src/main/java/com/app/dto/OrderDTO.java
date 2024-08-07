package com.app.dto;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.time.LocalDateTime;

public class OrderDTO extends BaseDTO{
	 private LocalDateTime orderdate;
	    private BigDecimal totalprice;
	    private String status;
	    private int qty;
	    private Long userId;
	    private Long restaurentId;
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
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public int getQty() {
			return qty;
		}
		public void setQty(int qty) {
			this.qty = qty;
		}
		public Long getUserId() {
			return userId;
		}
		public void setUserId(Long userId) {
			this.userId = userId;
		}
		public Long getRestaurentId() {
			return restaurentId;
		}
		public void setRestaurentId(Long restaurentId) {
			this.restaurentId = restaurentId;
		}
		@Override
		public String toString() {
			return "OrderDTO [orderdate=" + orderdate + ", totalprice=" + totalprice + ", status=" + status + ", qty="
					+ qty + ", userId=" + userId + ", restaurentId=" + restaurentId + "]";
		}
	    
		
}
