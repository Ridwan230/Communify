import React from 'react';
import './Card.css';

const Card = ({title, imageUrl, cardBody, href}) => {
    console.log(imageUrl + 'LOL');
    return (
        <div className='cardContainer'>
            <div className='imageContainer'>
                <img src={imageUrl} alt="cardImage" />
            </div>
            <div className='cardContents'>
                <div className='cardTitle'>
                    <h3>{title}</h3>
                </div> 
                <div className='cardBody'>
                    <p>{cardBody}</p>
                </div>
                <div className='cardBtn'>
                    <button>
                        <a href={href}>
                            Enter
                        </a>
                    </button>
            </div>
            
            </div>
        </div>

    );
    
}

export default Card;