import React from 'react'
import {Input} from "./BaseInput.style";

interface IProps {
    onChange?(e: React.ChangeEvent<HTMLInputElement>): any,
    value?: string,
    placeholder?: string
}

const BaseInput: React.FC<IProps> = ({
        onChange,
        value,
        placeholder
    }) => {
    return (
        <Input placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export { BaseInput }
