import React, { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

import './Messages.css';

// const Messages = ({ messages, name }) => (

//   <ScrollToBottom className="messages">
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
//   </ScrollToBottom>

// )

// import { css } from '@emotion/css'

// const ROOT_CSS = css({
// });

// const Messages = ({ messages, name }) => (  

//    <ScrollToBottom className={ROOT_CSS}>
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
//   </ScrollToBottom>

// )

// import { MDBContainer } from "mdbreact";
// const scrollContainerStyle = { width: "100%", height: "100%"};
// const Messages = ({ messages, name }) => (

//   <MDBContainer className="chatscrollbar chatmdb" style={scrollContainerStyle}>
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
//   </MDBContainer>

// )


import { useRef } from 'react'

import { MDBContainer } from "mdbreact";
const scrollContainerStyle = { width: "100%", height: "100%"};

const Messages = ({ messages, name }) => {

  const bottomRef = useRef(null);

  const scrollToBottom1 = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  useEffect(() => {
    scrollToBottom1();
  }, [messages]);

  return(
  <MDBContainer className="chatscrollbar chatmdb" style={scrollContainerStyle}>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    <div ref={bottomRef}/>
  </MDBContainer>
  );

};


export default Messages;
