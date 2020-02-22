import React, { ReactNode } from "react";
import { Button, StyleProps } from "./BaseButton.styles";

interface IProps extends Partial<StyleProps> {
    children: ReactNode,
    onClick?(e: React.SyntheticEvent): any
};

const BaseButton: React.FC<IProps> = ({
        children,
        onClick,
        btnTheme= "positive",
        rounded= false
    }) => {
    return (
        <Button btnTheme={btnTheme} rounded={rounded} onClick={onClick}>
            {children}
        </Button>
    )
};

export { BaseButton };
