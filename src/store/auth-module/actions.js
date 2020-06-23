import apiService from '../../utils/api.service';
import { SET_TOKENS, CLEAR_TOKENS } from '../types/mutations.type';

const registerUser = async ({ commit }, userInfo) => {
  try {
    const res = await apiService.api.post('/users', userInfo);
    commit(SET_TOKENS, res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const loginUser = async ({ commit }, userInfo) => {
  try {
    const res = await apiService.api.post('/login', userInfo);
    commit(SET_TOKENS, res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const authenticateUser = async ({ commit }) => {
  try {
    apiService.setToken();
    const res = await apiService.api.get('token');
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const actions = {
  registerUser,
  loginUser,
  authenticateUser,
};

export default actions;
