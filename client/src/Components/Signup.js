import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MD5 from "crypto-js/md5";
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Alert from 'react-bootstrap/Alert';
import validator from 'email-validator';
import { Scrollbars } from 'react-custom-scrollbars-2';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {


    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let SqlInjectionCheck = /^[a-zA-Z0-9_ ]*$/;
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("");


    function handleSubmit(event) {

        let alertError = '';

        if (email.length === 0 || password.length === 0 || confirmPassword.length === 0 || user.length === 0) {
            alertError = 'Necessary fields empty!';
        }
        else {
            if (!(validator.validate(email))) {
                alertError = 'Invalid Email!';
            }
            else {
                if (!SqlInjectionCheck.test(user) || !SqlInjectionCheck.test(password) || !SqlInjectionCheck.test(confirmPassword)) {
                    alertError = 'Only letters, numbers and underscore allowed in input fields';
                }
                else {
                    if (password.length < 8) {
                        alertError = 'Minimum 8 characters password needed!';
                    }
                    else {
                        if (!re.test(password)) {
                            alertError = 'Password must contain atleast 1 letter and 1 number!'
                        } else {
                            if (password !== confirmPassword) {
                                alertError = 'Passwords do not match!';
                            }
                        }
                    }
                }
            }
        }


        event.preventDefault();
        if (!(alertError === '')) {
            setError(alertError);
        }
        else {
            const data = {
                username: user,
                password: MD5(password).toString(),
                email: email,
                confirmPassword: MD5(confirmPassword).toString(),
            }

            axios.post('http://localhost:2999/React_SignUp', data)
                .then(response => {
                    if (response.data.message === '') {
                        console.log(response.data);
                        history.push({
                            pathname: "/ServerInfoPage",
                            state: response.data
                        });
                    }
                    else {
                        setError(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <Scrollbars autoHeight autoHeightMin={`100vh`}>
            <div>
            <Link to ="/">
            <Button variant="outline-success"  className='backButtonSignIn'>
                <FontAwesomeIcon icon={faArrowLeft} className='backButtonIconSignIn'/>
            </Button>
            </Link>
                <Header />
                <div className="Signup">
                    <Form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>USER NAME</Form.Label>
                            <OverlayTrigger
                                delay='500'
                                key='right'
                                placement='right'
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Only letters, numbers and underscore allowed.
                                    </Tooltip>
                                }
                            >
                            <Form.Control
                                type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </OverlayTrigger>
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>PASSWORD</Form.Label>
                            <OverlayTrigger
                                delay='500'
                                key='right'
                                placement='right'
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Only letters, numbers and underscore allowed.<br/>
                                    </Tooltip>
                                }
                            >
                            <Form.Control
                                type="password"
                                value={password}
                                placeholder='Minimum 8 characters'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </OverlayTrigger>
                        </Form.Group>
                        <Form.Group size="lg" controlId="confirmpassword">
                            <Form.Label>CONFIRM PASSWORD</Form.Label>
                           
                                <Form.Control
                                    type="password"
                                    value={confirmPassword}
                                    placeholder='Minimum 8 characters'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                 
                        </Form.Group>
                        {error !== '' ? <Alert className='alert' variant='danger'>
                            {error}
                        </Alert> : null}
                        <Button className="signupbutton1" block size="lg" type="submit" variant='success'>
                            Sign Up
                        </Button>
                        <p className='para'>Already have an account? <Link to='/Login' className='link'>Log in</Link></p>
                    </Form>
                </div>
                <div className="signupFooter">
                    <Footer />
                </div>
            </div>
        </Scrollbars>
    );
}

export default Signup;


/*
    <OverlayTrigger
      key='right'
      placement='right'
      overlay={
        <Tooltip id={`tooltip-right`}>
          Tooltip on <strong>password</strong>.
        </Tooltip>
      }
    >
    </OverlayTrigger>
*/