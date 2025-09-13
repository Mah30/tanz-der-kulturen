// src/services/api.js
import axios from "axios";

const API_BASE_URL =
  "http://localhost/tanz-der-kulturen-main/src/admin/php-api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API functions
export const classesAPI = {
  getAll: () => api.get("/classes/get_classes.php"),
  create: (classData) => api.post("/classes/add_class.php", classData),
  update: (id, classData) =>
    api.put(`/classes/update_class.php?id=${id}`, classData),
  delete: (id) => api.delete(`/classes/delete_class.php?id=${id}`),
};

export const eventsAPI = {
  getAll: () => api.get("/events/get_events.php"),
  create: (eventData) => api.post("/events/add_event.php", eventData),
  update: (id, eventData) =>
    api.put(`/events/update_event.php?id=${id}`, eventData),
  delete: (id) => api.delete(`/events/delete_event.php?id=${id}`),
};

export const authAPI = {
  login: (credentials) => api.post("/auth/login.php", credentials),
  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  },
};

export default api;
