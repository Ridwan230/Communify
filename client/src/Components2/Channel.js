import React, { Component } from 'react';

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
                 <div>
                <button onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </button>
                <button onClick={() => { this.setState({ whichComponentToShow: "General" });}}> General </button>
                </div>
             );
          }
      else if (this.state.whichComponentToShow === "Notice") {
        return (
            <div>
                <button onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </button>
                <button onClick={() => { this.setState({ whichComponentToShow: "General" });}}> General </button>
                <h1>Notice Chat component</h1>
            </div>
        );
      }  
      else if (this.state.whichComponentToShow === "General") {
        return (
        <div>
            <button onClick={() => { this.setState({ whichComponentToShow: "Notice" }); }}> Notice </button>
            <button onClick={() => { this.setState({ whichComponentToShow: "General" });}}> General </button>
            {/* <Chatbox location={'123','456'} channel={'General'}/> */}
            <Chatbox username={this.props.username} servername={this.props.servername} channel={'General'}/>
        </div>
        );
      }
      return null;
    }
  }
  

export default Channel;
