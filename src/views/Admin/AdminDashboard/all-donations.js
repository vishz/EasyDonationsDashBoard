import React, { Component } from 'react';
import { MDBDataTable } from "mdbreact";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import axios from '../../../axios/axios_public';
import './styles.css'
import * as common from '../../../const/commonFunc'

class App extends Component {
    state = {
        donationColumns: [
            {
                label: 'Donor Name',
                field: 'donorName',
                sort: 'asc '
            },
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
                label: 'Amount',
                field: 'amount',
                sort: 'asc '
            },

        ],
        data: [
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54cc660af5e1cb986a8a6",
                    "name": "Dnor1",
                    "userName": "Donor1",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f539874c2a2c3d8aaf7cbb",
                    "requirementDescription": "Urgent need",
                    "quantity": "3",
                    "requirementItem": "Icu Beds",
                    "estimatedCost": "50 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54cc660af5e1cb986a8a6",
                    "name": "Dnor1",
                    "userName": "Donor1",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a1e4c2a2c3d8aaf7cbc",
                    "requirementDescription": "Urgent need",
                    "quantity": "3",
                    "requirementItem": "Patient Monitors",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54ce260af5e1cb986a8a7",
                    "name": "Donor2",
                    "userName": "Donor2",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a1e4c2a2c3d8aaf7cbc",
                    "requirementDescription": "Urgent need",
                    "quantity": "3",
                    "requirementItem": "Patient Monitors",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54ce260af5e1cb986a8a7",
                    "name": "Donor2",
                    "userName": "Donor2",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a2e4c2a2c3d8aaf7cbd",
                    "requirementDescription": "Urgent need",
                    "quantity": "3",
                    "requirementItem": "Patient Monitors",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54ceb60af5e1cb986a8a8",
                    "name": "Donor3",
                    "userName": "Donor3",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a2e4c2a2c3d8aaf7cbd",
                    "requirementDescription": "Urgent need",
                    "quantity": "3",
                    "requirementItem": "Patient Monitors",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54cf460af5e1cb986a8a9",
                    "name": "Donor4",
                    "userName": "Donor4",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a4e4c2a2c3d8aaf7cbe",
                    "requirementDescription": "Urgent need",
                    "quantity": "5",
                    "requirementItem": "Surgical Tables",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54ceb60af5e1cb986a8a8",
                    "name": "Donor3",
                    "userName": "Donor3",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a4e4c2a2c3d8aaf7cbe",
                    "requirementDescription": "Urgent need",
                    "quantity": "5",
                    "requirementItem": "Surgical Tables",
                    "estimatedCost": "40 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54ceb60af5e1cb986a8a8",
                    "name": "Donor3",
                    "userName": "Donor3",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a654c2a2c3d8aaf7cbf",
                    "requirementDescription": "Urgent need",
                    "quantity": "5",
                    "requirementItem": "Surgical Tables",
                    "estimatedCost": "80 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54cf460af5e1cb986a8a9",
                    "name": "Donor4",
                    "userName": "Donor4",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a654c2a2c3d8aaf7cbf",
                    "requirementDescription": "Urgent need",
                    "quantity": "5",
                    "requirementItem": "Surgical Tables",
                    "estimatedCost": "80 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            },
            {
                "donationType": "card",
                "donationAmount": "500",
                "donor": {
                    "id": "60f54cfd60af5e1cb986a8aa",
                    "name": "Donor5",
                    "userName": "Donor5",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123"
                },
                "hospitalRequirement": {
                    "id": "60f53a654c2a2c3d8aaf7cbf",
                    "requirementDescription": "Urgent need",
                    "quantity": "5",
                    "requirementItem": "Surgical Tables",
                    "estimatedCost": "80 000/=",
                    "brand": "abc",
                    "requirementStatus": 1,
                    "adminApproval": 0,
                    "donationStatus": 0,
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
                }
            }
        ]
    }

    componentDidMount() {
        this.getAllDonations();
    }

    getAllDonations = async () => {
        await axios.post("admin/view/allDonations")
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
    render() {
        let rows = [];
        let all_donations = this.state.data;
        if (all_donations.length !== 0) {
            all_donations.map((cor, index) => {
                const obj = {
                    donorName: cor.donor.name === null ? "-" : cor.donor.name,
                    requirementItem: cor.hospitalRequirement.requirementItem === null ? "-" : cor.hospitalRequirement.requirementItem,
                    quantity: cor.hospitalRequirement.quantity === null ? "-" : cor.hospitalRequirement.quantity,
                    hospitalName: cor.hospitalRequirement.hospital.name === null ? "-" : cor.hospitalRequirement.hospital.name,
                    amount: cor.donationAmount === null ? "-" : cor.donationAmount
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
                            All Donation Details
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