import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'


export default function NavBar() {
    return (

        <>

            <Navbar bg="dark" data-bs-theme="dark" style={{ backgroundColor: 'red  !important' }}>
                <Container >
                    <Navbar.Brand href="#home" >Films</Navbar.Brand>
                    <Nav className="me-auto " >
                        <Nav.Link> <NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink> </Nav.Link>
                        <Nav.Link > <NavLink style={{ textDecoration: 'none' }} to="/movies">Movies</NavLink> </Nav.Link>
                        <Nav.Link > <NavLink style={{ textDecoration: 'none' }} to="/"> MyList </NavLink> </Nav.Link>
                    </Nav>
                </Container >
            </Navbar >

        </>
    )
}
