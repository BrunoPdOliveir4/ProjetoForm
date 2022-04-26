import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
box-sizing:content-box;
display: grid;
place-items: center;
margin: 0 auto;
padding: 10px 0 10px 0;
border: 1px;
min-width: 100%;
height: 10vh;
border: 5vw;
/* border: 1px solid red; */
`
}
`;
export const Label = styled.label`
${() => css`
display:block;
padding: .1px .5px .1px .5px;
font-size: 20px;
margin: 0 0 .3vh 0;
`
}
`;
export const Input = styled.input`
${() => css`
display: block;
width: 50%;
padding: .3rem .8rem .3rem .8rem;
margin: .9vw 0 ;
border-radius: 5px;
font-size: 20px;
`
}
`;
