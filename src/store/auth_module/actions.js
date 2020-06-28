import apiService from '../../utils/api.service';
import {
  SET_TOKENS,
  CLEAR_TOKENS,
  SET_USER,
  ENABLE_USER_DELETE,
} from '../types/mutations.type';
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
    const res = await apiService.api.post('/auth/login', userInfo);
    commit(SET_TOKENS, res.data);
    router.push('/home');
  } catch (err) {
    console.log(err.response.data);
  }
};

const logoutUser = ({ commit }) => {
  commit(CLEAR_TOKENS);
  router.push('/explore');
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

const deleteUser = async ({ commit }) => {
  try {
    const refreshToken = jwtService.getToken();
    if (!refreshToken) return;
    apiService.setToken();
    const res = await apiService.api.delete('/users');
    console.log(res.data); // Successfully deleted
    commit(CLEAR_TOKENS);
    router.push('/explore');
  } catch (err) {
    console.log(err.response.data);
  }
};

const authenticateUser = async ({ commit }) => {
  try {
    const refreshToken = jwtService.getToken();
    if (!refreshToken) return;
    apiService.setToken();
    const res = await apiService.api.get('/token');
    commit(SET_TOKENS, res.data);
  } catch (err) {
    console.log(err.response.data);
    // router.push('/user/sign-in');
  }
};

const checkPassword = async ({ commit }, password) => {
  try {
    const refreshToken = jwtService.getToken();
    if (!refreshToken) return;
    apiService.setToken();
    const res = await apiService.api.post('/auth/verifying-password', password);
    console.log(res.data); // You can change your nickname and email.
    commit(ENABLE_USER_DELETE);
  } catch (err) {
    console.log(err.response.data);
  }
};

const actions = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  editUser,
  deleteUser,
  authenticateUser,
  checkPassword,
};

export default actions;
