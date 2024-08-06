package com.app.dto;

public class AdminDTO extends BaseDTO {
private String adminname;
private String password;
private String email;
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
	return "AdminDTO [adminname=" + adminname + ", password=" + password + ", email=" + email + "]";
}

}
