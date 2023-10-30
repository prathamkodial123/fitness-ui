import axios from "axios";
import { API_URL, API_URL_CART } from "../constants/apiConstant";
import AuthService from "../services/auth.service";
import authHeader from "./auth-header";

class CartService {
    getList() {
        return axios.post(`${API_URL}${API_URL_CART}/user-cart`, { userId: AuthService.getUserId() }, { headers: authHeader() });
    }
    addToCart(cart) {
        return axios.post(`${API_URL}${API_URL_CART}`, cart, { headers: authHeader() });
    }
    removeToCart(userId, itemId) {
        return axios.delete(`${API_URL}${API_URL_CART}/${userId}/${itemId}`, { headers: authHeader() });
    }
    buyFromCart(cart) {
        return axios.post(`${API_URL}${API_URL_CART}/buy`, cart, { headers: authHeader() });
    }
}
export default CartService;