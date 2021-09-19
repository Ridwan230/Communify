import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './SmallCards.css';

const SmallCards = (props) => {

    let history = useHistory();

    const buttonPush = () => {

        history.push({
            pathname: "/Room/" + props.title,
            state: { servername: props.title, username: props.username }
        });    
    }
    
    return (
        <div className='smallcardContainer' onClick={buttonPush}>
            <div className='smallimageContainer'>
                <div className="smallimage">
                    <img className="smallimage__img" src={props.imageUrl} alt="cardImage" />
                    <div className="smallimage__overlay smallimage__overlay--primary">
                        <p className="smallimage__description">
                            {props.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default SmallCards;