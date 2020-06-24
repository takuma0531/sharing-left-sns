import jwtService from '../../utils/jwt.service';

const setTokens = (state, { accessToken, refreshToken }) => {
  jwtService.saveToken(accessToken, refreshToken);
  if (accessToken) state.isAuthenticated = true;
};

const clearTokens = (state) => {
  state.isAuthenticated = false;
  jwtService.removeToken();
};

const mutations = {
  setTokens,
  clearTokens,
};

export default mutations;

// kai@mail.com
// 0000
