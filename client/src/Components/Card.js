import React from 'react';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Card.css';

//const Card = ({ title, imageUrl, cardBody}) => {
const Card = (props) => {

    let history = useHistory();

    const buttonPush = () => {
        history.push({
            pathname: "/EnterServer",
            state: { servername: props.title, username: props.username } 
        });
    }

    return (
        <div className='cardContainer'onClick={buttonPush}>
            <div className='imageContainer'>
                <img src={props.imageUrl} alt="cardImage" />
            </div>

            <div className='cardContents'>
                <div className='cardTitle'>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>

    );

}

export default Card;
