import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Video from '../../../assets/videos/video-2.mp4'
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"about-donation m-0"}>
                <Col md={6}>
                    <p className={"normal-head-font"}>About Easy Donations</p>
                    <p className={"normal-sub-font"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
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
