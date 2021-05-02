import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './HeaderNavbar.css'
import myLogo from '../../Assest/imges/Una_K.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" >
                <div className="container">
                    <Navbar.Brand href="#home" className="navbarColors">
                        <img src={myLogo} className="myLogo" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'white'}}>
                        <FontAwesomeIcon icon={faBars}/>
                    </Navbar.Toggle>
                    

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navbarFonts">
                            <Nav.Link href="#home" className="navbarColors ml-3 link">Home</Nav.Link>
                            <Nav.Link href="#link" className="navbarColors ml-3 link" >Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;