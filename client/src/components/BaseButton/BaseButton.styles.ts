import styled, { css } from 'styled-components';

export interface StyleProps {
    rounded: boolean,
    btnTheme: "positive" | "neutral"
}

export const Button = styled.button<StyleProps>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 12px 24px;
    color: #fff;
    ${({ rounded }) => rounded && css`
        border-radius: 50%;
        height: 80px;
        width: 80px;
    `};
    ${({ btnTheme }) => btnTheme === "positive" && css`
        background-color: #53b577;
    `
}
`
