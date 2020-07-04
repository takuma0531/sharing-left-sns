import store from '../../store';
import { ADD_PROFILE_POST, DELETE_PROFILE_POST } from '../types/mutations.type.js';

const addPost = (state, { post }) => {
  store.commit(ADD_PROFILE_POST, post);

  state.posts.reverse();
  state.posts.push(post);
  state.posts.reverse();
};

const setPosts = (state, { posts }) => {
  state.posts = posts.reverse();
};

const setPost = (state, { post }) => {
  state.post = post;
};

const deletePost = (state, postId) => {
  store.commit(DELETE_PROFILE_POST, postId);

  const index = state.posts.findIndex((post) => post._id === postId);
  state.posts.splice(index, 1);
};

const mutations = {
  addPost,
  setPosts,
  setPost,
  deletePost,
};

export default mutations;
