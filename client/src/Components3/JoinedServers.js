import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./JoinedServers.css";
import axios from 'axios';
import SmallCards from "./SmallCards";
import { MDBContainer } from "mdbreact";


const JoinedServers = (props) => {

    const [data, setData] = useState([]);

    const data1 = {
        username: props.username,
    }

    useEffect(() => {
        axios.post('http://localhost:2999/JoinedServers', data1)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const scrollContainerStyle = { width: "100%", maxHeight: "85%" };
    return (
        <div className="smallcard_scrollbar_container">
            <MDBContainer className="scrollbar mdb" style={scrollContainerStyle}>
                <div className="smallCardGrid">
                    {
                        data.map((classItem) => {
                            return (
                                <SmallCards
                                    key={classItem.id}
                                    title={classItem.title}
                                    imageUrl={classItem.imageUrl}
                                    username={props.username}
                                />
                            );
                        })}
                </div>
            </MDBContainer>
        </div>
    );

};

export default JoinedServers;
