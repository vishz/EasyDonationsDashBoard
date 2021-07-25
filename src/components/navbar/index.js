import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col, NavLink,
} from "reactstrap";

import * as config from "../../const/config";
import LogoImg from '../../assets/logo.jpeg';
import './style.scss'
import {withRouter} from "react-router";
class App extends React.Component {

    render() {
        return (
            <>
                <header className="header-global d-print-none">

                    <Navbar
                        className="navbar-main navbar-transparent navbar-dark headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container id={"header-container"}>
                            <UncontrolledCollapse navbar toggler="#navbar_global">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <img
                                                className={"nvbr-logo"} alt="..." src={LogoImg}
                                            />
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span/>
                                                <span/>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                </Nav>

                                <Nav className="align-items-lg-center ml-lg-auto" navbar>

                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"events")}>
                                        <p className={this.props.current === 1 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Home </p>
                                    </NavItem>

                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"donation-requirements")}>
                                        <p className={this.props.current === 2 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Donation Requirements </p>
                                    </NavItem>
                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"sign-up")}>
                                        <p className={this.props.current === 3 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Sign-Up </p>
                                    </NavItem>
                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"login")}>
                                        <p className={this.props.current === 4 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Login </p>
                                    </NavItem>
                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"contact-us")}>
                                        <p className={this.props.current === 5 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Contact Us </p>
                                    </NavItem>

                                    {/* tempory */}
                                    <NavItem onClick={() => this.props.history.push(config.BASE_ROUTE+"admin-dashboard")}>
                                        <p className={this.props.current === 6 ? "nvbr-h-navlink-active" : "nvbr-h-navlink"}> Admin </p>
                                    </NavItem>

                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
    navigateHandler = (name) => {
        this.props.history.push(`${config.BASE_ROUTE}${name}`)
    }
}
export default withRouter(App);
