import axios from "axios";
import { API_URL, API_URL_User } from "../constants/apiConstant";
class AuthService {
  login(username, password) {
    return axios
      .post(`${API_URL}${API_URL_User}generate-token`, { username, password });
  }
  getUser(username) {
    return axios
      .post(`${API_URL}${API_URL_User}current-id`, { username });
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.replace('/login');
  }

  isLoggedIn() {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id")
    if (token && id) {
      return true;
    } else {
      return false;
    }
  }
  getUserId() {
    return localStorage.getItem("id");
  }
}
export default new AuthService();