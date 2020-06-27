import apiService from '../../utils/api.service';
import { SET_TOKENS, CLEAR_TOKENS, SET_USER } from '../types/mutations.type';
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

const logoutUser = ({ commit }) => {
  commit(CLEAR_TOKENS);
  router.push('/');
};

const getUser = async ({ commit }) => {
  try {
    const refreshToken = jwtService.getToken();
    if (!refreshToken) return;
    apiService.setToken();
    const res = await apiService.api.get('/users');
    commit(SET_USER, res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const editUser = async ({ commit }, newUserInfo) => {
  try {
    const token = jwtService.getToken();
    if (!token) return;
    apiService.setToken();
    const res = await apiService.api.put('/users', newUserInfo);
    console.log(res.data); // Successfully updated
  } catch (err) {
    console.log(err.response.data);
  }
};

const deleteUser = async ({ commit }, password) => {
  try {
    const token = jwtService.getToken();
    if (!token) return;
    apiService.setToken();
    const res = await apiService.api.delete('/users', { data: { password: password }});
    console.log(res.data); // Successfully deleted
    router.push('/explore');
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

const actions = {
  registerUser,
  loginUser,
  getUser,
  editUser,
  deleteUser,
  authenticateUser,
  logoutUser,
};

export default actions;
