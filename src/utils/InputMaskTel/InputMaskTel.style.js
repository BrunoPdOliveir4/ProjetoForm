import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
box-sizing:content-box;
display: grid;
place-items: center;
margin: 0;
padding: 10px 0 25px 0;
border: 1px;
min-width: 100%;
height: 10vh;
/* border: 1px solid red; */
`
}
`;
export const Label = styled.label`
${() => css`
display: inline-block;
width: 54%;
padding: .2rem .8rem 0 .8rem;
font-size: 20px;
margin-top: 20px;
text-transform: capitalize;
`
}
  @media(max-width: 942px) {
  width: 58%;
  padding: 0;
  margin: 0;
  }
  @media(max-width: 758px) {
  width: 60%;
  padding: 0;
  margin: 0;
  }
  @media(max-width: 361px) {
  width: 64%;
  padding: 0;
  margin: 0;
  }
`;
