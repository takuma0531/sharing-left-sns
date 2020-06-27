import apiService from '../../utils/api.service';
import router from '../../router';
import jwtService from '../../utils/jwt.service';

// import mutations type
import { ADD_POST, SET_POSTS, SET_POST } from '../types/mutations.type';

const addPost = async ({ commit }, post) => {
  const refreshToken = jwtService.getToken();
  if (!refreshToken) return;
  apiService.setToken();

  try {
    const res = await apiService.api.post('/posts', post);
    commit(ADD_POST, res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const getPosts = async ({ commit }) => {
  const res = await apiService.api.get('/posts');
  commit(SET_POSTS, res.data);
};

const getPost = async ({ commit }, postId) => {
  const res  = await apiService.api.get(`posts/${postId}`);
  console.log(res.data);
  commit(SET_POST, res.data);
}

const deletePost = async ({ commit }, postId) => {
  // DELETE a post
}

const actions = {
  addPost,
  getPosts,
  getPost,
  deletePost,
};

export default actions;
