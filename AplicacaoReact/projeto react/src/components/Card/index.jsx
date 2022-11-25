import React from 'react'
import './style.css'

export const Card = (props) => {
    return (
        <div
            className='card'
        >
            <img
                width="100%"
                src={props.img}
            />
            <h2>{props.nome}</h2>
            <p>{props.status}</p>
            <p>{props.especie}</p>
            <p>{props.genero}</p>

        </div>
    )
}