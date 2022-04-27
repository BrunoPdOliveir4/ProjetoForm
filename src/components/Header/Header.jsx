import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './Header.style';

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleShowSide = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleResize = () => {
    if (window.innerWidth >= 922 && showSideMenu) {
      toggleShowSide();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // Render
  return (
    <Style.Wrapper>
      <Style.Menu>
        <Link to="/">
          <Style.StyledSpan>Home</Style.StyledSpan>
        </Link>
        <Link to="/consult">
          <Style.StyledSpan>Consulta</Style.StyledSpan>
        </Link>
      </Style.Menu>
      <Style.SideMenu showSideMenu={showSideMenu}>
        <Link to="/"><p>Home </p></Link>
      </Style.SideMenu>
      <Style.ButtonMenu type="button" onClick={toggleShowSide}>Menu</Style.ButtonMenu>
      <Style.Title>Formulário de Cadastro</Style.Title>
      <Style.StyledA><a href="https://github.com/BrunoPdOliveir4/ProjetoForm" target="/blank">GitHub</a></Style.StyledA>
    </Style.Wrapper>
  );
};

export default Header;
