import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import { userActions } from './store/modules/user';
import { GlobalStyle } from './styles';
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
      const { name, email, password } = localData.user;
      dispatch(userActions.setUser(name, email, password));
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
