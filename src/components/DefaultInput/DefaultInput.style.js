import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
display: flex;
justify-content: center;
align-items: center;`
}
`;
export const Label = styled.label`
${() => css`
padding: 5px;
margin: 0auto;
`
}
`;
export const Input = styled.input`
${() => css`
margin: 0auto;
`
}
`;
