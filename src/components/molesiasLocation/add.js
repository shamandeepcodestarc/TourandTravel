import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './molesiasLocation.css'
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { CheckboxToggle } from 'react-rainbow-components';
import LoaderClass from '../../loader/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleReactCalendar from 'simple-react-calendar'
import styled from 'styled-components';
import {
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Container,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  UncontrolledAlert,
  UncontrolledTooltip,
  Alert,
  ButtonToggle,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';

function Add() {
  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);
  //add form for Pub
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState( []);
  const [description, setDescription] = useState([]);
  const [locationError, setLocationError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imagesError, setImagesError] = useState("");
  //const [country, setCountry] = useState([]);
  const emptySetVariable = () => {
    setTitleError('');
    setDescriptionError('');
    setLocationError('');
    setImagesError('');
  }
  const HandleImage=(e)=>{
    [...e.target.files].forEach(file => {
      console.log("file >>> ", file)

           setImages([
              ...images,
              {
                  data: file,
                  url: URL.createObjectURL(file)
              }
          ])

          console.log("pictures >> ", images)
      })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    emptySetVariable();
    // [...evt.target.files].forEach(file => {
    //        setImages([
    //           ...images,
    //           {
    //               data: file,
    //               url: URL.createObjectURL(file)
    //           }
    //       ])
    //       console.log("pictures >> ", images)
    //   })
    const tempArr = [];
 
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
    console.log(token);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
  let payload = {
      description: description,
      image: images,
      location:location,
      title:title
      //policy_category_id:category
    }

  axios.post(`${common.api_url}store-image-location`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
          swal("Location Added Successfully!", "success");
          return res.data.data;
          // history.push('/canclation', roomModel)
        }
      }).catch(err => {
        console.log(err);
      })
  }



  
  const token = localStorage.getItem("token")

  let role = localStorage.getItem("role");
  let isLoggedIn = localStorage.getItem("IsLoggedIn")
 
  return (
    <Fragment>
    

      <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
        <ModalHeader toggle={toggle3}>Add Location</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label htmlFor="personCapacity" sm={1}>Title</Label>
              <Col sm={3}>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                {titleError != '' ? (
                  <Label style={{ color: "red" }}>
                    {titleError}
                  </Label>
                ) : null}
              </Col>
              <Label htmlFor="personCapacity" sm={1}>Location</Label>
              <Col sm={3}>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
                {locationError != '' ? (
                  <Label style={{ color: "red" }}>
                    {locationError}
                  </Label>
                ) : null}
              </Col>
              <Label htmlFor="personCapacity" sm={1}>Images</Label>
              <Col sm={3}>
                <Input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  value={images}
                  onChange={HandleImage}
                />
                {imagesError != '' ? (
                  <Label style={{ color: "red" }}>
                    {imagesError}
                  </Label>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={1}>Description</Label>
              <Col sm={7}>
              <Input
                  type="textarea"
                  id="description"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                {descriptionError != '' ? (
                  <Label style={{ color: "red" }}>
                    {descriptionError}
                  </Label>
                ) : null}
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle3}>
            Close
            </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={handleSubmit}>
            Add
            </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}


export default Add;
