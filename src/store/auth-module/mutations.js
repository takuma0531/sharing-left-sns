import jwtService from '../../utils/jwt.service';

const setTokens = (state, { accessToken, refreshToken }) => {
  jwtService.saveToken(accessToken, refreshToken);
};

const clearTokens = (state) => {
  jwtService.removeToken();
};

const mutations = {
  setTokens,
  clearTokens,
};

export default mutations;
