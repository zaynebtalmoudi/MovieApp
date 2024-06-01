import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import './card.css'

export default function CardsList(props) {

    const finalList = props.mesCards.map((card) => {
        const dataTo = {
            titre: card.movieTitle,
            desc: card.movieDescription,
            annonce: card.movieTrailer,
            image: card.movieImage,
            rate: card.movieRate,
        }
        return (
            <Link to={`/movies/trailer/${card.movieTitle}`} state={dataTo} >
                <Card
                    id={card.movieId}
                    title={card.movieTitle}
                    description={card.movieDescription}
                    rate={card.movieRate}
                    image={card.movieImage}
                    trailer={card.movieTrailer}
                />
            </Link>
        )
    }
    )
    return (
        <>
            <div className='container' style={props.blurStyle}>
                {/* {finalList} */}
                {[...finalList,
                <div className='blankCard  card '>
                    <img src={require('./images/plus.png')} id='blankCard' onClick={props.handleBlankCard} alt='plus' />
                </div>]}

            </div >

        </>
    )
}
