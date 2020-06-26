import jwtService from '../../utils/jwt.service';

const setTokens = (state, { accessToken, refreshToken }) => {
  jwtService.saveToken(accessToken, refreshToken);
  if (accessToken) state.isAuthenticated = true;
};

const clearTokens = (state) => {
  state.isAuthenticated = false;
  jwtService.removeToken();
};

const setUser = (state, { nickname, email }) => {
  state.userInfo = {
    nickname,
    email,
  };
};

const mutations = {
  setTokens,
  clearTokens,
  setUser,
};

export default mutations;
