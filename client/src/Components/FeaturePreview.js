import React from 'react';
import { useHistory } from 'react-router-dom';
import './FeaturePreview.css';
import { FaArchive, FaCodepen } from "react-icons/fa";

const FeaturePreview = (props) => {


    return (
        <div className="feature">
        
            <div className="featureImage">
                <FaCodepen size={58}/>
            </div>

            <h6>{props.text1}</h6>
            <h3>{props.text2}</h3>
        </div>
    );

}

export default FeaturePreview;
