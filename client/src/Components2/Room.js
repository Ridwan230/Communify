import React from "react";
import "./Room.css";
import Channel from "./Channel";

const Room = (props) => {

    const { state } = props.location;

    var cross = Math.random() * (99999 - 0);

    return (
        <div className="room">
            <Channel
                username={state.username}
                servername={state.servername}
                cross={cross}
            />
        </div>
    );
}

export default Room;