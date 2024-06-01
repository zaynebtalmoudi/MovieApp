import React, { useEffect } from 'react'
import './card.css'

export default function AddCard(props) {

    // ---------------------- Movie state ---------------------- //
    const [newCard, setnewCard] = React.useState({

        newTitle: '',
        newDescription: '',
        newRate: '',
        newImage: '',
        newTrailer: '',
    })
    // -------------------------------------------------- //


    // ---------------------- Image Form ------------------- //
    const inputRef = React.useRef(null)
    const handleImageClick = () => {
        inputRef.current.click()
    }
    const handleImageChange = (event) => {
        // const file = event.target.files[0].name;
        // console.log(file);
        setnewCard(prevCardData => {
            return {
                ...prevCardData,
                [event.target.name]: event.target.files[0].name
            }

        })
    }
    // -------------------------------------------------- //


    // ----------------------- Form  ------------------------ // 
    const handleChange = (event) => {
        setnewCard(prevCard => {
            return {
                ...prevCard,
                [event.target.name]: event.target.value
            }
        })
    }
    // -------------------------------------------------- //


    // ------------------- Save Button -------------------//
    const handleSave = () => {

        props.handleSaveNewCard(newCard.newTitle, newCard.newDescription, newCard.newRate, newCard.newImage, newCard.newTrailer);
        console.log(newCard);
        setnewCard({
            newTitle: '',
            newDescription: '',
            newRate: '',
            newImage: '',
            newTrailer: '',
        });
    }
    //  -------------------------------------------- //

    // ------------------- Cancel Button -------------------//
    // const handleCancel = () => {
    //     setnewCard({
    //         newTitle: '',
    //         newDescription: '',
    //         newRate: '',
    //         newImage: '',
    //     });
    //     props.handleBlankCard()

    // }
    //  -------------------------------------------- //

    return (
        <div className='add-form-container' style={props.style}>

            <div className='add-form'>

                <div className="col1">
                    {/* ------------Title ------------*/}
                    <input required
                        type='text'
                        placeholder='Title...'
                        onChange={handleChange}
                        value={newCard.newTitle}
                        name='newTitle'
                        className='movie-title'
                        id='title'
                    />
                    {/* ------------Trailer ------------*/}
                    <input required
                        type='text'
                        placeholder='trailer...'
                        onChange={handleChange}
                        value={newCard.newTrailer}
                        name='newTrailer'
                        className='movie-trailer'
                        id='trailer'
                    />

                    {/* ------------ Rate  ------------*/}
                    <select
                        id='rate'
                        value={newCard.newRate}
                        name='newRate'
                        onChange={handleChange}
                        className='rate-selector'
                    >
                        <option > Rate</option>
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

                    {/* Description */}
                    {/* <lable htmlFor='description'>Description: </lable> */}
                    <textarea
                        rows='10'
                        cols='40'
                        placeholder='Description...'
                        onChange={handleChange}
                        value={newCard.newDescription}
                        name='newDescription'
                        className='movie-description'
                    >
                    </textarea>

                </div>


                <div className=' col2  ' onClick={handleImageClick}>

                    {
                        newCard.newImage ?
                            <img
                                src={require(`./images/${newCard.newImage}`)}
                                name='newImage'
                                value={newCard.newImage}
                                alt='' />
                            : <img src={require('./images/upload.png')} id='blankCard' alt='plus' />
                    }

                    <input type='file'
                        ref={inputRef}
                        name='newImage'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>
                <div className='col3'>
                    <button className='save' onClick={handleSave} > Save</button>
                    <button className='cancel' onClick={props.handleBlankCard} id='close' > Cancel</button>
                </div>

            </div>




        </div >

    )
}
// : <img className='upload-image' src={require(`./images/upload.jpeg`)} alt='' />
// src={URL.createObjectURL(newCard.newImage)}
// src={require(`./images/${newCard.newImage}`)}