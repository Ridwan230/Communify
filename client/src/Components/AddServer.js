import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import "./AddServer.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import MD5 from "crypto-js/md5";
import Header from "./Header";
import Footer from "./Footer";
import Alert from 'react-bootstrap/Alert'
import { Scrollbars } from 'react-custom-scrollbars-2';

const AddServer = (props) => {
    const { state } = props.location;
    let history = useHistory();
    const [serverName, setServerName] = useState("");
    const [serverPassword, setServerPassword] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [error, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let SqlInjectionCheck = /^[a-zA-Z0-9_ ]*$/;
        const data = {
            username: state.username,
            servername: serverName,
            description: description,
            serverpassword: MD5(serverPassword).toString(),
            imageURL: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        };
        
        if(serverName.length===0 || serverPassword.length===0 || confirmPassword.length===0 || imageFile===""){
            setError("Necessary fields empty!")

        }
        else{
            if(serverName.length>10){
                setError("Server name can be 10 characters only!")
            }
            else{
                
            if (serverPassword.length < 8) {
                setError("Password length must be atleast 8 characters")
            }
            else {
                if (serverPassword !== confirmPassword) {
                    setError("Passwords don't match")
                }
                else {
                    if(!SqlInjectionCheck.test(serverName) || !SqlInjectionCheck.test(confirmPassword) || !SqlInjectionCheck.test(serverPassword) || !SqlInjectionCheck.test(description)){
                        setError('Only letters, numbers and underscore allowed in input fields')
                    }
                    else{
                        
                    if(!re.test(serverPassword)){
                        setError('Password must contain atleast 1 letter and 1 number!')
                    }
                    else{
                        console.log(imageFile[0]); //Image ta nilam ekhon cloudinary te pathabo
                    const formData = new FormData();
                    formData.append("file", imageFile[0]);
                    formData.append("upload_preset", "mfqta5a8");
    
                    axios
                        .post("https://api.cloudinary.com/v1_1/ddtyd3iwa/image/upload", formData) //cloudinary te upload hoyar por response pailam
                        .then((response) => {
                            console.log(response.data.secure_url);
                            data.imageURL = response.data.secure_url;
                            axios
                                .post("http://localhost:2999/React_AddServer", data)
                                .then((response) => {
                                    console.log(response.data);
                                    if (!(response.data.message === '')) {
                                        setError(response.data.message);
                                    }
                                    else {
                                        history.push({
                                            pathname: "/ServerInfoPage",
                                            state: response.data,
                                        });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                    }
                    
                    }
                }
            }
            }
        }


    }

    return (
        <Scrollbars autoHeight autoHeightMin={`100vh`}>
        <div>
            <Header>

            </Header>
            <div className="addServer">
                <Form onSubmit={handleSubmit}>
                    <h1>Add Server</h1>
                    <Form.Group size="lg" controlId="servername">
                        <Form.Label>SERVER NAME</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={serverName}
                            onChange={(e) => setServerName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="serverpassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control
                            placeholder='Minimum 8 characters'
                            type="password"
                            value={serverPassword}
                            onChange={(e) => setServerPassword(e.target.value)}
                        />
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
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>CHOOSE IMAGE</Form.Label>
                        <Form.Control
                            type="file"
                            files={imageFile}
                            onChange={(e) => setImageFile(e.target.files)}
                        />
                    </Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>DESCRIPTION</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            as="textarea"
                            aria-label="With textarea"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </InputGroup>
                    {error !== '' ? <Alert className='alert' variant='danger'>
                        {error}
                    </Alert> : null}
                    <Button className="createServer_btn" block size="lg" type="submit" variant='success'>
                        Create Server
                    </Button>
                </Form>
            </div>

        </div>
        </Scrollbars>
    );
};

export default AddServer;
