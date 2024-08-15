import axios from 'axios';

const BASE_URL = "http://localhost:8080/admins";

const registerAdmin = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data); // Ensure endpoint is correct
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Adjust this to match your actual API endpoint

const loginAdmin = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/signin`, loginData);
        // Response should contain admin-specific details
        return response.data; 
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};



// Method to Update Admin Details
const updateAdmin = async (adminId, updateData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${adminId}`, updateData);
        return response.data; // Assuming the response contains updated admin data
    } catch (error) {
        console.error('Update failed:', error);
        throw error;
    }
};

// Method to Delete Admin
const deleteAdmin = async (adminId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${adminId}`);
        return response.data; // Assuming the response contains a success message or relevant data
    } catch (error) {
        console.error('Deletion failed:', error);
        throw error;
    }
};


export default {
    registerAdmin,
    loginAdmin,
    
    updateAdmin,
    deleteAdmin
};