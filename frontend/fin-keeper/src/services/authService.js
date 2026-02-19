import axios from "axios";

const API_URL = "http://localhost:3001/api/auth";

export async function registerUser(userData) {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
}

export async function loginUser(userData) {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
}

export function logoutUser() {
  localStorage.removeItem("token");
}
