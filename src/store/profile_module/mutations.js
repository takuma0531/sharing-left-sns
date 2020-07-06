const setProfileUser = (state, profile) => {
  state.profile = profile;
  state.user = profile._user;
};

const setProfilePosts = (state, posts) => {
  state.posts = posts.reverse();
};

const addProfilePost = (state, post) => {
  state.posts.reverse();
  state.posts.push(post);
  state.posts.reverse();
};

const deleteProfilePost = (state, postId) => {
  const index = state.posts.findIndex((post) => post._id === postId);
  state.posts.splice(index, 1);
};

const mutations = {
  setProfileUser,
  setProfilePosts,
  addProfilePost,
  deleteProfilePost,
};

export default mutations;
