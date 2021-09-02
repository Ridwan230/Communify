import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div>
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/Room"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
    <hr
      style={{
        color: "white",
        width: "100%",
        height: "5px",
        margin: "auto",
        marginTop: "18.1px",
      }}
    />
  </div>
);

export default InfoBar;