import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Method1 from '../../../assets/landing/donate-method/donate-online.png';
import Method2 from '../../../assets/landing/donate-method/donate-through-vendors.jpg';
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"donate-method m-0"}>
                <Col xs={12}>
                    <center>
                        <p className={"normal-head-font"}>Donation Methods</p>
                    </center>
                </Col>
                <Col xs={4}>
                    <div className={"card"}>
                        <img src={Method1} alt={"method"}/>
                        <p className={"sub-head"}>Online Donations</p>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className={"card last-card"}>
                        <img src={Method2} alt={"method"}/>
                        <p className={"sub-head"}>Donations through vendors</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
