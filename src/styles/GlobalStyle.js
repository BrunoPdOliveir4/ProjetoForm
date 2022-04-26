import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  body > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:visited {
    color: black;

  }
`;

export default GlobalStyle;
