import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Signup = () => {
    
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState("");

    
    function validateForm() {
        return email.length > 0 && password.length > 0 && user.length > 0 && confirmPassword.length > 0 && confirmPassword===password;
    }

    function handleSubmit(event) {

        const data={
            username: user,
            password: password,
            email: email,
            confirmPassword: confirmPassword,
        }

        axios.post('http://localhost:2999/React_SignUp', data)
            .then(response => {
                console.log(response.data);
                history.push({
                    pathname: "/ServerInfoPage",
                    state: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })


        event.preventDefault();
    }

    return (
            <div className="Signup">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
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
                    <Form.Group size="lg" controlId="confirmpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Sign Up
                    </Button>
                </Form>
            </div>
    );
}

export default Signup;