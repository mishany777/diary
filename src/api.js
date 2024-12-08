import axios from "axios"
import { useAuth } from "./AuthContext";

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${localStorage.getItem('key')}`
  }
  return headers;
}


const instance = axios.create({
    baseURL: 'http://192.168.0.104:8000/api/', 
    timeout: 5000, 
    // headers: getHeaders()
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Token ${localStorage.getItem('key')}`
    // }
  });

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('key');
  if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  }, (error) => {
      return Promise.reject(error);
  });

export default instance;