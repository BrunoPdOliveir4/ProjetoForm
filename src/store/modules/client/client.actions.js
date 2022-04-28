/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const setClient = (client) => ({
  type: 'SET_CLIENT',
  payload: {
    client,
  },
});

const clientActions = {
  setClient,
};

export default clientActions;
