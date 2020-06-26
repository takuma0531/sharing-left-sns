import apiService from '../../utils/api.service';
import router from '../../router';
import jwtService from '../../utils/jwt.service';

const getProfile = async ({ commit }) => {
  console.log('getProfile executed');
  try {
    const token = jwtService.getToken();
    if (!token) return;
    apiService.setToken();
    const res = await apiService.api.get('/profile');
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const actions = {
  getProfile,
};

export default actions;
