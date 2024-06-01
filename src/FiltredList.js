
import './card.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import CardsList from './CardsList';
import AddCard from './AddCard';
import 'bootstrap/dist/css/bootstrap.min.css'


function FilteredList() {

    const [cards, setCards] = React.useState([
        {
            movieId: nanoid(),
            movieTitle: 'Interstellar',
            movieDescription: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
            movieRate: '9',
            movieImage: 'interstellar.jpeg',
            movieTrailer: 'https://www.youtube.com/embed/zSWdZVtXT7E?si=vdgMS9nCKFXwJRf9',
        },
        {
            movieId: nanoid(),
            movieTitle: 'Inception',
            movieDescription: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
            movieRate: '7',
            movieImage: 'inception.jpeg',
            movieTrailer: 'https://www.youtube.com/embed/YoHD9XEInc0?si=_ghGoag78QQer-9H',
        },
        {
            movieId: nanoid(),
            movieTitle: 'Pride & prejudice',
            movieDescription: 'Elizabeth Bennett is a strong-willed yet sensible young woman. At a local ball, she encounters a wealthy young man, Mr Fitzwilliam Darcy, who is arrogant, and they develop an unusual relationship.',
            movieRate: '8',
            movieImage: 'pride&prejudice.jpeg',
            movieTrailer: 'https://www.youtube.com/embed/Ur_DIHs92NM?si=JeiHYDpv6smZV9oK" title="YouTube video player',
        },


    ])

    // ---------------------  Plus Card  ------------------------- //
    const [show, setShow] = useState(false)

    function BlankCard(e) {
        if (e.target.id === 'blankCard') {
            setShow(true)
        }
        if (e.target.id === 'close') {
            setShow(false)
        }
    }
    //  ---------------------------------------------------  //

    // ---------------------  Filter ------------------------- //
    const [filtered, setFiltered] = React.useState(cards)

    const Filter = (event) => {
        if (event.target.name === 'Title') {
            setFiltered(cards.filter(f => f.movieTitle.toLowerCase().includes(event.target.value)))
        } else if (event.target.name === 'Rate') {
            setFiltered(cards.filter(f => f.movieRate.includes(event.target.value)))
        }
        if (event.target.value === 'all') {
            setFiltered(cards)
        }
    }//  ---------------------------------------------------  //


    //  ------------------ add new Movie ------------------  //
    const newCard = {
        movieId: nanoid(),
        movieTitle: '',
        movieDescription: '',
        movieRate: '',
        movieImage: '',
        movieTrailer: ' ',
    }

    const add = function (titleAdded, descriptionAdded, rateAdded, imageAdded, trailerAdded) {
        setFiltered([...filtered, { ...newCard, movieTitle: titleAdded, movieDescription: descriptionAdded, movieRate: rateAdded, movieImage: imageAdded = imageAdded ? imageAdded : 'no-image.png', movieTrailer: trailerAdded }])
        setShow(false)
    }
    //  --------------------------------------------------- //

    console.log(cards)
    console.log(filtered)




    return (
        <div>
            <header>

                <div className="filter-inputs">
                    <input type='text' onChange={Filter} placeholder='Search by title' name='Title' className='title-filter' />

                    {/* Rate */}
                    <select
                        value={newCard.newRate}
                        name='Rate'
                        className='rate-filter'
                        onChange={Filter}
                    >
                        <option value={'all'}> Search by Rate</option>
                        <option value={'all'}> All </option>
                        <option value={1}> 1 </option>
                        <option value={2}> 2 </option>
                        <option value={3}> 3 </option>
                        <option value={4}> 4 </option>
                        <option value={5}> 5 </option>
                        <option value={6}> 6 </option>
                        <option value={7}> 7 </option>
                        <option value={8}> 8 </option>
                        <option value={9}> 9 </option>
                        <option value={10}> 10 </option>
                    </select>
                </div>

            </header>

            {/* <CardsList mesCards={filtered} handleblankCard={BlankCard} /> */}

            {show ?
                <>
                    <AddCard handleSaveNewCard={add} handleBlankCard={BlankCard} />
                    <CardsList mesCards={filtered} handleBlankCard={BlankCard} blurStyle={{ filter: 'blur(3px)' }} />
                </>
                : <CardsList mesCards={filtered} handleBlankCard={BlankCard} />
            }
        </div >
    );
}

export default FilteredList;


