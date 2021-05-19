import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div>
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card
