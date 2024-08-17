import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve cartItems from the state
    const cartItems = location.state?.cartItems || [];

    // If cartItems is empty, redirect back to CartPage
    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    // Calculate total quantity and total price
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handlePayment = () => {
        navigate('/payment', { state: { totalPrice } });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Order Summary</h2>

            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Item ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.itemid}</td> {/* Display the itemid */}
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{(item.price * item.qty).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4>Total Quantity: {totalQuantity}</h4>
            <h4>Total Price: ₹{totalPrice.toFixed(2)}</h4>

            <button className="btn btn-primary mt-4" onClick={handlePayment}>
                Make Payment
            </button>

            <button className="btn btn-secondary mt-4 ml-2" onClick={() => navigate('/user-dashboard')}>
                Go to Dashboard
            </button>
        </div>
    );
};

export default OrderPage;






