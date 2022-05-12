import styled, { css } from 'styled-components';

export const Box = styled.section`
    max-width: 900px;
    /* костыль, выпилить высоту или написать что-то путное */
    min-height: 100vh;
    background: white;

    display: flex;
    align-items: top;
    justify-content: space-between;
    div {
        width: fit-content;
        padding: 20px;
    }
`;

export const RandomElement = styled.div<{isSelected: boolean}>`
font-size: 32px;
    ${({isSelected}) => isSelected ? css`
        color: gray;
    ` : css` color: green;`}
`;