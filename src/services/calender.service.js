import axios from "axios";
import authHeader from "./auth-header";
import {API_URL} from "../constants/apiConstant";

class CalenderService {
    getList() {
        return axios.get(`${API_URL}/get-class-time`, { headers: authHeader() });
    }
}
export default CalenderService;