import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
import MD5 from "crypto-js/md5";
import './EnterServer.css'

const EnterServer = (props) => {
    let history = useHistory();
    const [serverCode, setServerCode] = useState("");
    const { state } = props.location;

    function validateForm() {
        return serverCode.length > 0;
    }

    function handleSubmit(event) {
        const data = {
            username: state.username,
            servername: state.servername,
            code: MD5(serverCode).toString(),
        };

        axios.post("http://localhost:2999/React_EnterServer", data)
            .then((response) => {
                history.push({                                                                         
                    pathname: "/Room", 
                    state: response.data,
                    //I guess here I have to receive all the informations like admin, username, members etc.
                });
            })
            .catch((error) => {
                console.log(error);
            });

        event.preventDefault();
    }

    const [show, setShow] = useState(true);

    function handleClose(event) {
        setShow(false);
        history.push({
            pathname: "/ServerInfoPage",
            state: { username: state.username }         //bug fixed
        });
    }

   // const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered className='popup'>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="servername">
                            <Form.Label>Code</Form.Label>
                            <Form.Control
                                autoFocus
                                type="password"
                                value={serverCode}
                                onChange={(e) => setServerCode(e.target.value)}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit" disabled={!validateForm()}>
                                Enter
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EnterServer;
