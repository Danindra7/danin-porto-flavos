import React from 'react'
import './Button.css'

function Button({
    type,
    onClick,
    children
}) {
    return (
        <div>
            <button className="btn" type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
