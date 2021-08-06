import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./Home.css";
import axios from 'axios';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";


const Home = () => {



    return (
        <div className='serverPage'>
            <div>
                <Navbar className='navBar' expand="lg" >
                    <Navbar.Brand href="/"><h1>Communify</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >

                        </Nav>
                        <Link to={{
                            pathname: "/Login"
                        }}>
                            <Button className="LoginButton" variant="success" size="sm">
                                <h5>Login</h5>
                            </Button>
                        </Link>

                        <Link to={{
                            pathname: "/SignUp"
                        }}>
                            <Button className="SignUpButton" variant="success" size="sm">
                                <h5>SignUp</h5>
                            </Button>
                        </Link>

                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div className="maintextbody">
                <p>Unite People through<span style={{ color: "#5658dd" }}> Communify</span></p>
            </div>


            <hr
                style={{
                    color: "white",
                    width: "80%",
                    margin: "auto",
                }}
            />
            <br/>
            <Footer/>
        </div>

    );

};

export default Home;
