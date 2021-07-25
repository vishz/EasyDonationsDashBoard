import React, { Component } from 'react';
import { MDBDataTable, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import { Form, Button, Input } from "semantic-ui-react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import axios from '../../../axios/axios_public';
import { Button as SementicBtn, Icon } from "semantic-ui-react";
import swal from "sweetalert";
import are_you_sure_icon from "../../../assets//question.svg";
import './styles.css'
import * as common from '../../../const/commonFunc'

class App extends Component {
    state = {
        data: [
            {
                "id": "60f012ae037f82358054558f",
                "requirementDescription": "abc",
                "quantity": "10",
                "requirementItem": "bed",
                "estimatedCost": "50 000/=",
                "brand": "abc",
                "adminApproval": 0,
                "donationStatus": 0,
                "hospital": {
                    "id": "60eafdf57dd9a67c4231e7ed",
                    "name": "kavishi",
                    "userName": "kavishi3",
                    "address": "abc",
                    "email": "abc@gmail.com",
                    "mobileNumber": "0912234254",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60eafb59d2c78d35842c9a95",
                        "categoryName": "GOVERNMENT"
                    }
                }
            },
            {
                "id": "60f012ae037f82358054558f",
                "requirementDescription": "abc",
                "quantity": "10",
                "requirementItem": "bed",
                "estimatedCost": "50 000/=",
                "brand": "abc",
                "adminApproval": 1,
                "donationStatus": 1,
                "hospital": {
                    "id": "60eafdf57dd9a67c4231e7ed",
                    "name": "kavishi",
                    "userName": "kavishi3",
                    "address": "abc",
                    "email": "abc@gmail.com",
                    "mobileNumber": "0912234254",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60eafb59d2c78d35842c9a95",
                        "categoryName": "GOVERNMENT"
                    }
                }
            },
            {
                "id": "60f012ae037f82358054558f",
                "requirementDescription": "abc",
                "quantity": "10",
                "requirementItem": "bed",
                "estimatedCost": "50 000/=",
                "brand": "abc",
                "adminApproval": 2,
                "donationStatus": 0,
                "hospital": {
                    "id": "60eafdf57dd9a67c4231e7ed",
                    "name": "kavishi",
                    "userName": "kavishi3",
                    "address": "abc",
                    "email": "abc@gmail.com",
                    "mobileNumber": "0912234254",
                    "password": "123",
                    "hospitalCategory": {
                        "id": "60eafb59d2c78d35842c9a95",
                        "categoryName": "GOVERNMENT"
                    }
                }
            }
        ],
        donationColumns: [
            {
                label: 'Requirement Description',
                field: 'requirementDescription',
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
                label: 'Hospital Name',
                field: 'hospitalName',
                sort: 'asc '
            },
            
            // {
            //     label: 'Donation Status',
            //     field: 'donationStatus',
            //     sort: 'asc ',
            //     minWidth: '200px'
            // },
            {
                label: 'Admin Approval',
                field: 'adminApproval',
                sort: 'asc ',
                minWidth: '200px'
            },

            {
                label: 'Submit',
                field: 'changestatus',
                sort: 'asc ',
                minWidth: '200px'
            },
            // {
            //     label: 'Action',
            //     field: 'action',
            //     sort: 'asc ',
            //     minWidth: '200px'
            // }
        ],
        ismodal: false,
        updateObj: {},
        pricePerItem: "",
        qty: "",
        vendorName: ""
    }

    componentDidMount() {
        this.getAllVendorDetails();
    }

    getAllVendorDetails = async () => {
        await axios.post("vendor/view/requirements")
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

    warningAlert = (obj, status) => {
        swal({
            title: status === "SUBMIT" ? "Do you want to submit the hospital ? " : "Do you want to delete the hospital ",
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
                        if (status === "SUBMIT") {
                            this.submitVendor(obj, status)
                        } else if (status === "DELETE") {
                            this.deleteHospital(obj, status);
                        }

                        break;

                    default:
                }
            });
    }

    submitVendor = async () => {
        let obj = this.state.updateObj;
        const data = {
            "requirementId": obj.id,
            "pricePerOneItem": this.state.pricePerItem,
            "quantity": this.state.qty,
            "vendorUserName": this.state.vendorName
        }
        await axios.post("vendor/submit/vendorBudget", data)
            .then(async response => {
                if (response.data.success) {
                    common.notifyMessage("successfully submitted", 2, 3);
                    this.setState({
                        ismodal: false,
                    })
                    this.getAllVendorDetails();
                } else {
                    common.notifyMessage(response.data.message, 0, 3);
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


    deleteHospital = async (obj, status) => {
        const data = {
            "id": obj.id
        }
        await axios.post("hospital/delete/requirement", data)
            .then(async response => {
                if (response.data.success) {

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

    updateHandler = async (obj) => {
        await this.setState({
            ismodal: true,
            updateObj: obj,
        })
    }

    updateDetailsHandler = async () => {
        let obj = this.state.updateObj;
        const data = {
            "id": obj.id,
            "requirementDescription": this.state.desc === "" ? this.state.updateObj.requirementDescription : this.state.desc,
            "requirementItem": this.state.item === "" ? this.state.updateObj.requirementItem : this.state.item,
            "quantity": this.state.qty === "" ? this.state.updateObj.quantity : this.state.qty,
            "estimatedCost": this.state.cost === "" ? this.state.updateObj.estimatedCost : this.state.cost,
            "brand": this.state.brand === "" ? this.state.updateObj.brand : this.state.brand
        }

        await axios.put("hospital/update/requirement", data)
            .then(async response => {
                if (response.data.success) {

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
                this.setState({
                    ismodal: false,
                    updateObj: {}
                })
            });
    }

    handleChange = name => event => {
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    render() {
        let rows = [];
        let all_donations = this.state.data;
        if (all_donations.length !== 0) {
            all_donations.map((cor, index) => {
                const obj = {
                    requirementDescription: cor.requirementDescription === null ? "-" : cor.requirementDescription,
                    requirementItem: cor.requirementItem === null ? "-" : cor.requirementItem,
                    quantity: cor.quantity === null ? "-" : cor.quantity,
                    estimatedCost: cor.estimatedCost === null ? "-" : cor.estimatedCost,
                    brand: cor.brand === null ? "-" : cor.brand,
                    hospitalName: cor.hospital.name === null ? "-" : cor.hospital.name,
                    // donationStatus: cor.donationStatus === 1 ? "Close" : cor.donationStatus === 0 ? "Pending" : "-",
                    adminApproval: cor.adminApproval === 0 ? "Pending " : cor.adminApproval === 1 ? "Rejected" : cor.adminApproval === 2 ? "approved" : "-",
                    changestatus: <Row style={{ padding: '0px', margin: '0px' }}>
                        <Col sm={6} style={{ padding: '0px' }}>
                            <SementicBtn key={index} style={{ background: '#2abd1a', color: 'white', width: '80px', height: '30px', fontSize: '10px' }}
                                onClick={() => this.updateHandler(cor)}
                            >submit</SementicBtn>
                        </Col>
                    </Row>,
                    // action:
                    //     < Row style={{ padding: '0px', margin: '0px' }
                    //     }>
                    //         <Col sm={6} style={{ padding: '0px' }}>
                    //             <SementicBtn circular icon='trash' className={"more-update btn-delete"}
                    //                 onClick={() => this.warningAlert(cor, "DELETE")}
                    //             />
                    //         </Col>
                    //         <Col sm={6} style={{ padding: '0px' }}>
                    //             <SementicBtn circular icon='edit' className={"more-update btn-update"}
                    //                 onClick={() => this.updateHandler(cor)}
                    //             />
                    //         </Col>
                    //     </Row >
                };
                rows.push(obj)
            })
        }

        let columns = this.state.donationColumns;
        let table_data = { columns, rows };
        return (
            <div>
                {/* <Row>
                    <Col lg="11"></Col>
                    <Col lg="1" >
                        <SementicBtn style={{ background: '#2abd1a', color: 'white', width: '80px', height: '30px', fontSize: '10px' }}
                            onClick={() => this.updateHandler()}
                        >submit</SementicBtn>
                    </Col>
                </Row> */}
                {/* <br /> */}
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardHeader>
                                All Vendors Details
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

                <MDBModal isOpen={this.state.ismodal} toggle={this.toggle} size="md">
                    <MDBModalHeader className={"title"} toggle={() => {
                        this.setState({
                            ismodal: false
                        })
                    }}>
                        Submit Vendor Details
                    </MDBModalHeader>
                    <MDBModalBody>
                        <Row style={{ padding: '10px' }}>
                            <Col lg={6}>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            required
                                            tagText={"Branch Name"}
                                            placeholder={"Price Per Item"}
                                            // defaultValue={this.state.updateObj.requirementDescription}
                                            control={Input}
                                            onChange={this.handleChange('pricePerItem')}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={6}>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            required
                                            tagText={"Branch Name"}
                                            placeholder={"Quantity"}
                                            // defaultValue={this.state.updateObj.quantity}
                                            control={Input}
                                            onChange={this.handleChange('qty')}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row style={{ padding: '10px' }}>

                            <Col lg={6}>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            required
                                            tagText={"Branch Address"}
                                            placeholder={"Vendor Name"}
                                            // defaultValue={this.state.updateObj.estimatedCost}
                                            control={Input}
                                            onChange={this.handleChange('vendorName')}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4}></Col>
                            <Col lg={6} className={"text-align-path"} style={{ marginBottom: '5px' }}>
                                <Button className="px-5" onClick={this.submitVendor}>Submit</Button>
                            </Col>
                            <Col lg={3}></Col>
                        </Row>
                    </MDBModalBody>
                </MDBModal>

            </div>

        );
    }
}

export default App;