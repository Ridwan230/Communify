import React, { useState, useEffect } from "react";
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
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const Login = () => {

    let history = useHistory();
    let SqlInjectionCheck = /^[a-zA-Z0-9_ ]*$/;

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    axios.defaults.withCredentials = true;

    function handleSubmit(event) {

        event.preventDefault();

        const data = {
            username: user,
            password: MD5(password).toString(),
        }
        if(!SqlInjectionCheck.test(user) || !SqlInjectionCheck.test(password)){
            setError('Only letters, numbers and underscore allowed in input fields');
        }
        else{
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
        }
    }


    useEffect(() => {
        axios.get('http://localhost:2999/React_Login').then((response) => {
            if (response.data.loggedIn === true) {
                history.push({
                    pathname: "/ServerInfoPage",
                    state: response.data
                });
            }
        })
    }, [])

    // const handleClick = (event) =>{
    //     event.preventDefault();
    //     console.log("GOOGLE SIGNIN BUTTON PRESSED");
        
    //     axios.get('http://localhost:2999/google')
    //         .then(response => {
    //             history.push({
    //                 pathname: "/ServerInfoPage",
    //                 state: response.data
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    return (
        <Scrollbars autoHeight autoHeightMin={`100vh`}>
        <div>
        <Link to ="/">
            <Button variant="outline-success"  className='backButtonLogIn'>
                <FontAwesomeIcon icon={faArrowLeft} className='backButtonIconLogIn'/>
            </Button>
            </Link>
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
                    <Button className="loginbutton1" block size="lg" type="submit" variant='success'>
                        Login
                    </Button>
                    {/* <Button block size="lg" type="submit" variant='danger' onClick={handleClick}>
                        Login with Google
                    </Button>
                    <a href="/google" className="btn btn-danger"> Google</a> */}
                    <p className='para'>Don't have an account? <Link to='/Signup' className='link'>Sign up</Link></p>
                </Form>
                
            </div>

            <Footer/>
        </div>
        </Scrollbars>
    );
}

export default Login;