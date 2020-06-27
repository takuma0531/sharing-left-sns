const setProfileId = (state, id) => {
  state.profile.id = id;
};

const setProfileUser = (state, user) => {
  user.__v = undefined;
  state.profile.user = user;
};

const setProfilePosts = (state, posts) => {
  state.profile.posts = [];
};

const mutations = {
  setProfileId,
  setProfileUser,
  setProfilePosts,
};

export default mutations;
