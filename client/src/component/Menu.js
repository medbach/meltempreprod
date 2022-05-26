import React from 'react';
import { Navbar,NavDropdown,Nav,Form,FormControl,Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

import Search from './Search';
const Menu = () => {

    const {serachInput , valueSearch} = Search();
    console.log("valueSearchvalueSearchvalueSearch",valueSearch);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                    <NavLink to="/" className="logoSite">
                        <img src="./img/logoSite.png" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/listing" exact className="nav-link">Listing</NavLink>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/contact" exact className="nav-link">
                            Contacter-nous
                        </NavLink>
                        <NavLink to="/inscription" exact className="nav-link">
                            Inscription
                        </NavLink>
                    </Nav>

                    <Search />
                    
                    </Navbar.Collapse>

                </Navbar>
        </div>
    );
};

export default Menu;