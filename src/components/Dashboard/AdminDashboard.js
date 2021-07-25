import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "../sidebar/sidebar";
import MaterialTitlePanel from "../sidebar/titlepanel";
import SidebarContent from "../sidebar/sidebarcontent";
import { MDBDataTable } from "mdbreact";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const styles = {
    contentHeaderMenuLink: {
        textDecoration: "none",
        color: "white",
        padding: 8
    },
    content: {
        padding: "16px"
    }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            docked: mql.matches,
            open: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetOpen(open) {
        this.setState({ open });
    }

    mediaQueryChanged() {
        this.setState({
            docked: mql.matches,
            open: false
        });
    }

    toggleOpen(ev) {
        this.setState({ open: !this.state.open });

        if (ev) {
            ev.preventDefault();
        }
    }

    render() {
        const sidebar = <SidebarContent />;

        const contentHeader = (
            <span>
                {!this.state.docked && (
                    <a
                        onClick={this.toggleOpen}
                        href="#"
                        style={styles.contentHeaderMenuLink}
                    >
                        =
                    </a>
                )}
                <span> Admin Dashboard</span>
            </span>
        );

        const sidebarProps = {
            sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen
        };

        return (
            <Sidebar {...sidebarProps}>
                {/* <MaterialTitlePanel title={contentHeader}> */}
                <div style={styles.content}>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardHeader>
                                    All Donation Details
                                </CardHeader>
                                <CardBody>
                                    <MDBDataTable
                                        id={"all-corporate-table"}
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
                                    // data={table_data} 
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                {/* </MaterialTitlePanel> */}
            </Sidebar>
        );
    }
}

export default App;