import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:9000',
});

export const fetchCustomers = (params) => API.get('/customers', { params });
