package com.app.dto;

public class UserDTO extends BaseDTO{

	private String username;
	private String password;
	private String email;
	private String address;
	private String  mobileno;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	@Override
	public String toString() {
		return "UserDTO [username=" + username + ", password=" + password + ", email=" + email + ", address=" + address
				+ ", mobileno=" + mobileno + "]";
	}

	
	
}
