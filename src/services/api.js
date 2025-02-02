import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Replace with your Django backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// a request interceptor to include the JWT token in headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

// Login function
export const login = (data) => api.post("/token/", data);
// Register function
export const register = (data) => api.post("/register/", data);
// Get orders function
export const getOrders = () => api.get("/orders/");

// Get cart items
export const getCart = () => api.get("/cart/");

// Remove item from cart
export const removeFromCart = (id) => api.delete(`/cart/items/${id}/`);
// Get restaurants
export const getRestaurants = () => api.get("/restaurants/");

// Get groceries
export const getGroceries = () => api.get("/groceries/");
export default api;