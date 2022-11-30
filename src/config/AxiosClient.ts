import axios from 'axios';

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_BE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const localPersist = localStorage.getItem(`persist:${import.meta.env.VITE_APP_PERSIST_KEY}`) ?? null;
const localPersistParse = localPersist != null ? JSON.parse(localPersist) : null;
const { user } = localPersistParse != null ? JSON.parse(localPersistParse.user) : {user: null};

axiosClient.interceptors.request.use(
  (config: any) => {
    config.headers['Authorization'] = `${user.tokenType ?? null} ${user.token ?? null}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;
