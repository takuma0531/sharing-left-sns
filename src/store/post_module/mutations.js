const addPost = (state, { post }) => {
  state.posts.push(post);
};

const setPosts = (state, { posts }) => {
  state.posts = posts;
};

const setPost = (state, { post }) => {
  state.post = post;
};

const deletePost = (state, postId) => {
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
