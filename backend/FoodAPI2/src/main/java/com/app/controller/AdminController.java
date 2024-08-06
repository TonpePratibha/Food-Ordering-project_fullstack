package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.dto.ApiResponse;
import com.app.dto.AuthDTO;
import com.app.dto.RestaurentDTO;
import com.app.entities.Admin;
import com.app.entities.Restaurent;
import com.app.service.AdminService;

@RestController
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	 @PostMapping("/register")
		public ResponseEntity<Admin> registerAdmin(@RequestBody AdminDTO dto){
	     {
	    Admin registeredadmin=adminService.registerAdmin(dto)	;
	    return ResponseEntity.status(HttpStatus.CREATED).body(registeredadmin);
	     }}
	     
	    
	     @PostMapping("/signin")
	     public ResponseEntity<?> AdminSignIn(@RequestBody AuthDTO dto){
	    	 System.out.println("in sign in of restro"+dto);
	    	 try {
	    		 AdminDTO adminDto=adminService.authenticateadmin(dto);
	    		 return ResponseEntity.ok(adminDto);
	    	 }
	    	 catch(RuntimeException e) {
	    		 System.out.println(e);
	    		 
	    		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
	    	 }
	     }
	     
	     @GetMapping
		    public List<Admin> getAlladmins() {
		        return adminService.getAlladmins();
		    }
	     
	     @DeleteMapping("/{id}")
	     public ResponseEntity<Void> deleteadmin(@PathVariable Long id) {
	        adminService.deleteadmin(id);
	         return ResponseEntity.noContent().build();
	     }

	     @GetMapping("/{id}")
	     public ResponseEntity<Admin> getadminById(@PathVariable Long id) {
	         Optional<Admin> admin = adminService.getadminById(id);
	         return admin.map(ResponseEntity::ok)
	        		 .orElseGet(() -> ResponseEntity.notFound().build());
	     }
	     
	     @PutMapping("/{id}")
	     public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin newadmin) {
	         Admin updatedadmin=adminService.updateAdmin(id, newadmin);
	         return ResponseEntity.ok(updatedadmin);
	     }
}
