import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ScrollToBottom from 'react-scroll-to-bottom';
import "./MemberList.css";
import axios from 'axios';
import { MDBContainer } from "mdbreact";


const MemberList = (props) => {

    const [list, setList] = useState([]);
    const [flag, setFlag] = useState("false");
    const [temp, setTemp] = useState(false);


    useEffect(() => {

        const data = {
            username: props.username,
            servername: props.servername,
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

    }, [temp,props.channelname]);


    useEffect(() => {

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

    }, [props.username]);



    function handleSubmit(username) {

        setTemp(!temp);

        const data1 = {
            username: username,
            servername: props.servername,
        }
        axios.post('http://localhost:2999/Add_Admin', data1)

    }


    // return (
    // <div className="listContainer">
    //     <div className="listTag">
    //         <h3>Members-</h3>
    //     </div>

    //     <ScrollToBottom className="membernamescontainer">
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
        <div className="memberlistContainer">
            <div className="memberlistTag">
                <h3>Members-</h3>
            </div>

            <MDBContainer className="memberlist-scrlbar scrollbar my-5 mx-auto mdb" style={scrollContainerStyle}>
                <div className="memberlistNames">{
                    list.map((classItem) => {
                        return (
                            <Row className="membernameRow">
                                <Col>
                                    <div className="membernames">{classItem.username}</div>
                                </Col>
                                <Col>
                                    {flag === true &&
                                        (<Button className="addAdmin" block size="sm" variant='success' onClick={() => { handleSubmit(classItem.username); }}> +Admin </Button>)
                                    }
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </MDBContainer>
        </div>

    );
};

export default MemberList;
