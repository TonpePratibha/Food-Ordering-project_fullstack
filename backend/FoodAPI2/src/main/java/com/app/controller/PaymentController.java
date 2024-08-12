package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Payment;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {
	
@Autowired
private PaymentService paymentservice;

@GetMapping
public List<Payment> getAllPayments() {
    return paymentservice.getAllPayments();
}

@GetMapping("/{id}")
public ResponseEntity<Payment> getPaymentById(@PathVariable(value = "id") Long id) {
    Optional<Payment> payment = paymentservice.getPaymentById(id);
    return payment.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
}

@PostMapping
public Payment createPayment(@RequestBody Payment payment) {
    return paymentservice.createPayment(payment);
}

@PutMapping("/{id}")
public ResponseEntity<Payment> updatePayment(@PathVariable(value = "id") Long id,
                                             @RequestBody Payment paymentDetails) {
    Payment updatedPayment = paymentservice.updatePayment(id, paymentDetails);
    return ResponseEntity.ok(updatedPayment);
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> deletePayment(@PathVariable(value = "id") Long id) {
    paymentservice.deletePayment(id);
    return ResponseEntity.noContent().build();
}
}
