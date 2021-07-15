import React, { Component, Fragment } from 'react';
import swal from 'sweetalert';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import common from "../../common/common";
import './loginForm.css'




export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {

      setError: '',
      name: 'React',
      fields: {

        email: "",
        password: ""
      },
      errors: {

        email: '',
        password: '',
      }
    };
  }


  validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i)
        ) {
          return "Enter a valid email address";
        }

        else {  
          return "";
        }
      case "password":
        if (!value) {
          return "Password is Required";
        }
        else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        }

        else {
          return "";
        }
      default: {
        return "";
      }
    }
  }

  handleChange = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    this.setState({ setError: '' })
    const { fields, error } = this.state;
    // console.log(errors);
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.email && fields.password) {
      axios.post(`${common.api_url}login`, {
        email: fields.email,
        password: fields.password
      }
      ).then((response) => {
        if (response && response.status == 200 && response.data.status === true) {
          localStorage.setItem("IsLoggedIn", true);
          localStorage.setItem("key", JSON.stringify(response.data.data.token));
          localStorage.setItem("data", JSON.stringify(response.data.data.user));
          localStorage.setItem("role", JSON.stringify(response.data.data.user.role))
          if (response.data.data.user.role == common.role.Admin) {
            this.props.history.push('/DashboardDefault');
          }
          else {
            if (response.data.data.user.role == common.role.User) {

              this.props.history.push('/hostdashboard');
            }
            else {
              //alert("you have not authorize to go the dashboard")
              this.setState({ setError: response.data.message })
            }
          }
        } else {
          console.log(response.data.message);
        }
      }, error => {
        if (error.response.data.status === false) {
          this.setState({ setError: error.response.data.message })
        }
      }

      ).catch((error) => {
        // swal("you are not added in records");
        //  this.setState({setError:error}) 
      });

    }

  };


  render() {
    let role = localStorage.getItem("role");
    let isLoggedIn = localStorage.getItem("IsLoggedIn")
    if (!role && !isLoggedIn) {

      return (
        <Fragment >
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col md="4"></Col>
            <Col md="4">

              <Card className="card-box mb-5">
                <CardBody>
                  <h1 className="text-center">Sign in</h1>
                <center>
                  {this.state.setError != '' ? (
                    <Label style={{ color: "red" }}>
                      {this.state.setError}
                    </Label>
                  ) : null}
                  </center>
                  <Form className="containers">
                    <FormGroup>
                      <Label htmlFor="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="please enter the email"
                        value={this.state.fields.email}
                        onChange={event => this.handleChange(event)}
                      />
                      {this.state.errors.email && (
                        <span className="err" style={{ color: "red" }}>{this.state.errors.email}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="please enter the password"
                        value={this.state.fields.password}
                        onChange={event => this.handleChange(event)} />
                      {this.state.errors.password && (
                        <span className="err" style={{ color: "red" }}>{this.state.errors.password}</span>
                      )}
                    </FormGroup>
                    <p className="text-danger">{this.state.errMsg}</p>

                    <center>
                      <Button className="m-2" color="second" onClick={this.handleSubmit}>
                        Sign In
                    </Button>
                    </center>
                  </Form>
                  <Row>

                    <Col md="5"></Col>
                    <center>
                      <Button color="link" className="m-2 btn-link-warning">
                        <span><Link to="/register">Register Here</Link></span>
                      </Button>
                    </center>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>



        </Fragment>
      );
    } else {
      return <Redirect to='/DashboardDefault' />
    }
  }
}
