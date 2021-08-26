import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import "./Settings.css";


const Settings = (props) => {

    let history = useHistory();
    const [flag, setFlag] = useState("false");

    const data = {
        username: props.username,
        servername: props.servername,
    }

    const checkifAdmin = async () => {
        await axios.post('http://localhost:2999/isAdmin', data)
            .then(response => {
                setFlag(response.data.flag);
            })
            .catch(error => {
                console.log(error);
            })
    }
    checkifAdmin();


    function handleSubmit(event) {

        event.preventDefault();

        const data = {
            username: props.username,
            servername: props.servername,
        }

        axios.post('http://localhost:2999/Leave_Server', data)
            .then(response => {
                history.push({
                    pathname: "/ServerInfoPage",
                    state: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })

    }

    function handleSubmit1(event) {

        event.preventDefault();

        const data = {
            username: props.username,
            servername: props.servername,
        }

        axios.post('http://localhost:2999/Delete_Server', data)
            .then(response => {
                history.push({
                    pathname: "/ServerInfoPage",
                    state: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="mb-2">

            <DropdownButton className="Options-button"
                as={ButtonGroup}
                key={'up'}
                id={`dropdown-button-drop-up`}
                drop={'up'}
                variant="secondary"
                title={`Options`}
            >
                {flag === false &&
                    (<div onClick={handleSubmit}>
                        <Dropdown.Item eventKey="1">Leave Server</Dropdown.Item>
                    </div>)
                }
                {flag === true &&
                    (<div onClick={handleSubmit1}>
                        <Dropdown.Item eventKey="2">Delete Server</Dropdown.Item>
                    </div>)
                }

                {/* <Dropdown.Divider /> */}
            </DropdownButton>
        </div>
    );
}

export default Settings;