import React, {useState} from 'react';
import { Navbar,NavDropdown,Nav,Form,FormControl,Button,Container,Offcanvas } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import 'animate.css';
import Search from './Search';
import Searchtop from './Searchtop';
const Menu = () => {

    const [toggleSearch, settoggleSearch] = useState(false);


    const {serachInput , valueSearch} = Search();
    console.log("valueSearchvalueSearchvalueSearch",valueSearch);




    return (
        <div>
            
            <div className='wrap-header'>
                <div className='search'>
                    <button className='search-toggle'  onClick={() => settoggleSearch(!toggleSearch)}>
                        <svg class="search-toggle__icon search-toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="M141.33 133.34l-32.69-32.69a57.26 57.26 0 10-8 8l32.69 32.66a5.66 5.66 0 008-8zm-77-23.12a45.92 45.92 0 1145.94-45.91 46 46 0 01-45.96 45.91z"></path></svg>
                    </button>
                </div>

                <div className='logoSite'>
                    <NavLink to="/" className="logoSite">
                        <img src="../img/logoSite.png" />
                    </NavLink>
                </div>

                <div className='menu'>
                    <>
                        {[false].map((expand) => (
                            <Navbar key={expand} bg="light" expand={expand} className="mb-1">
                            <Container fluid>
                                {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                   
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                   



                                    <NavLink to="/" exact className="nav-link menu__link">Home</NavLink>
                                    <NavLink to="/listing" exact className="nav-link menu__link">Listing</NavLink>
                                    <NavLink to="/contact" exact className="nav-link menu__link">
                                        Contacter-nous
                                    </NavLink>
                                    <NavLink to="/inscription" exact className="nav-link menu__link">
                                        Inscription
                                    </NavLink>


                                    {/* <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                        Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                        Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                    </Nav>
                                    <Search />
                                </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                            </Navbar>
                        ))}
                    </>
                    
                </div>
                
            </div>
        
            {toggleSearch ? 
                    ( 
                        < div className='animate__animated animate__fadeInDown'>
                            <Searchtop />
                        </div>
                    ) 
                    
                    : 

                    (
                        <>
                        </>
                    )
            }

        </div>
    );
};

export default Menu;