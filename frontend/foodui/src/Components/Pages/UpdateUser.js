// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Userservice from '../../service/Userservice';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UpdateUser = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [user, setUser] = useState(null);
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [address, setAddress] = useState('');
//     const [mobileNo, setMobileNo] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (location.state && location.state.user) {
//             const { user } = location.state;
//             setUser(user);
//             setUsername(user.username);
//             setEmail(user.email);
//             setAddress(user.address);
//             setMobileNo(user.mobileno);
//             setPassword(user.password);
//         } else {
//             navigate('/user-dashboard'); 
//         }
//     }, [location.state, navigate]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();

//         try {
//             await Userservice.updateUser(user.id, { username, email, address, mobileno, password });
//             navigate('/user-dashboard'); 
//         } catch (error) {
//             console.error('Error updating user:', error.response ? error.response.data : error.message);
//             setError('Failed to update user.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-primary mb-4">Update User Details</h2>

//             {error && <div className="alert alert-danger">{error}</div>}

//             {user ? (
//                 <form onSubmit={handleUpdate}>
//                     <div className="mb-3">
//                         <label className="form-label">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Address</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Mobile No</label>
//                         <input
//                             type="tel"
//                             className="form-control"
//                             value={mobileNo}
//                             onChange={(e) => setMobileNo(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         Update
//                     </button>
//                 </form>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default UpdateUser;

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Userservice from '../../service/Userservice';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobileno, setMobileno] = useState(''); // Use mobileno instead of mobileNo
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (location.state && location.state.user) {
            const { user } = location.state;
            setUser(user);
            setUsername(user.username);
            setEmail(user.email);
            setAddress(user.address);
            setMobileno(user.mobileno); // Set mobileno here
        } else {
            navigate('/user-dashboard'); 
        }
    }, [location.state, navigate]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await Userservice.updateUser(user.id, { username, email, address, mobileno, password }); // Send mobileno
            navigate('/user-dashboard'); 
        } catch (error) {
            console.error('Error updating user:', error.response ? error.response.data : error.message);
            setError('Failed to update user.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Update User Details</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            {user ? (
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={mobileno} // Use mobileno here
                            onChange={(e) => setMobileno(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateUser;
