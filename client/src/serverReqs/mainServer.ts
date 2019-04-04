import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/*' }
});

export default instance;
