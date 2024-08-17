import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/orders'; // Replace with your actual backend URL

class OrderService {
    
    // Fetch orders for a specific user by userId
    getUserOrders(userId) {
        return axios.get(`${API_BASE_URL}/user/${userId}`);
    }

    // Place a new order
    placeOrder(orderData) {
        return axios.post(`${API_BASE_URL}/create`, orderData);
    }

    // Get details of a specific order by orderId
    getOrderById(orderId) {
        return axios.get(`${API_BASE_URL}/${orderId}`);
    }

    // Delete an order by orderId (if needed)
    deleteOrder(orderId) {
        return axios.delete(`${API_BASE_URL}/${orderId}`);
    }

    // Update an existing order (if needed)
    updateOrder(orderId, orderData) {
        return axios.put(`${API_BASE_URL}/${orderId}`, orderData);
    }
}

export default new OrderService();

