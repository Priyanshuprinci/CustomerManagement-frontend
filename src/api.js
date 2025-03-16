import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://customermanagement-backend.onrender.com/api',
  // baseURL: process.env.REACT_APP_API_URL || 'http://localhost:9000/api',
});

export const fetchCustomers = (params) => API.get('/customers', { params });
