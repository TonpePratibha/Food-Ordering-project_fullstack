

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cartservice from '../../../service/Cartservice';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userId && userRole === 'user') {
            fetchCartItems();
        } else {
            navigate('/login');
        }
    }, [userId, userRole, navigate]);

    const fetchCartItems = async () => {
        try {
            const response = await Cartservice.getUserCarts(userId);
            setCartItems(response.data);
        } catch (error) {
            setError('Failed to load cart items.');
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = async (cartId, newQuantity) => {
        try {
            await Cartservice.updateCart(cartId, { qty: newQuantity });
            fetchCartItems(); // Refresh the cart items after update
        } catch (error) {
            console.error('Error updating cart item:', error.response ? error.response.data : error.message);
            setError('Failed to update cart item.');
        }
    };

    const removeFromCart = async (cartId) => {
        try {
            await Cartservice.deleteCart(cartId);
            fetchCartItems(); // Refresh the cart items after deletion
        } catch (error) {
            console.error('Error removing item from cart:', error.response ? error.response.data : error.message);
            setError('Failed to remove item from cart.');
        }
    };

    const handlePlaceOrder = () => {
        // Navigate to OrderPage with cartItems data
        navigate('/order', { state: { cartItems } });
    };

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
        navigate('/login');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Your Cart</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            {cartItems.length > 0 ? (
                <>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Item ID</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.itemid}</td> {/* Display itemid from backend response */}
                                    <td>{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.qty}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            className="form-control"
                                        />
                                    </td>
                                    <td>{(item.price * item.qty).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className="btn btn-primary mt-4" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </>
            ) : (
                !error && <p>Your cart is empty.</p>
            )}

            <button className="btn btn-danger mt-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default CartPage;


