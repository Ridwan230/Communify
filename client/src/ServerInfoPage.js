import React from "react";
import Card from "./Components/Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./ServerInfoPage.css";
import NavbarComp from './Components/NavbarComp';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ServerInfoPage = (props) => {
    const [data, setData] = useState([]);
    const {state} = props.location;
    useEffect(() => {
        axios.get('http://localhost:2999/ownedServers/'+state.username)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, []);

    return (
        <div>
        <NavbarComp/>
        <div className="addServer">
            <h2>Hello {state.username} </h2>
                <Link to={{
                    pathname: "/AddServer",
                    state: {username: state.username} // your data array of objects
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
                            key={classItem.title}
                            title={classItem.title}
                            imageUrl={classItem.imageUrl}
                            cardBody={classItem.cardBody}
                        />
                    );
                })}
        </div>
        </div>
    );

};  
export default ServerInfoPage;
