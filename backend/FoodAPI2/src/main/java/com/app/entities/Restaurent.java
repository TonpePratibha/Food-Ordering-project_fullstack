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
	
	@Column(unique = true, length = 20)
	private String email;
	@NotNull
	@Column(length = 100)
	private String address;
	@NotNull
	@Column(length = 15)
	private String mobileno;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)

	private Category category;

	@Lob
	private byte[] image;

	@Column(length = 10)
	private String password;

	public Restaurent() {

	}

	public Restaurent(String Restaurentname, String email, @NotNull String address, @NotNull String mobileno,
			Category category, byte[] image, String password) {
		super();
		
		this.Restaurentname = Restaurentname;
		this.email = email;
		this.address = address;
		this.mobileno = mobileno;
		this.category = category;
		this.image = image;
		this.password = password;
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

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
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
				+ ", mobileno=" + mobileno + ", category=" + category + ", image=" + Arrays.toString(image)
				+ ", password=" + password + ", getRestaurentname()=" + getRestaurentname() + ", getEmail()="
				+ getEmail() + ", getAddress()=" + getAddress() + ", getMobileno()=" + getMobileno()
				+ ", getCategory()=" + getCategory() + ", getImage()=" + Arrays.toString(getImage())
				+ ", getPassword()=" + getPassword() + ", getId()=" + getId() + ", toString()=" + super.toString()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + "]";
	}

	
}
