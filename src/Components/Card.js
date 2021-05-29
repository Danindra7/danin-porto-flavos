import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
    .card {
    background-color: whitesmoke;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.2);
    }
`

function Card(props) {
    return (
        <CardStyled>
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </CardStyled>
    )
}

export default Card
