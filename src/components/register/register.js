import React, { Component, Fragment } from 'react';

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
} from 'reactstrap'; import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import common from "../../common/common";

/*
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const nameRegex = RegExp(/^[a-zA-Z]+$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}*/

export default class register extends Component {
  constructor() {
    super();
    this.state = {
      Form: {
        name: "",
        email: "",
        password: ""
      },
      FormErrors: {
        name: null,
        email: null,
        password: null
      }
    };
  }

    validateNumber = evt => {
      var theEvent = evt || window.event;
  
      // Handle paste
      if (theEvent.type === "paste") {
        key = theEvent.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    };

  onChangehandler = (event) => {
    event.preventDefault();
    const { name, value, checked } = event.target;
    const { Form, FormErrors } = this.state;
  

    this.setState({ Form}, () => 
    {

      if (!Object.keys(FormErrors).includes(name)) return;
      let FormErrorsObj = {};
      if (name === "password")
      {
        let refValue = this.state.Form[
          name === "password" 
        ];
        const errorMsg = this.validateField(name, value, refValue);
        FormErrorsObj = { ...FormErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          FormErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.Form["language"] : value
        );
        FormErrorsObj = { ...FormErrors, [name]: errorMsg };
      }
      this.setState({ FormErrors: FormErrorsObj });
    });
  };
  



  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value)
       errorMsg = "Please enter Name.";
       break;
      case "email":
        if (!value)
         errorMsg = "Please enter Email.";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = "Please enter valid Email.";
        break;
      
      
      case "password":
        if (!value) errorMsg = "Please enter password.";
        
         
 
      let refValue=8
      if (refValue && value.length !== refValue)
        errorMsg = "Password at least 10 character";

        break;
        default:
        break;
    }
    return errorMsg;
  };


  validateForm = (Form,FormErrors, validateFunc) => {
    const errorObj = {};
   /*
    Object.keys(FormErrors).map(x => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });*/
    Object.keys(FormErrors).map(x => {
  let refValue=null;
      if(x==="paswsword")
      {
        refValue = Form[x === "password"];
      }
      const msg = validateFunc(x, Form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };
 




  onSignInHandler = () => {
  
      const { Form, FormErrors } = this.state;
      const errorObj = this.validateForm(Form, FormErrors, this.validateField);
      if (Object.keys(errorObj).length !== 0) {
        this.setState({ FormErrors: { ...FormErrors, ...errorObj } });
        return false;
      }
      console.log("Data: ", Form);
    };




  render() {
    let role = localStorage.getItem("role");
    let isLoggedIn = localStorage.getItem("IsLoggedIn")
    if (!role && !isLoggedIn) {

      return (
        <Fragment>
          <br />
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
                  <h1 className="text-center">Register</h1>
                  <Form className="containers">
                    <FormGroup>
                      <Label htmlFor="exampleEmail">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="exampleName"
                        placeholder="please enter the name"
                        value={Form.username}
                        onChange={this.onChangehandler}
                        onBlur={this.onChangehandler}
                      />
                      {this.state.FormErrors.name && (
                        <span className="err"style={{ color: "red" }}>{this.state.FormErrors.name}</span>
                      )}

                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="please enter your email"
                        value={Form.email}
                        onChange={this.onChangehandler}
                        onBlur={this.onChangehandler}
                      />
                      {this.state.FormErrors.email && (
                        <span className="err"style={{ color: "red" }}>{this.state.FormErrors.email}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="please enter the password"
                        value={Form.password}
                        onChange={this.onChangehandler}
                        onBlur={this.onChangehandler}
                      />
                      {this.state.FormErrors.password && (
                        <span className="err"style={{ color: "red" }}>{this.state.FormErrors.password}</span>
                      )}
                    </FormGroup>
                    <p className="text-danger">{this.state.errMsg}</p>
                    <center>
                    <Button className="m-2" color="second" onClick={this.onSignInHandler}>
                      sign up
      </Button>
      </center>
                  </Form>
                  <center>
                  <Row>
                    <Col md="4"></Col>
                   
                    <Button color="link" className="m-2 btn-link-warning">
                      <span><Link to="/sign-in">back to  login</Link></span>
                    </Button>
                   
                  </Row>
                  </center>
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
