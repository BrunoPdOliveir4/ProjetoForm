/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const setClient = (nome, email, tel, cep, rua, numero, complemento, bairro, cidade, estado) => ({
  type: 'SET_CLIENT',
  payload: {
    nome,
    email,
    tel,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  },
});

const clientActions = {
  setClient,
};

export default clientActions;
