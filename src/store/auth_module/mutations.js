import jwtService from '../../utils/jwt.service';

const setTokens = (state, { accessToken, refreshToken }) => {
  jwtService.saveToken(accessToken, refreshToken);
  if (accessToken) state.isAuthenticated = true;
};

const clearTokens = (state) => {
  state.isAuthenticated = false;
  jwtService.removeToken();
};

const setUser = (state, userInfo) => {
  state.userInfo = userInfo;
};

const enableUserDelete = (state) => {
  state.enabledUserDelete = true;
};

const mutations = {
  setTokens,
  clearTokens,
  setUser,
  enableUserDelete
};

export default mutations;
