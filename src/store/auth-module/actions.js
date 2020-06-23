import apiService from '../../utils/api.service';

import { SET_TOKENS, CLEAR_TOKENS } from '../types/mutations.type';

const registerUser = async ({ commit }) => {
  const user = {
    nickname: 'Kai',
    email: 'kai@mail.com',
    password: '0000',
  };

  try {
    const res = await apiService.api.post('/users', user);
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const loginUser = async ({ commit }) => {
  const user = {
    email: 'jan@mail.comfsdf',
    password: '0000',
  };

  try {
    const res = await apiService.api.post('/login', user);
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const actions = {
  registerUser,
  loginUser,
};

export default actions;
