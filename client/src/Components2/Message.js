import React from 'react';
import { IoPerson } from "react-icons/io5";
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  //const trimmedName = name.trim().toLowerCase();

  if (user === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          {/* <p className="sentText pr-10">{name}</p> */}
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
          <IoPerson size={35} className="currentusericon" />
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <IoPerson size={35} className="notcurrentusericon" />
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )
  );
}

export default Message;