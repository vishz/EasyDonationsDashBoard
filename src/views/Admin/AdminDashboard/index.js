import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { Col, Row, Fade } from 'reactstrap';
// import PlaceHolder from "../../../components/PlaceHolder/PlaceHolder";
import './styles.css'

let date = new Date().getFullYear() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getDate();

class App extends Component {

    state = {
        spin: true,
        dashboards: [
            {
                "name": "test",
                "count": "1"
            }
        ],
        obj: {
            "numberOfAllRequirements": 1,
            "numberOfCompletedRequirements": 0,
            "numberOfPendingRequirements": 1
        }
    };


    render() {
        const { dashboards } = this.state;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col className={"marginBottom"} sm={12} md={12} lg={4} xl={4}>
                        <Card
                            fluid
                            color={"grey"}
                            link
                            header={"All Requirements"}
                            meta={"Number Of All Requirements"}
                            description={this.state.obj.numberOfAllRequirements}
                            extra={date}

                        />
                    </Col>
                    <Col className={"marginBottom"} sm={12} md={12} lg={4} xl={4}>
                        <Card
                            fluid
                            color={"grey"}
                            link
                            header={"All Pending Requirements"}
                            meta={"Number Of All Pending Requirements"}
                            description={this.state.obj.numberOfCompletedRequirements}
                            extra={date}

                        />
                    </Col>
                    <Col className={"marginBottom"} sm={12} md={12} lg={4} xl={4}>
                        <Card
                            fluid
                            color={"grey"}
                            link
                            header={"All Completed Requirements"}
                            meta={"Number Of All Completed Requirements"}
                            description={this.state.obj.numberOfCompletedRequirements}
                            extra={date}

                        />
                    </Col>
                    

                </Row>
            </div>
        );
    }
}


export default App;
