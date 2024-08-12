package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.Payment;

public interface PaymentService {

	List<Payment> getAllPayments();

	Optional<Payment> getPaymentById(Long id);

	Payment createPayment(Payment payment);

	Payment updatePayment(Long id, Payment paymentDetails);

	void deletePayment(Long id);
	

}
