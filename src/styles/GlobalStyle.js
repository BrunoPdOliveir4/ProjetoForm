import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Comfortaa', cursive;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:visited {
    color: black;
  }

  header a:visited {
    color: white;
  }

  input[type="submit"], input[type="button"]{
    font-family: 'Comfortaa', cursive;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    top: -20px;
    margin: 40px auto;
    width: 15%;
    height: 2.25rem;
    color: white;
    border: 0;
    border-radius: 5px;
    bottom: 0;
    cursor: pointer;
    font-size: 20px;
    background-color: #1D5297;
    transition: background-color 500ms ease-in-out;
  }

  input:hover[type="submit"], input:hover[type="button"]{
    background-color: #1D1297;
  }

  li {
    list-style: none;
  }
  .title-page{
    padding: 40px 60px;
  }

  .container-register {
   background-color: #F7F7F7;
   border-radius: 20px;
   width: 50%;
   margin: 0 auto;
  }

.inputmask {
  display: block;
  width: 50%;
  padding: .5rem .8rem .3rem .8rem;
  margin: .10vw 0;
  border-radius: 5px;
  font-size: 20px;
  border-color: navy;

    @media(max-width: 942px) {
    width: 54%;
    padding: 10px 0;
    text-indent: 10px;
    }
    @media(max-width: 758px) {
    width: 58%;
    }
    @media(max-width: 361px) {
    width: 62%;
    }
  }

`;
export default GlobalStyle;
