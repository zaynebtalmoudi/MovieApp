import './card.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import CardsList from './CardsList';
import AddCard from './AddCard';
import Trailer from './Trailer';
import NavBar from './NavBar';

import { Navbar, Container, Nav, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import FilteredList from './FiltredList';


export default function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>


        <Route path='movies/' element={<FilteredList />}></Route>
        <Route path='movies/trailer/:id/' element={<Trailer />} />
      </Routes>
    </div>
  )
}
