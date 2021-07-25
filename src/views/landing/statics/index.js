import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import './style.scss';
import axiosPublic from "../../../axios/axios_public";
import axios from 'axios'

let LANDING_PAGE_STATICS_API = `landingPage/statistics`;

class App extends Component {
    state = {
        donors: 0,
        hospitals: 0,
        donation: 0,
        open: 0,
        close: 0
    };

    async componentDidMount() {

        const response = await axios.post('http://localhost:8090/api/easyDonations/landingPage/statistics')
        console.log(response.data)
        if(response && response.data){
            this.setState({
                // list: response.data.body,
                donors:  response.data.body.noOfDonors,
                hospitals: response.data.body.noOfHospitals,
                donation: response.data.body.noOfDonations,
                open:  response.data.body.noOfOpenRequirements,
                close: response.data.body.noOfCloseRequirements
            })
        }
        
                        console.log(this.state)
        
        // axiosPublic.post('http://localhost:8090/api/easyDonations/landingPage/statistics')
        //     .then(response => {
        //         console.log(response)
        //         if (response.data.success) {
            
        //             this.setState({
        //                 list: response.data.body,
        //                 donors: response.data.body.noOfDonors,
        //                 hospitals: response.data.body.noOfHospitals,
        //                 donation: response.data.body.noOfDonations,
        //                 open: response.body.data.noOfOpenRequirements,
        //                 close: response.body.data.noOfCloseRequirements
        //             })
        //             console.log(this.state)
        //         }
        //     })
        //     .catch(err => {

        //     })
    }

    render() {
        let {donation, donors, open, close, hospitals} = this.state;
        return (
            <Row className={"statics m-0"}>
                <Col sm={6} md={2} className={"card card-1"}>
                    <p className={"head-font"}>Donors</p>
                    <p className={"sub-font"}>{donors}</p>
                </Col>
                <Col sm={6} md={2} className={"card card-2"}>
                    <p className={"head-font"}>Hospitals</p>
                    <p className={"sub-font"}>{hospitals}</p>
                </Col>
                <Col sm={6} md={2} className={"card card-3"}>
                    <p className={"head-font"}>Donations</p>
                    <p className={"sub-font"}>{donation}</p>
                </Col>
                <Col sm={6} md={2} className={"card card-4"}>
                    <p className={"head-font"}>Open Requirements</p>
                    <p className={"sub-font"}>{open}</p>
                </Col>
                <Col sm={6} md={2} className={"card card-5"}>
                    <p className={"head-font"}>Close Requirements</p>
                    <p className={"sub-font"}>{close}</p>
                </Col>
            </Row>
        );
    }
}

export default App;
