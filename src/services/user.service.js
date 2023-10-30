import axios from "axios";
import { API_URL, API_URL_User } from "../constants/apiConstant";

export const getUser = async (id) => {
    return await axios.get(`${API_URL}${API_URL_User}${id}`);
}
export const getUsers = async () => {
    return await axios.get(`${API_URL}${API_URL_User}`);
}
export const createUser = async (user) => {
    return await axios.post(`${API_URL}${API_URL_User}`, user);
}
export const exitsEmail = async (email) => {
    return await axios.post(`${API_URL}${API_URL_User}exits-email`, { email });
}
export const exitsUsername = async (username) => {
    return await axios.post(`${API_URL}${API_URL_User}exits-username`, { username });
}
export const exitsMobileNo = async (mobileNo) => {
    return await axios.post(`${API_URL}${API_URL_User}exits-mobile-no`, { mobileNo });
}
export const updateUser = async (id, user) => {
    return await axios.put(`${API_URL}${API_URL_User}${id}`, user);
}
export const deleteUser = async (id,) => {
    return await axios.delete(`${API_URL}${API_URL_User}${id}`);
}
