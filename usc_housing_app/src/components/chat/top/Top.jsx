import React from 'react';
import '../../../styles/chat/Top.css';
import {HouseFill} from 'react-bootstrap-icons';

function Top(){
    return(
        <div className = "header">
            <p className ="chatTitle">Chat Page</p>
            <button className = "homeButton">
                <HouseFill size={20} color="black"></HouseFill>
            </button>
        </div>
    );
}
export default Top;