import apiService from '../../utils/api.service';
import router from '../../router';

// import mutations type
import { SET_PROFILE_ID, SET_PROFILE_USER, SET_PROFILE_POSTS } from '../types/mutations.type';

const getProfile = async ({ commit }, userId) => {
  try {
    const res = await apiService.api.get(`/profile/${userId}`);
    const { profile } = res.data;
    const { _id, _user, posts } = profile;

    commit(SET_PROFILE_ID, _id);
    commit(SET_PROFILE_USER, _user);
    commit(SET_PROFILE_POSTS, posts);
  } catch (err) {
    console.log(err);
  }
};

const actions = {
  getProfile,
};

export default actions;
