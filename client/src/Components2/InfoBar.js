import React from 'react';
import { useHistory } from "react-router-dom";
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ username, servername, channel }) => {

  let history = useHistory();

  function handleSubmit(event) {
    
    const data = {
      username: username,
      servername: servername,
    };

    history.push({
      pathname: "/Room/" + servername,
      state: data,
    });

    event.preventDefault();
  }


  return (
    <div>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>{channel}</h3>
        </div>
        <div onClick={handleSubmit} className="rightInnerContainer">
          <a href=""><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
      <hr
        style={{
          color: "white",
          width: "100%",
          height: "5px",
          margin: "auto",
          marginTop: "21px",
          borderRadius: "30px",
        }}
      />
    </div>
  );
};

export default InfoBar;