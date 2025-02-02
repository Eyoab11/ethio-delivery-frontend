import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Replace with your Django backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Login function
export const login = (data) => api.post("/token/", data);
// Register function
export const register = (data) => api.post("/register/", data);
export default api;