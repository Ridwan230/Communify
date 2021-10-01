import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./Home.css";
import axios from 'axios';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import FeaturePreview from "./FeaturePreview";
import frontpageimage from '../icons/frontpageimage1.jpg';
import { Scrollbars } from 'react-custom-scrollbars-2';


const Home = () => {

    var event_management="Dates can be marked in Calendar and you will get reminded timely once reminder is set";
    var groups_creation="Public and Private groups can be created and users can join in!";
    var message_encryption="User messages will be encrypted and privacy will be ensured for the users";

    return (
        <Scrollbars autoHeight autoHeightMin={`100vh`}>
        <div className='homePage'>
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
                        <Link className='linkbutton' to={{
                            pathname: "/Login"
                        }}>
                            <Button className="LoginButton" variant="success" size="sm">
                                <h5>Log In</h5>
                            </Button>
                        </Link>

                        <Link className='linkbutton' to={{
                            pathname: "/SignUp"
                        }}>
                            <Button className="SignUpButton" variant="success" size="sm">
                                <h5>Sign Up</h5>
                            </Button>
                        </Link>

                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div className="maintextbody">
                <p>Unite People through<span style={{ color: "#5658dd" }}> Communify</span></p>
            </div>

            <div className="maintextbody2">
                <p>Join communify, manage </p>
                <p> and organize different events with ease</p>
            </div>


            <img className="frontpageimage" src={frontpageimage} alt="frontpage image" />

            <Container className="gridcontainer">
                <div className="grid1">
                    <Row className="grid">
                        <Col className="col" sm={12} md={6} lg={4}><FeaturePreview text1={"Event Management"} text2={event_management}/></Col>
                        <Col className="col" sm={12} md={6} lg={4}><FeaturePreview text1={"Groups Creation"} text2={groups_creation}/></Col>
                        <Col className="col" sm={12} md={6} lg={4}><FeaturePreview text1={"Message Encryption"} text2={message_encryption}/></Col>
                    </Row>
                </div>
            </Container>


            <Footer />
        </div>
        </Scrollbars>

    );

};

export default Home;
