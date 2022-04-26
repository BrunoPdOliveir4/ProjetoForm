import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
box-sizing:content-box;
display: grid;
place-items: center;
margin: 0 auto;
padding: 10px 0 15px 0;
border: 1px;
min-width: 100%;
height: 10vh;
padding-bottom: 2%;
/* border: 1px solid red; */
`
}
`;
export const Label = styled.label`
${() => css`
display: inline-block;
width: 52%;
padding: .2rem 0 0 .8rem;
font-size: 20px;
`
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
`;
