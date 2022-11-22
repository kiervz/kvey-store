import axios from 'axios';

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_BE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosClient.interceptors.request.use(
  (config: any) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;
