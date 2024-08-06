package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AdminDTO;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.entities.Admin;
import com.app.entities.Restaurent;

public interface AdminService {
	 Admin registerAdmin(AdminDTO dto);
	  AdminDTO authenticateadmin(AuthDTO dto);
	  List<Admin> getAlladmins();
	  void deleteadmin(Long id);
	  Optional<Admin> getadminById(Long id);
	  Admin updateAdmin(Long id, Admin admin);
}
