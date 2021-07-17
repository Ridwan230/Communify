import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {


    let history = useHistory();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {

        event.preventDefault();

        const data={
            username: user,
            password: password,
        }
        console.log(data);

        axios.post('http://localhost:2999/React_Login', data)
        .then(response => {
            history.push({ 
                pathname: "/ServerInfoPage",    
                state: response.data});
        })
        .catch(error => {
            console.log(error);
        })



        
    }

    return (
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                    <Link to='/Signup'>
                        <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Sign Up
                        </Button>
                    </Link>
                </Form>
            </div>
    );
}

export default Login;