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
    <a href=""><IoSend size={60} className="sendButton1" onClick={event => sendMessage(event)}/></a>
  </form>
)

export default Input;