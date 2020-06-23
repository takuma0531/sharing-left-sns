import axios from 'axios';
import router from '../router';
import jwtService from './jwt.service';


const api = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:5000/api/v1/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// set refresh token to pass the token to server
const setToken = () => {
  if (!jwtService.getToken()) return;
  api.defaults.headers.common['x-refresh-token'] = jwtService.getToken();
};

const apiService = {
  api,
  setToken,
};

export default apiService;
