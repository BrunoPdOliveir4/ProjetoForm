const initialState = null;

// eslint-disable-next-line default-param-last
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT': {
      const {
        nome, email, cel, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais,
      } = action.payload;

      return {
        nome,
        email,
        cel,
        tel,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        pais,
      };
    }
    default:
      return state;
  }
};

export default clientReducer;
