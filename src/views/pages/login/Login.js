import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import img from '../../../assets/login.png'
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import { Input } from "semantic-ui-react";
import './Login.css';
import axios from '../../../axios/axios_public';
import cookie from 'react-cookies';
import * as Validator from '../../../util/Validator';
import { Select, Radio } from 'antd';
import * as common from '../../../const/commonFunc'



export default class Login extends Component {

  state = {
    username: "",
    password: "",
    userrole: "ADMIN",
    logindata: [],
    usernameerror: "",
    passworderror: ""
  }

  constructor(props) {
    super(props)
  }

  loginhandler = async () => {
    cookie.save('USERROLE', this.state.userrole, { path: '/' });
    cookie.save('USERNAME', this.state.username.trim(), { path: '/' });
    const { username, password, userrole } = this.state;
    const obj = {
      "userName": username.trim(),
      "password": password.trim(),
      "role": userrole
    }
    await axios.post("signIn", obj)
      .then(async response => {
        if (response.data.success) {
          this.checkUserRole();
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

  checkUserRole = () => {
    if (this.state.userrole === "ADMIN") {
      this.props.history.push({
        pathname: "/all-donations",
      });
    } else if (this.state.userrole === "HOSPITAL") {
      this.props.history.push({
        pathname: "/hospital-dashboard",
      });
    } else if (this.state.userrole === "VENDOR") {
      this.props.history.push({
        pathname: "/vendor-dashboard",
      });
    }
  }

  handleChange = (name, length) => event => {
    let value = event.target.value;

    if (name === "username") {
      this.setState({
        [name]: value
      })

    } else if (name === "password") {
      this.setState({
        [name]: value
      })

    }
  };

  testValidator = () => {
    const validationUsername = Validator.textFieldValidator(this.state.username, this.state.username.length);
    const validationpassword = Validator.textFieldValidator(this.state.password, this.state.password.length);

    if (validationUsername === false) {
      common.notifyMessage("Username can't be empty", 0, 3);
      return false
    } else {
      if (validationpassword === false) {
        common.notifyMessage("Password can't be empty", 0, 3);
        return false
      } else {
        return true
      }
    }

  }


  checkValidation = () => {
    let formvalidation = this.testValidator();
    if (formvalidation) {
      this.loginhandler();
    }
  }

  handleSizeChange = async e => {
    await this.setState({
      userrole: e.target.value
    })
  }



  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center animated bounceInLeft login-background">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup style={{ boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)' }}>
                <Card className="p-4" style={{ border: 'none' }}>

                  {/* {
                    !this.state.isForgotPassword ? */}
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Input
                      // ref={this.inputRef_username}
                      focus={true}
                      style={txtStyle}
                      className={"login-username"}
                      icon='user'
                      iconPosition='left'
                      label={{ tag: true, content: 'Username' }}
                      labelPosition='right'
                      placeholder='Enter Username'
                      onChange={this.handleChange("username")}
                    />
                    <Input
                      className={"login-password"}
                      style={txtStyle}
                      icon='lock'
                      iconPosition='left'
                      type={"password"}
                      label={{ tag: true, content: 'Password' }}
                      labelPosition='right'
                      placeholder='Enter Password'
                      onChange={this.handleChange("password")}
                    />
                    <Radio.Group
                      value={this.state.userrole}
                      onChange={this.handleSizeChange}
                    // onChange={handleSizeChange}
                    >
                      <Radio.Button value="ADMIN">Admin</Radio.Button>
                      <Radio.Button value="HOSPITAL">Hospital</Radio.Button>
                      <Radio.Button value="VENDOR">Vendor</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Row>
                      <Col xs="6">
                        <Button onClick={() => { this.checkValidation() }} className="btn">Login</Button>
                      </Col>

                    </Row>
                  </CardBody>

                </Card>
                <Card className="text-white  py-5 d-md-down-none login-right-side"
                  style={{ border: 'none', width: '44%', height: '400px', border: 'none' }}>
                  <img src={img} style={{ width: '150%', height: '180%', objectFit: 'contain' }} alt={"."} />
                </Card>
              </CardGroup>
            </Col>

          </Row>
        </Container>

      </div>
    )
  }
}

let txtStyle = {
  marginBottom: '10px',
  height: '45px',
  width: '100%'
};


