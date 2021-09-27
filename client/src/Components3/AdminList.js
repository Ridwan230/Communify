import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AdminList.css";
import axios from 'axios';
import { MDBContainer } from "mdbreact";


const AdminList = ({ setShowAdminList, username, servername, channelname }) => {

    const [list, setList] = useState([]);
    const handleClose = () => setShowAdminList(false);
    const [show, setShow] = useState(true);
    

    useEffect(() => {

        const data = {
            username: username,
            servername: servername,
        }

        const getAdminList = async () => {

            await axios.post('http://localhost:2999/AdminList', data)
                .then(response => {
                    setList(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        getAdminList();

    }, [channelname]);


    const scrollContainerStyle = { width: "100%", maxHeight: "100%", paddingRight: "5%" };

    return (
        <Modal show={show} onHide={handleClose} className="adminlistContainer">
            <Modal.Header closeButton className="adminlistTag">
                <h3>Admins -</h3>
            </Modal.Header>

            <MDBContainer className="adminlist-scrlbar scrollbar mx-auto mdb" style={scrollContainerStyle}>
                <div className="adminlistNames">
                    <ol>{
                        list.map((classItem) => {
                            return (
                                <div className="adminNames">
                                    <li>{classItem.username}</li>
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

export default AdminList;
