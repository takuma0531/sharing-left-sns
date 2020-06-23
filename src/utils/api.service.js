import axios from 'axios';
import jwtService from './jwt.service';

const apiService = {
  api: axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:5000/api/v1/',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  }),

  // set refresh token to pass the token to server
  setToken: () => {
    if (!jwtService.getToken()) return;
    this.api.defaults.headers.common['x-refresh-token'] = jwtService.getToken();
  },
};

export default apiService;
