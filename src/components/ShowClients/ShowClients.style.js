import styled, { css } from 'styled-components';

export const Div = styled.div`
${() => css`
  padding-top: 20px;
  width: 42%;
  margin: 20px auto;

  display: flex;
`
}`;

export const Paragraph = styled.p`
${() => css`
  padding-bottom: 2px;
`
}`;
