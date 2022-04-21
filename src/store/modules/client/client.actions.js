// eslint-disable-next-line max-len
const setClient = (nome, email, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais) => ({
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
    pais,
  },
});

const clientActions = {
  setClient,
};

export default clientActions;
