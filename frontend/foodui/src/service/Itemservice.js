import axios from 'axios';

const BASE_URL = 'http://localhost:8080/items'; // Replace with your actual backend URL

class ItemService {
  
  // Get all items
  getAllItems() {
    return axios.get(BASE_URL);
  }

  // Get item by ID
  getItemById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  createItem(item, restaurantId) {
    // Construct the URL with the restaurant ID
    const url = `${BASE_URL}/${restaurantId}`;
    
    return axios.post(url, item)
      .then(response => response.data)
      .catch(error => {
        console.error("Error creating item:", error.response ? error.response.data : error.message);
        throw error;
      });
}


updateItem(id, item) {
  return axios.put(`${BASE_URL}/${id}`, item)
    .then(response => response.data)
    .catch(error => {
      console.error("Error updating item:", error.response ? error.response.data : error.message);
      throw error;
    });
}


  // Delete an item
  deleteItem(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
  // Get items by restaurant ID
  getItemsByRestaurant(restaurantId) {
    return axios.get(`${BASE_URL}/restaurents/${restaurantId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching items:", error.response ? error.response.data : error.message);
            throw error;
        });
}

}


export default new ItemService();
