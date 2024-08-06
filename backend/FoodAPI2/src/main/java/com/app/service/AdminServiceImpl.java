package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.dto.AdminDTO;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.entities.Admin;
import com.app.entities.Restaurent;
import com.app.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ModelMapper modelmapper;

	@Override
	public Admin registerAdmin(AdminDTO dto) {
	Admin admin=new Admin();
	admin.setAdminname(dto.getAdminname());
	admin.setEmail(dto.getEmail());
	admin.setPassword(dto.getPassword());
		return adminRepository.save(admin);
	}
	@Override
	public AdminDTO authenticateadmin(AuthDTO dto) {
	Admin admin=adminRepository
			.findByEmail(dto.getEmail())
			.orElseThrow(()->
				new InvalidCredentialsException("invalid email ")
				
			);
	if(!dto.getPassword().equals(admin.getPassword())) {
		throw new InvalidCredentialsException("ivalid password");
	}
	return modelmapper.map(admin, AdminDTO.class);
	
}
	@Override
	public List<Admin> getAlladmins() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}



	@Override
	public void deleteadmin(Long id) {
		 adminRepository.deleteById(id);
	}

	@Override
	 public Optional<Admin> getadminById(Long id) {
         return adminRepository.findById(id);
     }



	@Override
	public Admin updateAdmin(Long id, Admin newadmin) {
		
		Admin admin = adminRepository.findById(id).orElseThrow(() -> new RuntimeException("Restaurant not found"));
       admin.setAdminname(newadmin.getAdminname());
       admin.setEmail(newadmin.getAdminname());
       admin.setPassword(newadmin.getPassword());
		
		
        return adminRepository.save(admin);
	}
	
	
}
