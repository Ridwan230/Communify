import React from "react";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./ServerInfoPage.css";
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ServerInfoPage = (props) => {

    const allServer = () => {
        setUser('all');
    }
    const myServer = () => {
        setUser(state.username);
    }

    const [data, setData] = useState([]);
    const { state } = props.location;        //location = fething data from the initial page
    const [user, setUser] = useState([state.username]);
    useEffect(() => {
        axios.get('http://localhost:2999/ownedServers/' + user)  //useState use koray state change holei backend e req giye server gula change kore dicche
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })

    }, [user]);

    return (
        <div>
            <div>
                <Navbar className='navBar' bg="light" expand="lg" >
                    <Navbar.Brand href="/">Communify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link onClick={allServer}>All Server</Nav.Link>
                            <Nav.Link onClick={myServer}>My Server</Nav.Link>
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
            <div className="addServer">
                <h2>Hello {state.username} </h2>
                <Link to={{
                    pathname: "/AddServer",
                    state: { username: state.username } // your data array of objects
                }}>
                    <Button className="addServerButton" variant="primary" size="lg">
                        Add Server
                    </Button>
                </Link>

            </div>

            <div className="cardGrid">
                {
                    data.map((classItem) => {
                        return (

                            <Card
                                key={classItem.serverID}
                                title={classItem.title}
                                imageUrl={classItem.imageUrl}
                                cardBody={classItem.cardBody}
                                username={classItem.username}
                            />
                        );
                    })}
            </div>
        </div>
    );

};
export default ServerInfoPage;
