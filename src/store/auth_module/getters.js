const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  userInfo: (state) => state.userInfo,
  currentUserId: (state) => state.userInfo._id,
  enabledUserDelete: (state) => state.enabledUserDelete,
};

export default getters;
