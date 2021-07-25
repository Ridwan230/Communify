import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup,FormControl} from "react-bootstrap";
import "./AddServer.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddServer = (props) => {
    const {state}=props.location;
    let history = useHistory();
    const [serverName, setServerName] = useState("");
    const [serverPassword, setServerPassword] = useState("");
    const [description, setDescription] = useState("");

    function validateForm() {
        return serverName.length > 0 && description.length > 0;
    }

    function handleSubmit(event) {
        const data = {
            username: state.username,
            servername: serverName,
            description: description,
            serverpassword: serverPassword,
            imageURL: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        };
        console.log(data);
        axios
            .post("http://localhost:2999/React_AddServer", data)
            .then((response) => {
                console.log(response.data);
                history.push({
                    pathname: "/ServerInfoPage",
                    state: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });

        event.preventDefault();
    }

    return (
        <div className="addServer">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="servername">
                    <Form.Label>Server Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="serverpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        value={serverPassword}
                        onChange={(e) => setServerPassword(e.target.value)}
                    />
                </Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </InputGroup>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Create Server
                </Button>
            </Form>
        </div>
    );
};

export default AddServer;
