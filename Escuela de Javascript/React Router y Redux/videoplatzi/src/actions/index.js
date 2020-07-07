export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});
