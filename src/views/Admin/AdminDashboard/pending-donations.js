import React, { Component } from 'react';
import { MDBDataTable } from "mdbreact";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import axios from '../../../axios/axios_public';
import { Button as SementicBtn, Icon } from "semantic-ui-react";
import swal from "sweetalert";
import are_you_sure_icon from "../../../assets//question.svg";
import './styles.css'
import * as common from '../../../const/commonFunc'
import axios2 from 'axios'

class App extends Component {
    state = {
        data: [
            {
                "requirementDescription": "Urgent need",
                "quantity": "3",
                "requirementItem": "Icu Beds",
                "estimatedCost": "50 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f535ac4c2a2c3d8aaf7caf",
                    "name": "Hospital1",
                    "userName": "Hospital1",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f4def1e03003af9f5b1eb5",
                        "categoryName": "GOVERNMENT"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "3",
                "requirementItem": "Patient Monitors",
                "estimatedCost": "40 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f535ac4c2a2c3d8aaf7caf",
                    "name": "Hospital1",
                    "userName": "Hospital1",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f4def1e03003af9f5b1eb5",
                        "categoryName": "GOVERNMENT"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "3",
                "requirementItem": "Patient Monitors",
                "estimatedCost": "40 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f535ef4c2a2c3d8aaf7cb0",
                    "name": "Hospital2",
                    "userName": "Hospital2",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f533f453b137ea64d554de",
                        "categoryName": "PRIVATE"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "5",
                "requirementItem": "Surgical Tables",
                "estimatedCost": "40 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f536034c2a2c3d8aaf7cb1",
                    "name": "Hospital3",
                    "userName": "Hospital3",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f5342b53b137ea64d554e0",
                        "categoryName": "SEMI-GOVERNMENT"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "5",
                "requirementItem": "Surgical Tables",
                "estimatedCost": "80 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f536324c2a2c3d8aaf7cb3",
                    "name": "Hospital5",
                    "userName": "Hospital5",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f5342b53b137ea64d554e0",
                        "categoryName": "SEMI-GOVERNMENT"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "5",
                "requirementItem": "Blanket and Fluid Warmers",
                "estimatedCost": "70 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f536324c2a2c3d8aaf7cb3",
                    "name": "Hospital5",
                    "userName": "Hospital5",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f5342b53b137ea64d554e0",
                        "categoryName": "SEMI-GOVERNMENT"
                    }
                }
            },
            {
                "requirementDescription": "Urgent need",
                "quantity": "1",
                "requirementItem": "Blanket and Fluid Warmers",
                "estimatedCost": "10 000/=",
                "brand": "abc",
                "id": "0f535ac4c2a2c3d8aaf7caf",
                "hospital": {
                    "id": "60f535ef4c2a2c3d8aaf7cb0",
                    "name": "Hospital2",
                    "userName": "Hospital2",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60f533f453b137ea64d554de",
                        "categoryName": "PRIVATE"
                    }
                }
            }
        ],
        donationColumns: [
            {
                label: 'Requirement Item',
                field: 'requirementItem',
                sort: 'asc '
            },
            {
                label: 'Quantity',
                field: 'quantity',
                sort: 'asc '
            },
            {
                label: 'Hospital Name',
                field: 'hospitalName',
                sort: 'asc '
            },
            {
                label: 'Estimated Cost',
                field: 'estimatedCost',
                sort: 'asc '
            },
            {
                label: 'Brand',
                field: 'brand',
                sort: 'asc '
            },
            {
                label: 'Requirement Description',
                field: 'requirementDescription',
                sort: 'asc '
            },
            {
                label: 'Change Status',
                field: 'changestatus',
                sort: 'asc ',
                minWidth: '200px'
            }

        ],
    }

    componentDidMount() {
        this.getAllPendingDonations();
    }

    getAllPendingDonations = async () => {
        await axios2.post("http://localhost:8090/api/easyDonations/admin/pendingRequirements")
            .then(async response => {
                if (response.data.success) {
                    this.setState({
                        data: response.data.body
                    })
                }
            })

            .catch(async error => {
                common.notifyMessage("Something went wrong", 0, 3);
            })

            .finally(fin => {

            });
    }

    warningAlert = (id, status) => {
        swal({
            title: "Do you want to change this status ? ",
            icon: are_you_sure_icon,
            closeOnClickOutside: false,
            buttons: {
                cancel: 'Cancel',
                dangerMode: {
                    text: "Yes",
                    value: "action",
                    className: "okay-btn"
                }
            },
        })
            .then((value) => {
                switch (value) {
                    case "action":
                        if (status === "APPROVE") {
                            this.approveDonation(id);
                        } else if (status === "REJECT") {
                            this.rejectDonation(id);
                        }
                        break;

                    default:
                }
            });
    }

    approveDonation = async (id) => {
        const obj = {
            "id": id
        }
        await axios.post("admin/requirement/approve", obj)
            .then(async response => {
                if (response.data.success) {
                    common.notifyMessage("successfully approved", 2, 3);
                    this.getAllPendingDonations();
                }
            })

            .catch(error => {
                if (error.response.status === 500) {
                    common.notifyMessage(error.response.message, 0, 3);
                } else {
                    common.notifyMessage("Something went wrong", 0, 3);
                }
            })

            .finally(fin => {

            });
    }

    rejectDonation = async (id) => {
        const obj = {
            "id": id
        }
        await axios.post("admin/requirement/reject", obj)
            .then(async response => {
                if (response.data.success) {
                    common.notifyMessage("successfully reject", 2, 3);
                    this.getAllPendingDonations();
                }
            })

            .catch(error => {
                if (error.response.status === 500) {
                    common.notifyMessage(error.response.message, 0, 3);
                } else {
                    common.notifyMessage("Something went wrong", 0, 3);
                }
            })

            .finally(fin => {

            });
    }

    render() {
        let rows = [];
        let all_donations = this.state.data;
        if (all_donations.length !== 0) {
            all_donations.map((cor, index) => {
                const obj = {
                    requirementItem: cor.requirementItem === null ? "-" : cor.requirementItem,
                    quantity: cor.quantity === null ? "-" : cor.quantity,
                    hospitalName: cor.hospital.name === null ? "-" : cor.hospital.name,
                    estimatedCost: cor.estimatedCost === null ? "-" : cor.estimatedCost,
                    brand: cor.brand === null ? "-" : cor.brand,
                    requirementDescription: cor.requirementDescription === null ? "-" : cor.requirementDescription,
                    changestatus: <Row style={{ padding: '0px', margin: '0px' }}>
                        <Col sm={6} style={{ padding: '0px' }}>
                            <SementicBtn key={index} style={{ background: '#2abd1a', color: 'white', width: '80px', height: '30px', fontSize: '10px' }}
                                onClick={() => this.warningAlert(cor.id, "APPROVE")}
                            >APPROVE</SementicBtn>
                        </Col>
                        <Col sm={6} style={{ padding: '0px' }}>
                            <SementicBtn key={index} style={{ background: 'red', color: 'white', width: '80px', height: '30px', fontSize: '10px' }}
                                onClick={() => this.warningAlert(cor.id, "REJECT")}
                            >REJECT</SementicBtn>
                        </Col>

                    </Row>,
                };
                rows.push(obj)
            })
        }

        let columns = this.state.donationColumns;
        let table_data = { columns, rows };
        return (
            <Row>
                <Col lg="12">
                    <Card>
                        <CardHeader>
                            All Pending Donations Requirements
                        </CardHeader>
                        <CardBody>
                            <MDBDataTable

                                searching={true}
                                searchLabel={"Search Corporate"}
                                responsive
                                responsiveSm
                                responsiveMd
                                responsiveLg
                                responsiveXl
                                // striped={true}
                                bordered
                                hover
                                entries={10}
                                displayEntries={false}
                                data={table_data}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default App;