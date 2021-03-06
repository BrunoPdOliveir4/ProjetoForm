import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${() => css`
    background-color: #005cc8;
    color: white;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 40px;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  margin-block-start: 0;


`;

export const ButtonMenu = styled.button`
  font-family: 'Comfortaa', cursive;
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  display: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 922px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 922px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  ${({ showSideMenu }) => css`
    background-color: white;
    border-right: solid #d0d7de 1px;
    bottom: 0px;
    left: 0px;
    position: absolute;
    right: 50%;
    top: 58px;
    transform: translateX(-100%);
    transition: transform 200ms ease-in-out;

    ${showSideMenu && css`
      transform: translateX(0%);
    `}
  `}
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: #000;
`;

export const StyledSpan = styled.span`
  padding: 10px 0;
`;
