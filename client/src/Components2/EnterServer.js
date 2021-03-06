import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import MD5 from "crypto-js/md5";
import './EnterServer.css'
import Alert from 'react-bootstrap/Alert';

const EnterServer = (props) => {
    let history = useHistory();
    const [serverCode, setServerCode] = useState("");
    const [error, setError] = useState("");
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
                if(response.data.message===""){
                    history.push({
                        pathname: "/Room/" + state.servername,
                        state: response.data,
                    });
                }
                else{
                    setError(response.data.message);
                }
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
            state: { username: state.username }        
        });
    }

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
                        {error !== '' ? <Alert className='alert' variant='danger'>
                        {error}
                    </Alert> : null}
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
