const getters = {
  profile: (state) => state.profile,
  profileUserId: (state) => state.user._id,
  profileUserNickname: (state) => state.user.nickname,
  profileUserPosts: (state) => state.posts,
};

export default getters;
