import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Itemservice from '../../../service/Itemservice'; 

const UpdateItems = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get item ID from URL

    // Form state
    const [item, setItem] = useState({
        name: '',
        price: '',
        description: '',
        type: ''
    });

    const [error, setError] = useState('');

    // Fetch item details when component mounts
    useEffect(() => {
        async function fetchItem() {
            try {
                const itemData = await Itemservice.getItem(id);
                setItem(itemData);
            } catch (error) {
                setError('Failed to fetch item details.');
            }
        }

        fetchItem();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Ensure restaurant ID is set in the backend if required
            await Itemservice.updateItem(id, {
                name: item.name,
                price: item.price,
                description: item.description,
                type: item.type
            });
            // Navigate back to the restaurant page or show a success message
            navigate(`/restaurant`);
        } catch (error) {
            setError('Failed to update item. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Update Item</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={item.name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={item.price || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={item.description || ''}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        value={item.type || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success mt-3">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateItems;



