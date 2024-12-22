import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor
api.interceptors.request.use(
  config => {
    // input user token
    const token = 'your-token';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// response interceptor
api.interceptors.response.use(
  response => response,
  async error => {
    console.error('API Error:', error.response || error.message);
    if (error?.response?.status === 401) {
      // Access token has expired, refresh it
      try {
        const newAccessToken = 'new-access-token-from-refresh-access-token-api';
        // Update the request headers with the new access token
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        // Retry the original request
        return api(error.config);
      } catch (refreshError) {
        // Handle token refresh error
        throw refreshError;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
