import axios from "axios"

function getHeaders() {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${localStorage.getItem('token')}`
  }
  return headers;
}


const instance = axios.create({
    baseURL: 'http://192.168.0.104:8000/api/', 
    timeout: 5000, 
    headers: getHeaders()
  });

export default instance;