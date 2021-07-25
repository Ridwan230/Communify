import React from 'react';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Card.css';

//const Card = ({ title, imageUrl, cardBody}) => {
const Card = (props) => {
    return (
        <div className='cardContainer'>
            <div className='imageContainer'>
                <img src={props.imageUrl} alt="cardImage" />
            </div>

            <div className='cardContents'>
                <div className='cardTitle'>
                    <h3>{props.title}</h3>
                </div>

                <div className='cardBody'>
                    <p>{props.cardBody}</p>
                </div>

                <Link to={{
                    pathname: "/EnterServer",
                    state: { servername: props.title, username: props.username } 
                }}>
                    <div >
                        <Button variant="outline-primary" type="submit">
                            Enter
                        </Button>
                    </div>
                </Link>

            </div>
        </div>

    );

}

export default Card;
