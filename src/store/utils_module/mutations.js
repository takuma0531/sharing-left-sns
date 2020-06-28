const showCommentModal = (state) => {
  state.isShowCommentModal = !state.isShowCommentModal;
};

const showUserEditionModal = (state) => {
  state.isShowUserEditionModal = !state.isShowUserEditionModal;
};

const mutations = {
  showCommentModal,
  showUserEditionModal,
};

export default mutations;
