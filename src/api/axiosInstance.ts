// src/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://46.202.88.87:8010/usuarios/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request → adjunta el token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de response → maneja expiración de sesión
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // 🧹 Limpieza completa de sesión
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      // Redirigir al login
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
