import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Itemservice from '../../service/Itemservice';
import Restaurentservice from '../../service/Restaurentservice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RestaurantPage = () => {
    const navigate = useNavigate();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const restaurantId = localStorage.getItem('userId');

    useEffect(() => {
        if (restaurantId) {
            fetchRestaurantDetails();
            fetchMenuItems();
        } else {
            navigate('/login');
        }
    }, [restaurantId, navigate]);

    const fetchRestaurantDetails = async () => {
        try {
            const data = await Restaurentservice.getRestaurantDetails(restaurantId);
            setRestaurantDetails(data);
        } catch (error) {
            setError('Failed to load restaurant details.');
        } finally {
            setLoading(false);
        }
    };

    const fetchMenuItems = async () => {
        try {
            const data = await Itemservice.getItemsByRestaurant(restaurantId);
            setMenuItems(data);
        } catch (error) {
            setError('Failed to load menu items.');
        } finally {
            setLoading(false);
        }
    };

    const deleteItem = (itemId) => {
        Itemservice.deleteItem(itemId)
            .then(() => {
                fetchMenuItems();
            })
            .catch(() => {
                setError("Failed to delete the item.");
            });
    };

    const handleUpdateRestaurant = () => {
        navigate('/edit-restaurant');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!restaurantDetails) {
        return <p>No restaurant details available.</p>;
    }
    // const handleLogout = () => {
    //     localStorage.removeItem('userId'); // Clear the user's session
    //     navigate('/login'); // Redirect to the login page
    // };
    const handleLogout = () => {
        // Debugging
        console.log('Before logout:', localStorage.getItem('userId'));
        localStorage.removeItem('userRole'); // If you're storing user role here
        localStorage.removeItem('userId'); // Clear the user's session
    
        // Verify removal
        console.log('After logout:', localStorage.getItem('userId'));
    
        navigate('/login'); // Redirect to the login page
    };
    
    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Manage Restaurant</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <h3 className="text-secondary">Restaurant Details</h3>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Email</th>
                        <th>Restaurant Name</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{restaurantDetails.email}</td>
                        <td>{restaurantDetails.restaurentname}</td>
                        <td>{restaurantDetails.mobileno}</td>
                        <td>{restaurantDetails.address}</td>
                        <td>{restaurantDetails.category}</td>
                        <td>
                            <button className="btn btn-info" onClick={handleUpdateRestaurant}>
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-5">
                <h3 className="text-secondary">Menu Items</h3>
                <Link to="/add-item">
                    <button type="button" className="btn btn-success mb-3">Add New Item</button>
                </Link>
                {menuItems.length > 0 ? (
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2" onClick={() => deleteItem(item.id)}>
                                            Delete
                                        </button>
                                        <Link to={`/edit-item/${item.id}`} state={{ itemData: item }}>
                                            <button className="btn btn-info">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    !error && <p>No items found for this restaurant.</p>
                )}
            </div>
            <button className="btn btn-danger mb-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default RestaurantPage;




