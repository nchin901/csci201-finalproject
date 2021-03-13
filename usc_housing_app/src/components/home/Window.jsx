import React from "react";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Window.css";
import ProgressBar from "./ProgressBar.jsx";
import Listing from './Listing.jsx';


function Window(props) {
    // const listItems = numbers.map((number) =>
    //     <li>{number}</li>
    // );
    return (
        <div>
            <Row>
                <div class="progress-container">
                    <h1 class="title">Progress</h1>
                    <ProgressBar now={50} />
                </div>
            </Row>
            <Row>
                <div class="current-listings-container">
                    <ul>
                        <Listing title="Nice apartment" loc="203 Hoover St" body="very nice place with pool and bar" year='2021' month='5' day='5' />
                        <Listing title="Really nice apartment" loc="203 South Fig" body="nice louge and bedroom" year='2021' month='5' day='5' />
                    </ul>
                </div>
            </Row>
        </div>
    );
}

export default Window;