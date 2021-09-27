import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MemberList.css";
import axios from 'axios';
import { MDBContainer } from "mdbreact";


const MemberList = ({ setShowMemberList, username, servername, channelname }) => {
    console.log("HERE");

    const [list, setList] = useState([]);
    const [flag, setFlag] = useState("false");
    const [temp, setTemp] = useState(false);

    const handleClose = () => setShowMemberList(false);
    const [show, setShow] = useState(true);


    useEffect(() => {

        const data = {
            username: username,
            servername: servername,
        }

        const getMemberList = async () => {

            await axios.post('http://localhost:2999/MemberList', data)
                .then(response => {
                    setList(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        getMemberList();

    }, [temp, channelname]);


    useEffect(() => {

        const data = {
            username: username,
            servername: servername,
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

    }, [username]);



    function handleSubmit(username) {

        setTemp(!temp);

        const data1 = {
            username: username,
            servername: servername,
        }
        axios.post('http://localhost:2999/Add_Admin', data1)

    }


    const scrollContainerStyle = { width: "100%", maxHeight: "100%", paddingRight: "5%" };

    return (
        <Modal show={show} onHide={handleClose} className="memberlistContainer">
            <Modal.Header closeButton className="memberlistTag">
                <h3>Members-</h3>
            </Modal.Header>

            <MDBContainer className="memberlist-scrlbar scrollbar mx-auto mdb" style={scrollContainerStyle}>
                <div className="memberlistNames">
                    <ol>{
                        list.map((classItem) => {
                            return (
                                <div className="memberNames">
                                    <li>{classItem.username}</li>
                                    {flag === true &&
                                        (<Button className="addAdmin" block size="sm" variant='success' onClick={() => { handleSubmit(classItem.username); }}> +Admin </Button>)
                                    }
                                </div>
                            );
                        })
                    }
                    </ol>
                </div>
            </MDBContainer>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );
};

export default MemberList;
