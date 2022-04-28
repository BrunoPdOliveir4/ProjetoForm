import styled, { css } from 'styled-components';

export const Div = styled.div`
${() => css`
  display: block;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px 0;
  line-height: 50px;
 `
}`;

export const Paragraph = styled.p`
${() => css`
  border: 2px solid silver;
  margin: 20px;
  background-color: #007BC8;
  transition: background-color 500ms ease-in-out;
  padding: 0 20px;
  border-radius: 8px;

  &:hover{
    background-color: #1D5297;
    color: white;
  }
`
}`;

export const Title = styled.h1`
${() => css`
text-align: center;
font-size: 36px;
padding: 20px;
`
}`;
