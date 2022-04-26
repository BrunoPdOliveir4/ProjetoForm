import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
box-sizing:content-box;
display: grid;
place-items: center;
margin: 0;
padding: 10px 0 15px 0;
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
width: 52%;
padding-left: .2rem .8rem 0 .8rem;
font-size: 20px;
`
}
  @media(max-width: 942px) {
  width: 54%;
  padding: 0;
  margin: 0;
  }
  @media(max-width: 758px) {
  width: 58%;
  padding: 0;
  margin: 0;
  }
  @media(max-width: 361px) {
  width: 62%;
  padding: 0;
  margin: 0;
  }
`;

export const Input = styled.input`
${() => css`
display: block;
width: 50%;
padding: .5rem .8rem .3rem .8rem;
margin: .9vw 0 ;
border-radius: 5px;
font-size: 20px;
border-color: navy;
`
}
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
`;
