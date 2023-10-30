import axios from "axios";
import { API_URL, API_URL_CALORIES } from "../constants/apiConstant";
import authHeader from "./auth-header";

export const createGoal = async (ob) => {
    return await axios.post(`${API_URL}${API_URL_CALORIES}`, { ...ob }, { headers: authHeader() });
}
export const findLastWeekCalories = async (userId) => {
    return await axios.get(`${API_URL}${API_URL_CALORIES}/user-calories/${localStorage.getItem('id')}`, { headers: authHeader() });
}
export const exitsGoal = async (userId) => {
    return await axios.get(`${API_URL}${API_URL_CALORIES}/exits-goal/${localStorage.getItem('id')}`, { headers: authHeader() });
}
export const exitsCalory = async (userId) => {
    return await axios.get(`${API_URL}${API_URL_CALORIES}/exits-calory/${localStorage.getItem('id')}`, { headers: authHeader() });
}
export const createCalory = async (ob) => {
    return await axios.post(`${API_URL}${API_URL_CALORIES}/create-calory`, { ...ob }, { headers: authHeader() });
}
export const updateCalory = async (ob) => {
    return await axios.put(`${API_URL}${API_URL_CALORIES}/create-calory`, { ...ob }, { headers: authHeader() });
}