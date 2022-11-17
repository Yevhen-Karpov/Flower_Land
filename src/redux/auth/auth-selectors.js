const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getUserId = (state) => state.auth.user.id;
const getIsError = (state) => state.auth.errorReducer;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsError,
  getUserId,
};

export default authSelectors;
