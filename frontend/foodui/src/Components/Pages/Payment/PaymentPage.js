import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const totalPrice = location.state?.totalPrice || 0;

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Add payment logic here, such as calling a payment API

        // After successful payment, navigate to a success page or dashboard
        navigate('/payment-success');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Payment Details</h2>
            <h4>Total Amount: ₹{totalPrice.toFixed(2)}</h4>

            <form onSubmit={handlePaymentSubmit}>
                <div className="form-group">
                    <label>Card Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        className="form-control"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>CVV</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Name on Card</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nameOnCard"
                        value={paymentDetails.nameOnCard}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success mt-3">
                    Submit Payment
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
