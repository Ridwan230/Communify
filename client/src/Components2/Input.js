import React from 'react';
import { IoSend } from "react-icons/io5";
import './Input.css';

const Input = ({  message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    {/* <button className="sendButton" onClick={event => sendMessage(event)}>Send</button> */}
    <a href=""><IoSend size={80} className="sendButton1" onClick={event => sendMessage(event)}/></a>
  </form>
)

export default Input;