import axios from "axios"


let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${localStorage.getItem('token')}`
}

const instance = axios.create({
    baseURL: 'http://192.168.0.104:8000/api/', // Replace with your base URL
    timeout: 5000, // Set the timeout for requests (optional)
    headers: headers
  });

export default instance;