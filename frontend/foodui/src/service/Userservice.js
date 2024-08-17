
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/users';

// Register User
const registerUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data);
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to handle it in the component
    }
};
// const loginUser = async (loginData) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/signin`, loginData);
//         return response.data; // Assuming the response contains relevant login data
//     } catch (error) {
//         console.error('Login failed:', error);
//         throw error; // Re-throw the error to handle it in the component
//     }
// };
const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/signin`, loginData);
        return response;
    } catch (error) {
        console.error('Login error in Userservice:', error);
        throw error;
    }
};
const getUserDetails = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response;
    } catch (error) {
        throw error;
    }
};
const updateUser = async (userId, userDetails) => {
    try {
        const response = await axios.put(`${BASE_URL}/${userId}`, userDetails);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.response ? error.response.data : error.message}`);
    }
};

export default{
    registerUser,
    loginUser,
    getUserDetails,
    updateUser
}