import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
    .btn{
        padding: 8px 20px;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: white;
        transition: all 0.1s ease;
    }
    .btn:active{
        background-color: lightgray;
        transition: all 0.1s ease;
    }
`

function Button({
    type,
    onClick,
    children
}) {
    return (
        <ButtonStyled>
            <button className="btn" type={type} onClick={onClick}>
                {children}
            </button>
        </ButtonStyled>
    )
}

export default Button
