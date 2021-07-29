import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavbarComp.css';
import { Link } from 'react-router-dom';

const NavbarComp = (props) => {
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
                        <Link to={{
                            pathname: "/ServerInfoPage",
                            state: { username: 'abrar' }
                        }}>
                            <Nav.Link href="#action1">All Server</Nav.Link>
                        </Link>
                        <Link to={{
                            pathname: "/ServerInfoPage",
                            state: { username: props.userName }
                        }}>
                            <Nav.Link href="#action2">My Server</Nav.Link>
                        </Link>
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