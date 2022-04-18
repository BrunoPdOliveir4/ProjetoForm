import { useState, useEffect } from 'react';
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
        <p>Link 1</p>
        <p>Link 2</p>
      </Style.Menu>
      <Style.SideMenu showSideMenu={showSideMenu}>
        <p>Exemplo</p>
      </Style.SideMenu>
      <Style.ButtonMenu type="button" onClick={toggleShowSide}>Menu</Style.ButtonMenu>
      <Style.Title>Formulário de Cadastro</Style.Title>
      <Style.StyledA><a href="https://github.com/BrunoPdOliveir4/ProjetoForm">GitHub</a></Style.StyledA>
    </Style.Wrapper>
  );
};

export default Header;
