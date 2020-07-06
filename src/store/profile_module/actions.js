import apiService from '../../utils/api.service';
import router from '../../router';

// import mutations type
import { SET_PROFILE_USER, SET_PROFILE_POSTS } from '../types/mutations.type';

const getProfileInfo = async ({ commit }, userId) => {
  try {
    const res = await apiService.api.get(`/profile/${userId}`);
    const { profile, posts } = res.data;

    commit(SET_PROFILE_USER, profile);
    commit(SET_PROFILE_POSTS, posts);
  } catch (err) {
    console.log(err.response.data);
    console.log(err);
  }
};

const actions = {
  getProfileInfo,
};

export default actions;
