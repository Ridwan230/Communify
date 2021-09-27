import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { TiHome } from "react-icons/ti";
import { FaGripfire } from "react-icons/fa";
import './Channel.css';
import Chatbox from './Chatbox'
import Settings from '../Components3/Settings'
import MemberList from '../Components3/MemberList'
import AdminList from '../Components3/AdminList'
import JoinedServers from '../Components3/JoinedServers';
import CustomCalendar from '../Components3/CustomCalendar'


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
  const [ShowAdminList, setShowAdminList] = useState(false);
  const [ShowMemberList, setShowMemberList] = useState(false);

  useEffect(() => {

    setComponentToShow("None");

  }, [props.servername, props.cross]);


  if (ComponentToShow === "None") {
    setComponentToShow("");
  }
  else if (ComponentToShow === "") {
    return (
      <div className="channel-page" >
        <Row>
          <Col className="col1" sm={0} md={2} lg={1}>
            <div className="homeicon" onClick={handleSubmit}>
            <a href=""><TiHome size={50} /></a>
              <hr style={{ color: "white", width: "80%", height: "5px", margin: "auto", marginTop: "8.5px", borderRadius: "30px" }} />
            </div>
            <div className="serverslist">
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "10.5px", borderRadius: "30px" }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            {/* <h1>BLANK</h1> */}
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
            <CustomCalendar username={props.username} servername={props.servername} channelName={"none"}></CustomCalendar>
            <div className="listbuttons">
              <Button variant="secondary" size="lg" className="AdminListButton" onClick={() => { setShowAdminList(true); }}> Admin List </Button>
              <Button variant="secondary" size="lg" className="MemberListButton" onClick={() => { setShowMemberList(true); }}> Member List </Button>
            </div>
            {ShowAdminList === true &&
              (<AdminList setShowAdminList={setShowAdminList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
            {ShowMemberList === true &&
              (<MemberList setShowMemberList={setShowMemberList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
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
            <a href=""><TiHome size={50} /></a>
              <hr style={{ color: "white", width: "80%", height: "5px", margin: "auto", marginTop: "8.5px", borderRadius: "30px" }} />
            </div>
            <div className="serverslist">
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "10.5px", borderRadius: "30px" }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            <Chatbox username={props.username} servername={props.servername} channel={'Notice'} />
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
            <CustomCalendar username={props.username} servername={props.servername} channelName={"Notice"}></CustomCalendar>
            <div className="listbuttons">
              <Button variant="secondary" size="lg" className="AdminListButton" onClick={() => { setShowAdminList(true); }}> Admin List </Button>
              <Button variant="secondary" size="lg" className="MemberListButton" onClick={() => { setShowMemberList(true); }}> Member List </Button>
            </div>
            {ShowAdminList === true &&
              (<AdminList setShowAdminList={setShowAdminList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
            {ShowMemberList === true &&
              (<MemberList setShowMemberList={setShowMemberList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
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
              <a href=""><TiHome size={50} /></a>
              <hr style={{ color: "white", width: "80%", height: "5px", margin: "auto", marginTop: "8.5px", borderRadius: "30px" }} />
            </div>
            <div className="serverslist">
              <JoinedServers username={props.username} />
            </div>
          </Col>

          <Col className="col2" sm={2} md={3} lg={2}>
            <h1><FaGripfire size={30} className="servernameicon" /> {props.servername}</h1>
            <hr style={{ color: "white", width: "95%", height: "5px", margin: "auto", marginTop: "10.5px", borderRadius: "30px" }} />
            <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { setComponentToShow("Notice"); }}> Notice </Button>
            <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { setComponentToShow("General"); }}> General </Button>
            <Settings username={props.username} servername={props.servername} />
          </Col>

          <Col className="col3" sm={10} md={4} lg={6}>
            <Chatbox username={props.username} servername={props.servername} channel={'General'} />
          </Col>

          <Col className="col4" sm={0} md={3} lg={3}>
            <CustomCalendar username={props.username} servername={props.servername} channelName={"General"}></CustomCalendar>
            <div className="listbuttons">
              <Button variant="secondary" size="lg" className="AdminListButton" onClick={() => { setShowAdminList(true); }}> Admin List </Button>
              <Button variant="secondary" size="lg" className="MemberListButton" onClick={() => { setShowMemberList(true); }}> Member List </Button>
            </div>
            {ShowAdminList === true &&
              (<AdminList setShowAdminList={setShowAdminList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
            {ShowMemberList === true &&
              (<MemberList setShowMemberList={setShowMemberList} username={props.username} servername={props.servername} channelname={ComponentToShow} />)
            }
          </Col>
        </Row>
      </div>
    );
  }
  return null;
}


export default Channel;