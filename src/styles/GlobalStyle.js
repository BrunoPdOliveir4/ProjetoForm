import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Comfortaa', cursive;
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

  input[type="button"]{
    font-family: 'Comfortaa', cursive;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    width: 30%;
    height: 2rem;
    color: white;
    border: 0;
    border-radius: 5px;
    bottom: 0;
    cursor: pointer;
    font-size: 20px;
    background-color: #1D5297;
    transition: background-color 500ms ease-in-out;
  }

  input:hover[type="button"]{
    background-color: #1D1297;
  }
`;

export default GlobalStyle;
