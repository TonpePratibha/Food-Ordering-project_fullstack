package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Payment;
import com.app.repository.PaymentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
	
    @Autowired
	private PaymentRepository paymentrepository;


    public List<Payment> getAllPayments() {
        return paymentrepository.findAll();
    }

    public Optional<Payment> getPaymentById(Long id) {
        return paymentrepository.findById(id);
    }

    public Payment createPayment(Payment payment) {
        return paymentrepository.save(payment);
    }

    public Payment updatePayment(Long id, Payment paymentDetails) {
        Payment payment = paymentrepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found for this id :: " + id));

        payment.setPaymentDate(paymentDetails.getPaymentDate());
        payment.setAmount(paymentDetails.getAmount());
        payment.setStatus(paymentDetails.getStatus());
        payment.setCardnum(paymentDetails.getCardnum());
        payment.setOrders(paymentDetails.getOrders());
        payment.setUser(paymentDetails.getUser());

        return paymentrepository.save(payment);
    }

    public void deletePayment(Long id) {
        Payment payment = paymentrepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found for this id :: " + id));
        paymentrepository.delete(payment);
    }
    
    
    
}
