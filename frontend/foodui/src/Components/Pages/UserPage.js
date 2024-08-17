
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Itemservice from '../../service/Itemservice';
// import Cartservice from '../../service/Cartservice';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserPage = () => {
//     const navigate = useNavigate();
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [quantities, setQuantities] = useState({}); // To track quantities for each item

//     const userId = localStorage.getItem('userId');
//     const userRole = localStorage.getItem('userRole');

//     useEffect(() => {
//         if (userId && userRole === 'user') {
//             fetchItems();
//         } else {
//             navigate('/login');
//         }
//     }, [userId, userRole, navigate]);

//     const fetchItems = async () => {
//         try {
//             const response = await Itemservice.getAllItems(); 
//             setItems(response.data); 
//         } catch (error) {
//             setError('Failed to load items.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleQuantityChange = (itemId, value) => {
//         setQuantities(prevQuantities => ({
//             ...prevQuantities,
//             [itemId]: value
//         }));
//     };

//     const addToCart = (itemId) => {
//         const quantity = quantities[itemId] || 1; // Default to 1 if quantity is not set
//         Cartservice.addItemToCart(userId, itemId, quantity)
//             .then(() => {
//                 // Navigate to CartPage after adding item to cart
//                 navigate("/cart");
//             })
//             .catch((error) => {
//                 console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
//                 setError("Failed to add item to cart.");
//             });
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('userRole');
//         localStorage.removeItem('userId');
//         navigate('/login');
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="container mt-5">
//             <h2 className="text-primary mb-4">Welcome to the User Dashboard</h2>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <h3 className="text-secondary">Available Items</h3>
//             {items.length > 0 ? (
//                 <table className="table table-striped table-bordered">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>Item ID</th>
//                             <th>Item Name</th>
//                             <th>Price</th>
//                             <th>Description</th>
//                             <th>Type</th>
//                             <th>Quantity</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map(item => (
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.price}</td>
//                                 <td>{item.description}</td>
//                                 <td>{item.type}</td>
//                                 <td>
//                                     <input
//                                         type="number"
//                                         min="1"
//                                         value={quantities[item.id] || 1}
//                                         onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                                         className="form-control"
//                                     />
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-success" onClick={() => addToCart(item.id)}>
//                                         Add to Cart
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 !error && <p>No items available.</p>
//             )}

//             <button className="btn btn-danger mt-4" onClick={handleLogout}>
//                 Logout
//             </button>
//         </div>
//     );
// };

// export default UserPage;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Itemservice from '../../service/Itemservice';
import Cartservice from '../../service/Cartservice';
import Userservice from '../../service/Userservice';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserPage = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [quantities, setQuantities] = useState({}); // To track quantities for each item

    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');
    const username=localStorage.getItem('username');

    useEffect(() => {
        if (userId && userRole === 'user') {
            fetchItems();
            fetchUserDetails();
        } else {
            navigate('/login');
        }
    }, [userId, userRole, navigate]);

    const fetchItems = async () => {
        try {
            const response = await Itemservice.getAllItems(); 
            setItems(response.data); 
        } catch (error) {
            setError('Failed to load items.');
        } finally {
            setLoading(false);
        }
    };

    const fetchUserDetails = async () => {
        try {
            const response = await Userservice.getUserDetails(userId);
            setUser(response.data);
            console.log(response.data)
        } catch (error) {
            setError('Failed to load user details.');
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = (itemId, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: value
        }));
    };

    const addToCart = (itemId) => {
        const quantity = quantities[itemId] || 1; // Default to 1 if quantity is not set
        Cartservice.addItemToCart(userId, itemId, quantity)
            .then(() => {
                // Navigate to CartPage after adding item to cart
                navigate("/cart");
            })
            .catch((error) => {
                console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
                setError("Failed to add item to cart.");
            });
    };

    const handleUpdate = () => {
        // Navigate to UpdateUserPage with current user details
        navigate('/update-user', { state: { user } });
    };

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        navigate('/login');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Welcome to the {username} Dashboard</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            {/* User Details Section */}
            {user && (
                <div className="mb-4">
                    <h3 className="text-secondary">Your Details</h3>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Mobile No</th>
                                
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.mobileno}</td>
                                
                                <td>
                                    <button className="btn btn-primary" onClick={handleUpdate}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Items Section */}
            <h3 className="text-secondary">Available Items</h3>
            {items.length > 0 ? (
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.type}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantities[item.id] || 1}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => addToCart(item.id)}>
                                        Add to Cart
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>No items available.</p>
            )}

            <button className="btn btn-danger mt-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default UserPage;


