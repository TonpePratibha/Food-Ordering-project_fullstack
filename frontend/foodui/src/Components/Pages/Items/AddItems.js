// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Itemservice from '../../../service/Itemservice'; 

// const AddItems = () => {
//     const navigate = useNavigate();

//     // Form state
//     const [item, setItem] = useState({
//         name: '',
//         price: '',
//         description: '',
//         type: ''
//     });

//     const [error, setError] = useState('');

//     // Get the logged-in restaurant ID from local storage
//     const restaurantId = localStorage.getItem('userId');

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setItem({
//             ...item,
//             [name]: value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             // Ensure restaurant ID is available
//             if (!restaurantId) {
//                 setError('Restaurant ID is missing. Please log in again.');
//                 return;
//             }

//             // Call the createItem service method with the restaurant ID
//             await Itemservice.createItem(item, restaurantId);
//             // Navigate back to the restaurant page or show a success message
//             navigate('/restaurant'); // Assuming this is the route to the restaurant page
//         } catch (error) {
//             setError('Failed to add item. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-primary mb-4">Add New Item</h2>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Item Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         value={item.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="price">Price</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         id="price"
//                         name="price"
//                         value={item.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <textarea
//                         className="form-control"
//                         id="description"
//                         name="description"
//                         value={item.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="type">Type</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="type"
//                         name="type"
//                         value={item.type}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-success mt-3">Add Item</button>
//             </form>
//         </div>
//     );
// };

// export default AddItems;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Itemservice from '../../../service/Itemservice';

const UpdateItems = () => {
    const { id } = useParams(); // Get the item ID from the URL parameters
    const navigate = useNavigate();

    const [item, setItem] = useState({
        name: '',
        price: '',
        description: '',
        type: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        // Fetch the item details when the component mounts
        const fetchItem = async () => {
            try {
                const response = await Itemservice.getItemById(id);
                setItem({
                    name: response.name || '',
                    price: response.price || '',
                    description: response.description || '',
                    type: response.type || ''
                });
            } catch (error) {
                setError('Failed to load item details.');
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Update the item
            await Itemservice.updateItem(id, item);
            // Navigate back to the restaurant page or show a success message
            navigate(`/restaurant/${localStorage.getItem('userId')}`);
        } catch (error) {
            setError('Failed to update item. Please try again.');
        }
    };

    // Show loading state or error if any
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Edit Item</h2>

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
