import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove session data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');

        // Redirect to login page
        navigate("/login");
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
