import styled, { css } from 'styled-components';

export const InputSearch = styled.input`
${() => css`
  float: center;
  width: 40%;
  text-align: center;
  margin: 0 auto;
  padding: .5rem .8rem .3rem .8rem;
  border-radius: 5px;
  font-size: 20px;
  border-color: navy;
  justify-content: center;
  align-items: center;
`
}`;

export const DivSearch = styled.div`
${() => css`
  padding: 20px 0;
  display: flex;
`
}`;
