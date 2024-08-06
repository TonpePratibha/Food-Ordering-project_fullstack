package com.app.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import com.app.entities.Restaurent;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	 Optional<Admin>findByEmail(String Email);

}
