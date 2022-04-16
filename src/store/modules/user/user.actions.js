const setUser = (name, email, password) => ({
  type: 'SET_USER',
  payload: {
    name,
    email,
    password,
  },
});

const logout = () => ({
  type: 'LOGOUT',
});

const userActions = {
  setUser,
  logout,
};

export default userActions;
