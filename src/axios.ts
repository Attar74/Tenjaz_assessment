import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/', // Set your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add authorization headers or log requests here
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;
