import React, { Component } from 'react';
import { MDBDataTable } from "mdbreact";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import axios from '../../../axios/axios_public';
import './styles.css'
import * as common from '../../../const/commonFunc'

class App extends Component {
    state = {
        budgetColumns: [
            {
                label: 'Requirement Item',
                field: 'requirementItem',
                sort: 'asc '
            },
            {
                label: 'Required Quantity',
                field: 'requiredQuantity',
                sort: 'asc '
            },
            {
                label: 'Hospital Name',
                field: 'hospitalName',
                sort: 'asc '
            },
            {
                label: 'Vendor Name',
                field: 'vendorName',
                sort: 'asc '
            },
            {
                label: 'Price Per One Item',
                field: 'pricePerOneItem',
                sort: 'asc '
            },
            {
                label: 'Supplying Quantity',
                field: 'supplyingQuantity',
                sort: 'asc '
            },

        ],
        data: [
            {
                "pricePerOneItem": "200",
                "adminApproval": 0,
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
                },
                "vendor": {
                    "id": "60f5373f4c2a2c3d8aaf7cb9",
                    "name": "Vendor4",
                    "userName": "Vendor4",
                    "address": "Ambalangoda",
                    "email": "kavishi@gmail.com",
                    "mobileNumber": "0912234425",
                    "password": "123",
                    "vendorCategory": {
                        "id": "60f534f753b137ea64d554e6",
                        "categoryName": "SUPERMARKET"
                    }
                },
                "quantity": "5"
            }
        ]
    }

    componentDidMount() {
        this.getAllBudgets();
    }

    getAllBudgets = async () => {
        await axios.post("admin/view/pendingBudgetDetails")
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
        let all_budgets = this.state.data;
        if (all_budgets.length !== 0) {
            all_budgets.map((cor, index) => {
                const obj = {
                    // donorName: cor.donor.name === null ? "-" : cor.donor.name,
                    requirementItem: cor.hospitalRequirement.requirementItem === null ? "-" : cor.hospitalRequirement.requirementItem,
                    requiredQuantity: cor.hospitalRequirement.quantity === null ? "-" : cor.hospitalRequirement.quantity,
                    hospitalName: cor.hospitalRequirement.hospital.name === null ? "-" : cor.hospitalRequirement.hospital.name,
                    vendorName: cor.vendor.name === null ? "-" : cor.vendor.name,
                    pricePerOneItem: cor.pricePerOneItem === null ? "-" : cor.pricePerOneItem,
                    supplyingQuantity: cor.quantity === null ? "-" : cor.quantity
                };
                rows.push(obj)
            })
        }

        let columns = this.state.budgetColumns;
        let table_data = { columns, rows };
        return (
            <Row>
                <Col lg="12">
                    <Card>
                        <CardHeader>
                            All Budget Details
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