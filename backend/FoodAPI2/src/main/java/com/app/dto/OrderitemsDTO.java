package com.app.dto;

import java.math.BigDecimal;

public class OrderitemsDTO extends BaseDTO{
	  
	    private int qty;
	    private BigDecimal price;
	    private Long orderId;
	    private Long itemId;
		
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
		public Long getOrderId() {
			return orderId;
		}
		public void setOrderId(Long orderId) {
			this.orderId = orderId;
		}
		public Long getItemId() {
			return itemId;
		}
		public void setItemId(Long itemId) {
			this.itemId = itemId;
		}
		@Override
		public String toString() {
			return "OrderitemsDTO [ qty=" + qty + ", orderId=" + orderId + ", itemId=" + itemId + "]";
		}
	    
}
