import axios from 'axios';

const BASE_URL = 'http://localhost:8080/carts';  

class CartService {
    // Get all cart items for a user
    getUserCarts(userId) {
        return axios.get(`${BASE_URL}/user/${userId}`);
    }

    // Add an item to the cart
    async addItemToCart(userId, itemId, quantity) {
        try {
            // Fetch the item details to get the price
            const itemResponse = await axios.get(`http://localhost:8080/items/${itemId}`);
            const itemPrice = itemResponse.data.price;

            // Prepare the cart data with price
            const cartData = {
                userid: userId,
                itemid: itemId,
                qty: quantity,
                price: itemPrice 
            };

            // Make the POST request to add the item to the cart
            return axios.post(BASE_URL, cartData);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error;
        }
    }

    // Update cart item quantity or price
    updateCart(cartId, updatedCart) {
        return axios.put(`${BASE_URL}/${cartId}`, updatedCart);
    }

    // Remove an item from the cart
    deleteCart(cartId) {
        return axios.delete(`${BASE_URL}/${cartId}`);
    }
}

export default new CartService();


