import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MD5 from "crypto-js/md5";
import Alert from 'react-bootstrap/Alert'
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {


    let history = useHistory();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        const data = {
            username: user,
            password: MD5(password).toString(),
        }
        console.log(data);

        axios.post('http://localhost:2999/React_Login', data)
            .then(response => {
                if (!(response.data.message === '')) {
                    setError(response.data.message)
                }
                else {
                    history.push({
                        pathname: "/ServerInfoPage",
                        state: response.data
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
<<<<<<< Updated upstream





=======
>>>>>>> Stashed changes

    }

    return (
        <div>
            <Header>

            </Header>
            <div className="Login">

                <Form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <Form.Group size="lg" controlId="email">
                        <Form.Label>USER NAME</Form.Label>
                        <Form.Control
                            className='inputForm'
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control
                            className='inputForm'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    {error !== '' ? <Alert className='alert' variant='danger'>
                        {error}
                    </Alert> : null}
                    <Button block size="lg" type="submit" variant='success'>
                        Login
                    </Button>
                    <Link to='/Signup'>
                        <Button block size="lg" type="submit" variant='success'>
                            Sign Up
                        </Button>
                    </Link>
                </Form>
            </div>
            <Footer>

            </Footer>
        </div>
    );
}

export default Login;