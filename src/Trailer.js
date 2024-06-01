import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams, useLocation } from 'react-router-dom';
import './trailer.css'

export default function Trailer(props) {
    const titre = useParams().id

    const location = useLocation()
    console.log(location)
    console.log(location.state.titre)

    return (
        <div className='trailer' >
            <h1 className='trailer-title'>{titre}
                <span>
                    <i className="fa-solid fa-star"></i> {location.state.rate}/10
                </span>
            </h1>
            <div className='trailer-container'>
                <div className='summary'>
                    <div className='summary-image'>
                        <img src={require(`./images/${location.state.image}`)} alt='im' />
                    </div>

                    <div className='summary-text'>
                        <h3>Summary</h3>
                        {location.state.desc}
                    </div>
                </div>

                <div className='video'>
                    <h3>Trailer</h3>
                    <div className="ratio ratio-21x9">
                        <iframe src={`${location.state.annonce}`} title="YouTube video" allowFullScreen></iframe>
                    </div>
                </div>
            </div >
        </div >
    )
}
