import React from 'react';
import '../../styles/Top.css';
import { HouseFill } from 'react-bootstrap-icons';

function Top(props) {
    return (
        <div className="header">
            <p className="chatTitle">{props.title}</p>
            <button className="homeButton">
                <HouseFill size={20} color="black"></HouseFill>
            </button>
        </div>
    );
}

export default Top;