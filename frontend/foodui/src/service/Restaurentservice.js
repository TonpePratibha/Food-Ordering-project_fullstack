

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/restaurents';

// Register User
const registerRestro = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data);
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to handle it in the component
    }
};
const loginRestro = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/signin`, loginData);
        return response.data; // Assuming the response contains relevant login data
    } catch (error) {
        console.error('Login failed:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};


// // Get all restaurants
const getAllRestaurents = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch restaurants:', error);
        throw error;
    }
};

// Get restaurant by ID
const getRestaurantDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch restaurant with ID ${id}:`, error);
        throw error;
    }
};
// Example: Check the URL and ID in the API call


// Update restaurant by ID
const updateRestaurent = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Failed to update restaurant with ID ${id}:`, error);
        throw error;
    }
};

// Delete restaurant by ID
const deleteRestaurent = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete restaurant with ID ${id}:`, error);
        throw error;
    }
};

export default {
    registerRestro,
    loginRestro,
    getAllRestaurents,
    getRestaurantDetails,
    updateRestaurent,
    deleteRestaurent
};