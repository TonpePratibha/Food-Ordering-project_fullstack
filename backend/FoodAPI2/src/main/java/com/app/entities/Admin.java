package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="admins" )
   
public class Admin extends BaseEntity {
	
	 @Column(length=20)	   
	    private String adminname;

	 @Column(length=20)   
	    private String password;

	 @Column(length=20)	
	    private String email;

	 public Admin(){
		 
	 }
	 

	public Admin(String adminname, String password, String email) {
		super();
		this.adminname = adminname;
		this.password = password;
		this.email = email;
	}


	public String getAdminname() {
		return adminname;
	}

	public void setAdminname(String adminname) {
		this.adminname = adminname;
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

	@Override
	public String toString() {
		return "Admin [adminname=" + adminname + ", password=" + password + ", email=" + email + "]";
	}

	 
	 
	

}
