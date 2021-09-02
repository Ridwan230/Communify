import React, { useState, Component, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { TiHome } from "react-icons/ti";
import { FaGripfire } from "react-icons/fa";
import './Channel.css';
import Chatbox from './Chatbox'
import Calendar from 'react-calendar';
import Settings from '../Components3/Settings'
import MemberList from '../Components3/MemberList'
import AdminList from '../Components3/AdminList'
import JoinedServers from '../Components3/JoinedServers';

const Channel = (props) => {

  let history = useHistory();

  function handleSubmit(event) {

    const data = {
      username: props.username,
    }

    history.push({
      pathname: "/ServerInfoPage",
      state: data
    });
  }

  const [ComponentToShow, setComponentToShow] = useState("");

  useEffect(() => {

    setComponentToShow("None");

  }, [props.servername]);


  if (ComponentToShow === "None") {
    return (
      <div className="channel-page" >
        <Row>
          <Col className="col1" sm={0} md={2} lg={1}>
            <div className="homeicon" onClick={handleSubmit}>
              <a href=""><TiHome size={65} /></a>
              <hr style={{ color: "white", width: "90%", height: "5px", margin: "auto", marginTop: "10px", }} />
            </div>
            <div>
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "16.5px", }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            {/* <h1>NONE</h1> */}
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
          </Col>
        </Row>
      </div>
    );
  }
  else if (ComponentToShow === "") {
    return (
      <div className="channel-page" >
        <Row>
          <Col className="col1" sm={0} md={2} lg={1}>
            <div className="homeicon" onClick={handleSubmit}>
              <a href=""><TiHome size={65} /></a>
              <hr style={{ color: "white", width: "90%", height: "5px", margin: "auto", marginTop: "10px", }} />
            </div>
            <div>
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "16.5px", }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            {/* <h1>BLANK</h1> */}
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
          <Calendar/>
            <AdminList username={props.username} servername={props.servername} channelname={ComponentToShow} />
            <MemberList username={props.username} servername={props.servername} channelname={ComponentToShow} />
          </Col>
        </Row>
      </div>
    );
  }
  else if (ComponentToShow === "Notice") {
    return (
      <div className="channel-page" >
        <Row>
          <Col className="col1" sm={0} md={2} lg={1}>
            <div className="homeicon" onClick={handleSubmit}>
              <a href=""><TiHome size={65} /></a>
              <hr style={{ color: "white", width: "90%", height: "5px", margin: "auto", marginTop: "10px", }} />
            </div>
            <div>
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "16.5px", }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            <Chatbox username={props.username} servername={props.servername} channel={'Notice'} />
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
            <Calendar/>
            <AdminList username={props.username} servername={props.servername} channelname={ComponentToShow} />
            <MemberList username={props.username} servername={props.servername} channelname={ComponentToShow} />
          </Col>
        </Row>
      </div>
    );
  }
  else if (ComponentToShow === "General") {
    return (
      <div className="channel-page" >
        <Row>
          <Col className="col1" sm={0} md={2} lg={1}>
            <div className="homeicon" onClick={handleSubmit}>
              <a href=""><TiHome size={65} /></a>
              <hr style={{ color: "white", width: "90%", height: "5px", margin: "auto", marginTop: "10px", }} />
            </div>
            <div>
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "16.5px", }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            <Chatbox username={props.username} servername={props.servername} channel={'General'} />
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
            <Calendar/>
            <AdminList username={props.username} servername={props.servername} channelname={ComponentToShow} />
            <MemberList username={props.username} servername={props.servername} channelname={ComponentToShow} />
          </Col>
        </Row>
      </div>
    );
  }
  return null;
}


export default Channel;
