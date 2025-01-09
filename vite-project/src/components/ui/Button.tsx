import React, { Children, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode
}

const Button = ({children}: ButtonProps) => {
    return (
        <div>{children}</div>
    )
}

export default Button