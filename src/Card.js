
import React from 'react'
import './card.css'

export default function Card({ id, title, image, rate, description, trailer }) {

    return (

        <div className="card" >
            <img src={require(`./images/${image}`)} alt='poster' />
            <div className="content">
                <h1 className="name">{title} </h1>
                <h3 className="infos">
                    <i className="fa-solid fa-star"></i> {rate}/10
                </h3>
                <p className="short-desc">{description}</p>
                <button className='trailer-button'>Watch Trailer <span style={{ display: 'none' }}>{trailer}</span></button>
            </div>
        </div>
    )
}
