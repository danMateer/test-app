import styled, { css } from 'styled-components';

export interface StyleProps {
    rounded: boolean,
    btnTheme: "positive" | "neutral"
}

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 12px 24px;
    color: #fff;
    ${({ rounded }: StyleProps) => rounded && css`
        border-radius: 50%;
        height: 80px;
        width: 80px;
    `};
    ${({ btnTheme }: StyleProps) => btnTheme === "positive" && css`
        background-color: #53b577;
    `
}
`
