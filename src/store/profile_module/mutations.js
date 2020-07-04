const setProfile = (state, profile) => {
  state.profile = profile;
  state.user = profile._user;
  state.posts = profile.posts.reverse();
};

const addProfilePost = (state, post) => {
  console.log('added profile post');
  state.posts.reverse();
  state.posts.push(post);
  state.posts.reverse();
}

const deleteProfilePost = (state, postId) => {
  const index = state.posts.findIndex((post) => post._id === postId);
  state.posts.splice(index, 1);
}

const mutations = {
  setProfile,
  addProfilePost,
  deleteProfilePost
};

export default mutations;
