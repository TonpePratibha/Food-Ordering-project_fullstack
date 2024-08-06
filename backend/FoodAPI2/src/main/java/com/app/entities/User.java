package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User extends BaseEntity {
	@Column(length = 50)

	private String username;

	@Column(length = 15)

	private String password;

	@Column( unique = true)

	private String email;

	@Column( length = 100)

	private String address;

	@Column( length = 30)

	private String mobileno;

	public User() {

	}

	public User(String username, String password, String email, String address, String mobileno) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.mobileno = mobileno;
	}

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
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", address=" + address
				+ ", mobileno=" + mobileno + "]";
	}

	

}
