import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chatbox.css';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';

let socket;

const Chatbox = (props) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:2999';

    const channel_name = props.channel;

    useEffect(() => {
        const name = props.username;
        const room = props.servername;

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', name, room, channel_name, (callback) => {
            if (callback.error) {
                console.log("Join error");
                alert(callback.error);
            }
            else {
                for (var i = 0; i < callback.length1; i++) {
                    const initial_message = {
                        user: callback.result[i].sender,
                        text: callback.result[i].text,
                    }
                    setMessages(messages => [...messages, initial_message]);

                }
            }
        });

        // return () => {
        //     socket.emit('disconnect');

        //     socket.off();
        // }
    }, [ENDPOINT]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]); 
        })

        // socket.on('roomData', ({users}) => {
        //     setUsers(users);
        // })
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage',  message, name, room, channel_name , () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={props.channel} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chatbox;