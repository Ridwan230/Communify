import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form, FormControl,Button,Container} from 'react-bootstrap';
import './NavbarComp.css';

const NavbarComp = () =>  {
        return (
            <div>
                <Navbar className='navBar' bg="light" expand="lg" >
                    <Navbar.Brand href="#">Communify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">All Server</Nav.Link>
                            <Nav.Link href="#action2">My Server</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default NavbarComp;