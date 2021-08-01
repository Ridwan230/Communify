import React from "react";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./ServerInfoPage.css";
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";


const ServerInfoPage = (props) => {

    const allServer = () => {
<<<<<<< Updated upstream
        setUser('all');
=======
        setDisplayServer('all');
>>>>>>> Stashed changes
        setLinkColorMyServer('serverLink');
        setLinkColorAllServer('selectedLink');
    }
    const myServer = () => {
<<<<<<< Updated upstream
        setUser(state.username);
=======
        setDisplayServer('my');
>>>>>>> Stashed changes
        setLinkColorAllServer('serverLink');
        setLinkColorMyServer('selectedLink');
    }
    const [linkColorMyServer, setLinkColorMyServer] = useState('selectedLink');
    const [linkColorAllServer, setLinkColorAllServer] = useState('serverLink');

    const [data, setData] = useState([]);
    const { state } = props.location;        //location = fething data from the initial page
<<<<<<< Updated upstream
    const [user, setUser] = useState([state.username]);
    useEffect(() => {
        axios.get('http://localhost:2999/ownedServers/' + user)  //useState use koray state change holei backend e req giye server gula change kore dicche
=======
    const [displayServer, setDisplayServer] = useState("");

    const data1={
        username: state.username,
        displayserver: displayServer,
    }

    useEffect(() => {
        axios.post('http://localhost:2999/ownedServers' , data1)  //useState use koray state change holei backend e req giye server gula change kore dicche
>>>>>>> Stashed changes
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })

<<<<<<< Updated upstream
    }, [user]);
=======
    }, [displayServer]);
>>>>>>> Stashed changes

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
                            <Nav.Link className={linkColorAllServer} onClick={allServer}>All Server</Nav.Link>
                            <Nav.Link className={linkColorMyServer} onClick={myServer}>My Server</Nav.Link>
                        </Nav>
                        <Link to={{
                            pathname: "/AddServer",
                            state: { username: state.username } // your data array of objects
                        }}>
                            <Button className="addServerButton" variant="success" size="sm">
                            <h5>Add Server</h5>
                            </Button>
                        </Link>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="addServer">
                <h2 className='greeting'>Hello, {state.username}. </h2>

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
            <Footer>

            </Footer>
        </div>
    );

};
export default ServerInfoPage;
