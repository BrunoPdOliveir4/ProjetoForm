import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 15px 0px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  ${({ loading }) => css`
    opacity: 0;
    height: 100%;
    transition: opacity 200ms ease-in-out;

    ${!loading && css`
      opacity: 1;
    `}
  `}
`;

export const LoadingText = styled.div`
  ${({ loading }) => css`
    position: absolute;
    opacity: 0;

    ${loading && css`
      opacity: 1;
    `}
  `}
`;

export const Button = styled.button`
  border: none;
  background-color: royalblue;
  color: white;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`;
