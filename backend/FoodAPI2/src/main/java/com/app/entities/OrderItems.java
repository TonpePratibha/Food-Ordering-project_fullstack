package com.app.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="OrderItems")
public class OrderItems extends BaseEntity{
	
      @Column(nullable=false)
	 private int qty;
      
      @Column(nullable=false)
	    private BigDecimal price;

	    @ManyToOne
	    @JoinColumn(name = "orderid")
	    private Order order;

	    @ManyToOne
	    @JoinColumn(name = "itemid")
	    private Item item;
	    
	    public OrderItems() {
	    	
	    }
	    

		public OrderItems(int qty, BigDecimal price, Order order, Item item) {
			super();
			this.qty = qty;
			this.price = price;
			this.order = order;
			this.item = item;
		}


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

		public Order getOrder() {
			return order;
		}

		public void setOrder(Order order) {
			this.order = order;
		}

		public Item getItem() {
			return item;
		}

		public void setItem(Item item) {
			this.item = item;
		}

		@Override
		public String toString() {
			return "OrderItems [qty=" + qty + ", price=" + price + ", order=" + order + ", item=" + item + "]";
		}
	
	    
}
