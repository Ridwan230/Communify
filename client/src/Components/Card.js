import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

//const Card = ({ title, imageUrl, cardBody}) => {
const Card = (props) => {

    let history = useHistory();

    const buttonPush = () => {
        history.push({
            pathname: "/EnterServer",
            state: { servername: props.title, username: props.username }
        });
    }

    return (
        <div className='cardContainer' onClick={buttonPush}>
            <div className='imageContainer'>
                <div className="image">
                    <img className="image__img" src={props.imageUrl} alt="cardImage" />
                    <div className="image__overlay image__overlay--primary">
                        <p className="image__description">
                            {props.cardBody}
                        </p>
                    </div>
                </div>
            </div>

            <div className='cardContents'>
                <div className='cardTitle'>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>

    );

}

export default Card;