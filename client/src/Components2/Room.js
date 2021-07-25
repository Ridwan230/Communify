import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Room.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Channel from "./Channel";

const Room = (props) => {
    const { state } = props.location;

    return (
        <Channel
            username={state.username}
            servername={state.servername}
            servercode={state.servercode}
        />
    ); 
}

export default Room;