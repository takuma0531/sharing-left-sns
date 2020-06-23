import axios from 'axios';

const api = axios.create({
  baseURL: VUE_APP_BASE_URL || 'http://localhost:5000/api/v1/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
