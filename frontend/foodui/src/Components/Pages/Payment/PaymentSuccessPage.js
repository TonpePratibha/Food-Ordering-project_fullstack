import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate('/user-dashboard');
    };

    return (
        <div className="container mt-5">
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Payment Successful!</h4>
                <p>Your order has been confirmed. Thank you for your purchase!</p>
                <hr />
                <button className="btn btn-primary" onClick={handleGoToDashboard}>
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
