import React, { useState, Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { TiHome } from "react-icons/ti";
import { FaGripfire } from "react-icons/fa";
import './Channel.css';
import Chatbox from './Chatbox'

class Channel extends Component {

  state = {
    visible: true,
    whichComponentToShow: ""
  };

  render() {

    if (this.state.whichComponentToShow === "") {
      return (
        <div className="channel-page" >
          <Row>
            <Col className="col1" sm={0} md={2} lg={1}>
              <div className="homeicon">
                <a href="/"><TiHome size={65} /></a>
                <hr
                  style={{
                    color: "white",
                    width: "90%",
                    height: "5px",
                    margin: "auto",
                    marginTop: "10px",
                  }}
                />
              </div>
            </Col>

            <Col className="col2" sm={2} md={3} lg={2}>
              <h1><FaGripfire size={30} className="servernameicon" /> {this.props.servername}</h1>
              <hr
                style={{
                  color: "white",
                  width: "95%",
                  height: "5px",
                  margin: "auto",
                  marginTop: "16.5px",
                }}
              />
              <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </Button>
              <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { this.setState({ whichComponentToShow: "General" }); }}> General </Button>
            </Col>

            <Col className="col3" sm={10} md={4} lg={6}>
              {/* <h1>BLANK</h1> */}
            </Col>

            <Col className="col4" sm={0} md={3} lg={3}>Calendar</Col>
          </Row>
        </div>
      );
    }
    else if (this.state.whichComponentToShow === "Notice") {
      return (
        <div className="channel-page" >
          <Row>
            <Col className="col1" sm={0} md={2} lg={1}>
              <div className="homeicon">
                <a href="/"><TiHome size={65} /></a>
                <hr
                  style={{
                    color: "white",
                    width: "90%",
                    height: "5px",
                    margin: "auto",
                    marginTop: "10px",
                  }}
                />
              </div>
            </Col>

            <Col className="col2" sm={2} md={3} lg={2}>
              <h1><FaGripfire size={30} className="servernameicon" /> {this.props.servername}</h1>
              <hr
                style={{
                  color: "white",
                  width: "95%",
                  height: "5px",
                  margin: "auto",
                  marginTop: "16.5px",
                }}
              />
              <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </Button>
              <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { this.setState({ whichComponentToShow: "General" }); }}> General </Button>
            </Col>

            <Col className="col3" sm={10} md={4} lg={6}>
              <h1>Notice Channel</h1>
              {/* <Chatbox username={this.props.username} servername={this.props.servername} channel={'Notice'} /> */}
            </Col>

            <Col className="col4" sm={0} md={3} lg={3}>Calendar</Col>
          </Row>
        </div>
      );
    }
    else if (this.state.whichComponentToShow === "General") {
      return (
        <div className="channel-page" >
          <Row>
            <Col className="col1" sm={0} md={2} lg={1}>
              <div className="homeicon">
                <a href="/"><TiHome size={65} /></a>
                <hr
                  style={{
                    color: "white",
                    width: "90%",
                    height: "5px",
                    margin: "auto",
                    marginTop: "10px",
                  }}
                />
              </div>
            </Col>

            <Col className="col2" sm={2} md={3} lg={2}>
              <h1><FaGripfire size={30} className="servernameicon" /> {this.props.servername}</h1>
              <hr
                style={{
                  color: "white",
                  width: "95%",
                  height: "5px",
                  margin: "auto",
                  marginTop: "16.5px",
                }}
              />
              <Button variant="secondary" size="lg" className="noticebutton" onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </Button>
              <Button variant="secondary" size="lg" className="generalbutton" onClick={() => { this.setState({ whichComponentToShow: "General" }); }}> General </Button>
            </Col>

            <Col className="col3" sm={10} md={4} lg={6}>
              <Chatbox username={this.props.username} servername={this.props.servername} channel={'General'} />
            </Col>

            <Col className="col4" sm={0} md={3} lg={3}>Calendar</Col>
          </Row>
        </div>
      );
    }
    return null;
  }

}


export default Channel;
