import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

api.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        console.log("Token adicionado:", token);
      }
      return config;
    },
    (error) => Promise.reject(error)
);



