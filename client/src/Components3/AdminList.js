import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ScrollToBottom from 'react-scroll-to-bottom';
import "./AdminList.css";
import axios from 'axios';
import { MDBContainer } from "mdbreact";


const AdminList = (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {

        const data = {
            username: props.username,
            servername: props.servername,
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

    }, [props.channelname]);



    // return (
    // <div className="listContainer">
    //     <div className="listTag">
    //         <h3>Members-</h3>
    //     </div>

    //     <ScrollToBottom className="namescontainer">
    //         <div className="listNames">{
    //             list.map((classItem) => {
    //                 return (
    //                     <div className="names">{classItem.username}</div>
    //                 );
    //             })}
    //         </div>
    //     </ScrollToBottom>
    // </div>

    // );


    const scrollContainerStyle = { width: "100%", maxHeight: "100%", paddingRight: "5%" };

    return (
        <div className="adminlistContainer">
            <div className="adminlistTag">
                <h3>Admin-</h3>
            </div>

            <MDBContainer className="adminlist-scrlbar scrollbar my-5 mx-auto mdb" style={scrollContainerStyle}>
                <div className="adminlistNames">{
                    list.map((classItem) => {
                        return (
                            <Row className="adminnameRow">
                                <Col>
                                    <div className="adminnames">{classItem.username}</div>
                                </Col>
                                
                            </Row>
                        );
                    })}
                </div>
            </MDBContainer>
        </div>

    );
};

export default AdminList;
