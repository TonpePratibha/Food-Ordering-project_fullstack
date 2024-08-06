package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Restaurent;
@Repository
public interface RestaurentRepository  extends JpaRepository<Restaurent, Long>{
    Optional<Restaurent>findByEmail(String Email);
}
