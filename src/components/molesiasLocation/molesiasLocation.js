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
import $ from 'jquery';
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

function Location(props) {

  const [indexes, setIndexes] = useState([]);

  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);


  const [list, setList] = useState([]);

  //add form for Pub
  const [loader, setLoader] = useState(true);

  
  const [getpolciyInformation, setpolciyInformationn] = useState("");
  const [LocationInformation, setLocationInformation] = useState("");
  const [polciyInformation, setPlaceInformation] = useState("");

  

  const [ids, setids] = useState("");
  const [Canclelation, setCanclelation] = useState("");
  const [PolicyError, setPolicyError] = useState('');
  

  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState([]);
  const [country, setCountry] = useState([]);
  const [locationError, setLocationError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imagesError, setImagesError] = useState("");
  const [Countries, setCountries] = useState("");

  //const [country, setCountry] = useState([]);
  const emptySetVariable = () => {
    setPolicyError('');
    setTitleError('');
    setDescriptionError('');
    setLocationError('');
    setImagesError('');
  }

  //select image
  const readURI= (e) =>{
    if (e.target.files) {
      //setImages(e.target.files[0]);
        let filesAmount = e.target.files.length;
        let i;
        for (i = 0; i < filesAmount; i++) {
          console.log(e.target.files[i]);
           images.push(e.target.files[i]);
         setImages(images);
        }
    }
  }
  const handleFileChange= (e) => {
    if (e.target.files) {
      readURI(e)
   }
  }
   
  const handleSubmit = (evt) => {
    evt.preventDefault();
    emptySetVariable();
    if (title == '') {
      setTitleError('Title Is required');
      return;
        }
    if (location == '') {
      setLocationError('Location Is required');
      return;
        }
    if (images == '') {
      setImagesError('Images Is required');
      return;
        }
    if (description == '') {
      setDescriptionError('Description Is required');
      return;
        }
        // this.postData();
        const formData = new FormData();
        formData.append('location',location);
        formData.append('description',description);
        formData.append('title',title);
        formData.append('country',Countries);
        for(var a = 0 ; a <images.length; a++)
        {
          formData.append( 
            'filename[]',images[a], 
          );  
        }

        let token = localStorage.getItem("key");
        var token1 = token.replace(/"/, '');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token1}`
          }
        };

        axios.post(`${common.api_url}store-image-location`, formData,config)
            .then(response => {
              toggle3(false)
              setImages([])
              getData();
              swal("Location Add Successfully!");
        })
        .catch(err => {
          console.log(err);
        })
  }
  


  useEffect(() => {
    getData();
    getCountries();
  }, [])
  const getCountries = () => {

    axios.get(`${common.api_url}countries`).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setCountry(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const getData = () => {
    let token = localStorage.getItem("key");
    if (token) {
      var token1 = token.replace(/"/g, "");
        } else {
      return <Redirect to='/' />
    }
    const config = {
      headers: {
        'Content-Type': 'applicatio/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}get-image-location`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
         setList(jsonPrser.data.data)
         setLoader(false)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const removeData = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.delete(`${common.api_url}dealPolicy/${ids}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Location deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
        }
      }).catch(err => {
        console.log(err);
      })
  }
   const viewData = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}dealPolicy/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setPlaceInformation(jsonPrser.data.data)
        toggle2(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });

  }
  const viewForDeleteData = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}dealPolicy/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setPlaceInformation(jsonPrser.data.data)
        setids(jsonPrser.data.data.id)
        toggle4(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });
  }
  
  const GetLocationById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}dealPolicy/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setpolciyInformationn(jsonPrser.data.data)
        setCanclelation(jsonPrser.data.data.description);
        setids(jsonPrser.data.data.id)
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  const UpdateLocationById = (id) => {

    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    console.log(token);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };

    let payload = {
      description: Canclelation,
    //  policy_category_id : category
    }


    axios.put(`${common.api_url}dealPolicy/${ids}`, payload, config)
      .then(res => {
        if (res) {
          toggle5(false);
          getData()
          console.log(id);
          swal("Location Updated Successfully!", "success");
          return res.data.data;
        }
      }).catch(err => {
        console.log(err);
      })
  }


  const token = localStorage.getItem("token")

  let role = localStorage.getItem("role");
  let isLoggedIn = localStorage.getItem("IsLoggedIn")
  if (role && isLoggedIn) {
    if (loader == true) {
      return (
        <Fragment>
          <LoaderClass className="loader_position" />
        </Fragment>
      )
    } else {
  return (
    <Fragment>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Location</h1>
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                   Add Location
                 </Button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                      </tr>
                      <tr>
                        <th>Sl</th>
                        <th>Action</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Country Name</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    {list.filter((val) => {
                      if (search && searchbyName == "") {
                        return val;
                      } else
                      {
                        return val;
                      }
                    }).map((data, index) =>
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>  <FontAwesomeIcon
                            icon={['far', 'edit']}
                            className="font-size-xxl"
                            placement="top"
                            style={{ fontSize: 15, color: '#0AEE23' }}
                            onClick={() => GetLocationById(data.id)}
                            id="tooltipforedit"
                            outline={data.id} />
                            <UncontrolledTooltip
                              placement="top"
                              container="body"
                              target="tooltipforedit">
                              edit
                        </UncontrolledTooltip>&nbsp; &nbsp;
                          <FontAwesomeIcon
                              icon={['far', 'trash-alt']}
                              className="font-size-xxl"
                              placement="top"
                              style={{ fontSize: 15, color: '#EE180A ' }}
                              id="tooltipfordelete"
                              value={data.id}
                              onClick={() => viewForDeleteData(data.id)}
                              outline={data.id}
                            />
                            <UncontrolledTooltip
                              placement="top"
                              container="body"
                              target="tooltipfordelete">
                              delete
                        </UncontrolledTooltip>&nbsp; &nbsp;
                          <FontAwesomeIcon
                              icon={['far', 'eye']}
                              className="font-size-xxl"
                              placement="top"
                              style={{ fontSize: 15, color: '#0710CD ' }}
                              id="tooltipforview"
                              outline={data.id} onClick={() => viewData(data.id)} /> <UncontrolledTooltip
                                placement="top"
                                container="body"
                                target="tooltipforview">
                              view
                         </UncontrolledTooltip></td>
                          <td>{data.title}</td> 
                          <td>{data.location}</td> 
                          <td >{data.country}</td>
                          <td><img src={"http://codestarc.com/client/tourtravelimages/"+data.image[0]} style={{width:"100px",height:"100px"}}/></td>             
                          {/* <td>{typeof(Object.entries(data.image))}</td> */}
                          {/* edit section for Location */}
                          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                            <ModalHeader toggle={toggle5}>Edit policy</ModalHeader>
                            <ModalBody>
                           <Form onClick={() => UpdateLocationById(data.id)}>
                                <FormGroup row>
                                  <Label htmlFor="personCapacity" sm={1}>Deal Cancellation Policy</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      id="placeName"
                                      name="canclation"
                                      defaultValue={polciyInformation.description}
                                      value={Canclelation}
                                      onChange={e => setCanclelation(e.target.value)}

                                    />
                                  </Col>
                              </FormGroup>
                             </Form>
                              </ModalBody>
                             <ModalFooter>
                              <Button color="primary" className="ml-auto" onClick={() => UpdateLocationById(data.id)}>
                                Update
                           </Button>
                            </ModalFooter>
                          </Modal>
                        {/* edit section  finish here */}
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal className="custom_model_size" zIndex={2000} centered scrollable isOpen={modal2} size="lg" toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Information of Location</ModalHeader>
        <ModalBody className="text-center">
          <Form encType="multipart/form-data">
            <FormGroup row>
              <Label className='view_head' htmlFor="personCapacity" sm={1}>Deal Cancellation Policy:</Label>
              <Col sm={9}>
                {polciyInformation.description ?
                  polciyInformation.description
                  : ('Null')}
              </Col>

            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle2}>
            Close
            </Button>{' '}
        </ModalFooter>
      </Modal>
      <Modal zIndex={2000} centered size="sm" isOpen={modal4} toggle={toggle4}>
        <ModalHeader toggle={toggle4}>Delete Location</ModalHeader>
        <ModalBody>
          <p>Are you sure Want To Delete {polciyInformation.description}?
                </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle4}>
            Close
                </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={() => removeData(polciyInformation.id)}>
            Delete
              </Button>
        </ModalFooter>
      </Modal>

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
                  id="filename"
                  name="images"
                  multiple
                  onChange={handleFileChange}
                />
                {imagesError != '' ? (
                  <Label style={{ color: "red" }}>
                    {imagesError}
                  </Label>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label htmlFor="countries" sm={1}>
                Countries
              </Label>
              <Col sm={3}>
                <CustomInput
                  type="select"
                  id="countries_1"
                  name="customSect"
                  value={country.id}
                  onChange={e => setCountries(e.target.value)}
                  >
                  <option >Select Country</option>
                  {country.map((data, index) =>
                    <option key={index} value={data.id}>{data.name}</option>
                  )};
                </CustomInput>
              </Col>
              <Label sm={1}>Description</Label>
              <Col sm={6}>
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
} else {
  return <Redirect to='/' />
}

}

export default Location;
