import React, { useState, Component, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Room.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Channel from "./Channel";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Chatbox from './Chatbox'


const Room = (props) => {

    const { state } = props.location;

    console.log("ROOM");

    return (
        <div className="room">
            <Channel
                username={state.username}
                servername={state.servername}
                servercode={state.servercode}
            />
        </div>
    );
}

export default Room;