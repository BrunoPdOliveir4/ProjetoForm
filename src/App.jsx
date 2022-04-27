/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
// eslint-disable-next-line import/named
import { clientActions } from './store/modules/client';
import { GlobalStyle } from './styles';
// eslint-disable-next-line import/named
import { defaultTheme } from './themes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localDataRaw = localStorage.getItem('react-base');

    if (!localDataRaw) {
      return;
    }
    const localData = JSON.parse(localDataRaw);

    // User
    if (localData.user) {
      const {
        nome, email, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais,
      } = localData.user;
      // eslint-disable-next-line max-len
      dispatch(clientActions.setClient(nome, email, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais));
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
