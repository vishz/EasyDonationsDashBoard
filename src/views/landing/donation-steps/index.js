import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Video from '../../../assets/videos/video-1.mp4'
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"donation-steps m-0"}>
                <Col md={6}>
                    <p className={"normal-head-font"}>Donating Steps</p>
                    <p className={"normal-sub-font"}>Step 01 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 02 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 03 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 04 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 05 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 06 - <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since Lorem Ipsum.
                    </span></p>
                </Col>
                <Col md={6}>
                    <video width="100%" height="" controls>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </Col>
            </Row>
        );
    }
}

export default App;
