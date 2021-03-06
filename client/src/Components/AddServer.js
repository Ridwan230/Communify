import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import "./AddServer.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import MD5 from "crypto-js/md5";
import Header from "./Header";
import Footer from "./Footer";
import Alert from 'react-bootstrap/Alert'
import { Scrollbars } from 'react-custom-scrollbars-2';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FileBase64 from 'react-file-base64';

const AddServer = (props) => {
    const { state } = props.location;
    let history = useHistory();
    const [serverName, setServerName] = useState("");
    const [serverPassword, setServerPassword] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [error, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    function handleSubmit(event) {
        event.preventDefault();

        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let SqlInjectionCheck = /^[a-zA-Z0-9_]*$/;
        let SqlInjectionCheck2 = /^[a-zA-Z0-9_\s]*$/;
        const data = {
            username: state.username,
            servername: serverName,
            description: description,
            serverpassword: MD5(serverPassword).toString(),
            imageURL: imageFile,
        };

        if (serverName.length === 0 || serverPassword.length === 0 || confirmPassword.length === 0 || imageFile === "") {
            setError("Necessary fields empty!")

        }
        else {
            if (serverName.length > 10) {
                setError("Server name can be 10 characters only!")
            }
            else {

                if (serverPassword.length < 8) {
                    setError("Password length must be atleast 8 characters")
                }
                else {
                    if (serverPassword !== confirmPassword) {
                        setError("Passwords don't match")
                    }
                    else {
                        if (!SqlInjectionCheck.test(serverName) || !SqlInjectionCheck.test(confirmPassword) || !SqlInjectionCheck.test(serverPassword) || !SqlInjectionCheck2.test(description)) {
                            setError('Only letters, numbers and underscore allowed in input fields')
                        }
                        else {

                            if (!re.test(serverPassword)) {
                                setError('Password must contain atleast 1 letter and 1 number!')
                            }
                            else {
                                if(parseInt(fileSize.substr(0,fileSize.indexOf(' ')))<=550){
                                    console.log(parseInt(fileSize.substr(0,fileSize.indexOf(' '))))
                                axios.post("http://localhost:2999/React_AddServer", data)
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
                                }
                                else{
                                    setError("Image size must be less than 550 kB")
                                }

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
                <Link to={{ pathname: "/ServerInfoPage", state: { username: state.username } }}>
                    <Button variant="outline-success" className='backButtonAddServer'>
                        <FontAwesomeIcon icon={faArrowLeft} className='backButtonIconAddServer' />
                    </Button>
                </Link>
                <Header>

                </Header>
                <div className="addServer">
                    <Form onSubmit={handleSubmit}>
                        <h1>Add Server</h1>
                        <Form.Group size="lg" controlId="servername">
                            <Form.Label>SERVER NAME</Form.Label>
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
                                    placeholder='Maximum 10 characters'
                                    type="text"
                                    value={serverName}
                                    onChange={(e) => setServerName(e.target.value)}
                                />
                            </OverlayTrigger>
                        </Form.Group>
                        <Form.Group size="lg" controlId="serverpassword">
                            <Form.Label>PASSWORD</Form.Label>
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
                                    placeholder='Minimum 8 characters'
                                    type="password"
                                    value={serverPassword}
                                    onChange={(e) => setServerPassword(e.target.value)}
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
                        <div className="base64file">
                        <Form.Group size="lg" controlId="confirmpassword">
                            <Form.Label>SERVER IMAGE</Form.Label>
                            <FileBase64
                                multiple={false}
                                onDone={({ base64,size }) => {
                                    setImageFile(base64)
                                    setFileSize(size)
                                } }
                                    
                                />
                        </Form.Group>
                        </div>
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
                <Footer />
            </div>
        </Scrollbars>
    );
};

export default AddServer;






                                // let reader = new FileReader()
                                // reader.readAsDataURL(imageFile)
                                // console.log(reader.result);


                                // const formData = new FormData();
                                // formData.append("file", imageFile[0]);
                                // formData.append("upload_preset", "mfqta5a8");

                                // axios
                                //     .post("https://api.cloudinary.com/v1_1/ddtyd3iwa/image/upload", formData) //cloudinary te upload hoyar por response pailam
                                //     .then((response) => {
                                //         console.log(response.data.secure_url);
                                //         data.imageURL = response.data.secure_url;
                                //         axios
                                //             .post("http://localhost:2999/React_AddServer", data)
                                //             .then((response) => {
                                //                 console.log(response.data);
                                //                 if (!(response.data.message === '')) {
                                //                     setError(response.data.message);
                                //                 }
                                //                 else {
                                //                     history.push({
                                //                         pathname: "/ServerInfoPage",
                                //                         state: response.data,
                                //                     });
                                //                 }
                                //             })
                                //             .catch((error) => {
                                //                 console.log(error);
                                //             });
                                //     });