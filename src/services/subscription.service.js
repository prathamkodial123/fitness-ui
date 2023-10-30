import axios from "axios";
import { API_URL, API_URL_SUBSCRIPTION } from "../constants/apiConstant";
import authHeader from "./auth-header";
class SubscriptionService {
    getList() {
        return axios.get(`${API_URL}${API_URL_SUBSCRIPTION}/user-subscription/${localStorage.getItem('id')}`, { headers: authHeader() });
    }
    activePlan(subId) {
        return axios.post(`${API_URL}${API_URL_SUBSCRIPTION}/active/${subId}/${localStorage.getItem('id')}`, { headers: authHeader() });
    }
    isActivePlan(opId) {
        return axios.post(`${API_URL}${API_URL_SUBSCRIPTION}/exits` ,{opId}, { headers: authHeader() });
    }
    getShortList() {
        return axios.get(`${API_URL}${API_URL_SUBSCRIPTION}/schedule/${localStorage.getItem('id')}`, { headers: authHeader() });
    }
}
export default SubscriptionService;