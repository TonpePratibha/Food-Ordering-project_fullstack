package com.app.entities;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurents")
public class Restaurent extends BaseEntity {
	
	@Column( unique = true, length = 100)
	private String Restaurentname;
	
	@Column(unique = true, length = 100)
	private String email;
	
	@Column(length = 100)
	private String address;
	
	@Column(length = 15)
	private String mobileno;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)

	private Category category;

	

	@Column(length = 10)
	private String password;

	public Restaurent() {

	}

	public String getRestaurentname() {
		return Restaurentname;
	}

	public void setRestaurentname(String restaurentname) {
		Restaurentname = restaurentname;
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
		return "Restaurent [Restaurentname=" + Restaurentname + ", email=" + email + ", address=" + address
				+ ", mobileno=" + mobileno + ", category=" + category + ", password=" + password + "]";
	}

	
}
