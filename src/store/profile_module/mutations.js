const setProfile = (state, profile) => {
  state.profile = profile;
  state.user = profile._user;
  state.posts = profile.posts;
};

const mutations = {
  setProfile,
};

export default mutations;
