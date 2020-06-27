import apiService from '../../utils/api.service';
import router from '../../router';

// import mutations type
import {
  SET_PROFILE,
} from '../types/mutations.type';

const getProfile = async ({ commit }, userId) => {
  try {
    const res = await apiService.api.get(`/profile/${userId}`);
    const { profile } = res.data;

    commit(SET_PROFILE, profile);
  } catch (err) {
    console.log(err);
  }
};

const actions = {
  getProfile,
};

export default actions;
