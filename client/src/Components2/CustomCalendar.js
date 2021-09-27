import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'


const CustomCalendar = (props) => {

    const [isAdmin, setIsAdmin] = useState(0);
    useEffect(() => {


        const data = {
            servername: props.servername,
            username: props.username,
            isAdmin: isAdmin,
        }

        const getAdminList = async () => {

            await axios.post('http://localhost:2999/AdminList', data)
                .then(response => {
                    if ((response.data.map(x => {return x.username})).includes(props.username)) {
                        setIsAdmin(1);
                    }
                    console.log(data)
                    axios.post('http://localhost:2999/GetEvent', data)
                    .then(response => {
                        setEventList(response.data)
                        console.log(eventList)
                    })
                    .catch(error => {
                        console.log(error);
                    })

                    
                })
                .catch(error => {
                    console.log(error);
                })
        }
        getAdminList();


    }, [props.servername,isAdmin,props.username,props.channelName,props.userName]);



    const [show, setShow] = useState(false);
    let today=new Date();

    const [event, setEvent] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [eventList,setEventList]=useState([]);


    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const addEvent = () =>{
        setShow(false)


        const data = {
            userName: props.username,
            serverName: props.servername,
            isAdmin: isAdmin,
            eventDate: date.getDate().toString(),
            eventMonth: date.getMonth().toString(),
            eventYear: date.getFullYear().toString(),
            eventName: event,
            eventDescription: description,
        }
    
        setEventList(eventList => [...eventList, data]);
        setEvent("");
        setDescription("");


        axios.post('http://localhost:2999/AddEvent', data)
                .then(response => {
                    console.log(response.data.message)
                })
                .catch(error => {
                    console.log(error);
                })
        
    }

    return (
        <div className="calendarDiv">
            <Modal show={show} onHide={handleClose} className='customModal'>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Event for {date.getDate().toString()}/{date.getMonth().toString()}/{date.getFullYear().toString()}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h5>Events Already Set-</h5>
                <div className='eventContainerModal'>
            <ol>
            {   
                eventList.map( (item) => {if(item.eventDate === date.getDate().toString() && item.eventMonth === date.getMonth().toString() && item.eventYear === date.getFullYear().toString()){
                    return (<li>{item.eventName}</li>)
                }
                else{
                    return null;
                }
                })
            }
            </ol>
            </div>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>New Event</Form.Label>
                        <Form.Control
                            className=''
                            type="text"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Event Description</Form.Label>
                        <FormControl
                            as="textarea"
                            aria-label="With textarea"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            row={3}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addEvent}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Calendar className="CustomCalendar" value={date} onClickDay={(value, event) => {
                setDate(value);
                handleShow();
            }}

                tileClassName={({ date,view}) => {  //find always returns first match
                    if(eventList.find(x => x.eventDate === date.getDate().toString() && x.eventMonth === date.getMonth().toString() && x.eventYear === date.getFullYear().toString() && x.isAdmin===1))
                        return 'highlightAdmin'
                    if(eventList.find(x => x.eventDate === date.getDate().toString() && x.eventMonth === date.getMonth().toString() && x.eventYear === date.getFullYear().toString() && x.isAdmin===0))
                        return 'highlightMember'
                }}

            ></Calendar>
            <h1>Event-</h1>
            <hr style={{ color: "white", width: "90%", height: "5px", margin: "auto", marginTop: "10px", }} />
            <h5>Date- {today.getDate().toString()} / {today.getMonth().toString()} / {today.getFullYear().toString()}</h5>
            <div className='eventContainer'>
            <ol>
            {   
                eventList.map( (item) => {if(item.eventDate === today.getDate().toString() && item.eventMonth === today.getMonth().toString() && item.eventYear === today.getFullYear().toString()){
                    return (<li>{item.eventName}</li>)
                }
                else{
                    return null;
                }
                })
            }
            </ol>
            </div>
        </div>
    );
};

export default CustomCalendar;
