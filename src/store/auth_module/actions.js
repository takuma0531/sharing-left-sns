import apiService from '../../utils/api.service';
import { SET_TOKENS, CLEAR_TOKENS } from '../types/mutations.type';
import router from '../../router';
import jwtService from '../../utils/jwt.service';

const registerUser = async ({ commit }, userInfo) => {
  try {
    const res = await apiService.api.post('/users', userInfo);
    commit(SET_TOKENS, res.data);
    router.push('/home');
  } catch (err) {
    console.log(err.response.data);
  }
};

const loginUser = async ({ commit }, userInfo) => {
  try {
    const res = await apiService.api.post('/login', userInfo);
    commit(SET_TOKENS, res.data);
    router.push('/home');
  } catch (err) {
    console.log(err.response.data);
  }
};

const authenticateUser = async ({ commit }) => {
  try {
    const token = jwtService.getToken();
    if (!token) return;
    apiService.setToken();
    const res = await apiService.api.get('token');
    commit(SET_TOKENS, res.data);
  } catch (err) {
    console.log(err.response.data);
    // router.push('/user/sign-in');
  }
};

const logoutUser = ({ commit }) => {
  commit(CLEAR_TOKENS);
  router.push('/');
};

const actions = {
  registerUser,
  loginUser,
  authenticateUser,
  logoutUser,
};

export default actions;
