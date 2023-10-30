import axios from "axios";
import authHeader from "./auth-header";
import { API_URL, API_URL_TRAINING_CLASS } from "../constants/apiConstant";
class TrainingService {
    // Fetch the list of training classes
    get(id) {
        return axios.get(`${API_URL}${API_URL_TRAINING_CLASS}${id}`, { headers: authHeader() });
    };
    getList() {
        return axios.get(`${API_URL}${API_URL_TRAINING_CLASS}`, { headers: authHeader() });
    };
    // Add multiple items to the cart
    addToCartAll = (data) => {
        return axios.post(`${API_URL}/add-to-cart`, { headers: authHeader() }, data);
    };

    // Remove items from the cart
    removeToCartAll() {
        return axios.delete(`${API_URL}/remove-to-cart`, { headers: authHeader() });
    };

    // Add a single item to the cart
    addToCartSingle(data) {
        return axios.post(`${API_URL}/add-to-cart-single`, { headers: authHeader() }, data);
    };

    // Remove a single item from the cart
    removeToCartSingle = (data) => {
        return axios.post(`${API_URL}/remove-to-cart-single`, { headers: authHeader() }, data);
    };

    // Fetch all items in the cart
    getAllCartList() {
        return axios.get(`${API_URL}/get-cart`, { headers: authHeader() });
    };

}

export default TrainingService;