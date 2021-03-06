import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
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
    const [flag, setFlag] = useState("false");


    useEffect(() => {

        const data = {
            username: props.username,
            servername: props.servername,
        }

        const checkifAdmin = async () => {
            await axios.post('http://localhost:2999/isAdmin', data)
                .then(response => {
                    setFlag(response.data.flag);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        checkifAdmin();

    }, [ENDPOINT, channel_name]);


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
                setMessages([]);
                for (var i = 0; i < callback.length1; i++) {
                    const initial_message = {
                        user: callback.result[i].sender,
                        text: callback.result[i].text,
                    }
                    setMessages(messages => [...messages, initial_message]);
                }
            }
        });
    }, [ENDPOINT, channel_name]);

    useEffect(() => {
        setMessages([]);
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        })
    }, [channel_name]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, name, room, channel_name, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container1">
                <InfoBar username={props.username} servername={props.servername} channel={props.channel} />
                <Messages messages={messages} name={name} serverName={room} channelName={channel_name} />
                {channel_name === "Notice" && flag === true &&
                    (<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />)
                }
                {channel_name === "General" &&
                    (<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />)
                }
            </div>
        </div>
    );
}

export default Chatbox;