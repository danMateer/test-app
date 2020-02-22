import React from 'react'

import './BaseInput.scss'

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
        <input className='base-input' placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export { BaseInput }
