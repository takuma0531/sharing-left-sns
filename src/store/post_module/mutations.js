const addPost = (state, { post }) => {
  state.posts.push(post);
};

const setPosts = (state, { posts }) => {
  state.posts = posts;
};

const setPost = (state, { post }) => {
  state.post = post;
};

const mutations = {
  addPost,
  setPosts,
  setPost,
};

export default mutations;
