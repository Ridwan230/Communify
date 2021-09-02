import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './Messages.css';

const Messages = ({ messages, name }) => (

  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
  </ScrollToBottom>

)


// import { MDBContainer } from "mdbreact";
// const scrollContainerStyle = { width: "100%", maxHeight: "100%" , paddingRight: "5%"};
// const Messages = ({ messages, name }) => (

//   <MDBContainer className="scrollbar my-5 mx-auto mdb" style={scrollContainerStyle}>
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
//   </MDBContainer>

// )


export default Messages;
