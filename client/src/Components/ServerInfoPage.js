import React from "react";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./ServerInfoPage.css";
import axios from 'axios';
import { Navbar, Nav, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars-2';


const ServerInfoPage = (props) => {

    const allServer = () => {
        setDisplayServer('all');
        setLinkColorMyServer('serverLink');
        setLinkColorAllServer('selectedLink');
    }
    const myServer = () => {
        setDisplayServer('my');
        setLinkColorAllServer('serverLink');
        setLinkColorMyServer('selectedLink');
    }
    const [linkColorMyServer, setLinkColorMyServer] = useState('selectedLink');
    const [linkColorAllServer, setLinkColorAllServer] = useState('serverLink');

    const [data, setData] = useState([]);
    const { state } = props.location;        //location = fething data from the initial page
    const [displayServer, setDisplayServer] = useState("my");
    const [search, setSearch] = useState("");       //My server e differentiate korar jonno

    const data1 = {
        username: state.username,
        displayserver: displayServer,
    }

    useEffect(() => {
        axios.post('http://localhost:2999/ownedServers', data1)  //useState use koray state change holei backend e req giye server gula change kore dicche
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayServer]);

    return (
        <Scrollbars autoHeight autoHeightMin={`100vh`}>
        <div className='serverPage'>
            <div>
                <Navbar className='navBar' expand="lg" >
                    <Navbar.Brand href="/"><h1 className='whiteFont'>Communify</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link className={linkColorAllServer} onClick={allServer}>ALL SERVER</Nav.Link>
                            <Nav.Link className={linkColorMyServer} onClick={myServer}>MY SERVER</Nav.Link>
                        </Nav>

                        <Link to={{
                            pathname: "/AddServer",
                            state: { username: state.username } // your data array of objects
                        }}>
                            <Button className="addServerButton" variant="success" size="sm">
                                <h5 className='whiteFont marginTop5px'>Create Server</h5>
                            </Button>
                        </Link>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="serverGreeting">
                <h2 className='greeting'>Hello, {state.username}. </h2>
                <InputGroup className='searchInputGroup'>
                <InputGroup.Prepend >
                                <InputGroup.Text className='searchIcon'>
                                <FontAwesomeIcon icon={faSearch}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                <Form className="d-flex align-items-end searchBar">
                    
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2 searchInput"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => {setSearch(e.target.value);}}
                    />
                    
                </Form>
                </InputGroup>        
               

            </div>


            <div className="cardGrid">
                {
                    data
                    .filter((Item) => {
                        if(search==='')
                            return Item;
                        else
                            return Item.title.toUpperCase().startsWith(search.toUpperCase());
                    })                  
                    .map((classItem) => {
                            return (
                                <Card
                                    key={classItem.id}
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
        </Scrollbars>
    );

};
export default ServerInfoPage;
