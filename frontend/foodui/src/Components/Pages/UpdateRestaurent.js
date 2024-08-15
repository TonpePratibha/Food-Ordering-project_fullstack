import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Restaurentservice from '../../service/Restaurentservice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UpdateRestaurent = () => {
    const navigate = useNavigate();
    const [restaurantDetails, setRestaurantDetails] = useState({
        email: '',
        restaurentname: '',
        mobileno: '',
        address: '',
        category: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Get the logged-in restaurant ID from local storage
    const restaurantId = localStorage.getItem('userId');

    useEffect(() => {
        if (restaurantId) {
            fetchRestaurantDetails();
        } else {
            navigate('/login'); // Redirect to login if no restaurant ID is found
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurantDetails({
            ...restaurantDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Restaurentservice.updateRestaurent(restaurantId, restaurantDetails);
            navigate('/restaurant-page'); // Redirect to the restaurant page after successful update
        } catch (error) {
            setError('Failed to update restaurant details.');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Update Restaurant Details</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={restaurantDetails.email}
                        onChange={handleInputChange}
                        required
                        disabled
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="restaurentname">Restaurant Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="restaurentname"
                        name="restaurentname"
                        value={restaurantDetails.restaurentname}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mobileno">Mobile No</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobileno"
                        name="mobileno"
                        value={restaurantDetails.mobileno}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={restaurantDetails.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={restaurantDetails.category}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Update
                </button>
                <button type="button" className="btn btn-secondary mt-3 ml-3" onClick={() => navigate('/restaurant-page')}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default UpdateRestaurent;

