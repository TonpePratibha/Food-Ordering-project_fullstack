package com.app.dto;

import com.app.entities.Category;

public class RestaurentDTO  extends BaseDTO{
	   private String Restaurentname;
	    private String email;
	    private String address;
	    private String mobileno;
	    private Category category;
	    private String password;
	    
		public String getRestaurentname() {
			return Restaurentname;
		}
		public void setRestaurentname(String restaurentname) {
			this.Restaurentname = restaurentname;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public String getMobileno() {
			return mobileno;
		}
		public void setMobileno(String mobileno) {
			this.mobileno = mobileno;
		}
		public Category getCategory() {
			return category;
		}
		public void setCategory(Category category) {
			this.category = category;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@Override
		public String toString() {
			return "RestaurentDTO [restaurentname=" + Restaurentname + ", email=" + email + ", address=" + address
					+ ", mobileno=" + mobileno + ", category=" + category + ", password=" + password + "]";
		}
	    
	   
	    
	    
}
