import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoaderClass from '../../loader/loader'
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import ToggleSwitch from "./ToggleSwitch";
import {
  Table,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  InputGroupText,
  FormGroup,
  Input,
  Media,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  UncontrolledAlert,
  UncontrolledTooltip,
  Alert
} from 'reactstrap';
import './entertainment.css'

import bar1 from '../../assets/images/avatars/bar1.jpg';
import bar2 from '../../assets/images/avatars/bar2.jpg';
import bar3 from '../../assets/images/avatars/bar3.jpg';
import bar4 from '../../assets/images/avatars/bar4.jpg';


import club1 from '../../assets/images/avatars/club3.jpg';
import club2 from '../../assets/images/avatars/club2.jpg';
import club3 from '../../assets/images/avatars/club4.jpg';
import club4 from '../../assets/images/avatars/club5.jpg';


import pub1 from '../../assets/images/avatars/pub1.jpg';
import pub2 from '../../assets/images/avatars/pub2.jpg'
import pub3 from '../../assets/images/avatars/pub3.jpg';





function Entertainment(props) {


  const [isToggled, setIsToggled] = useState(false);

 // state = { enabled: false}
  //const { enabled } = this.state;




  const [list, setList] = useState([]);
  const [activityInformation, setActivityInformation] = useState("");

  // 
  /*
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [countries, setCountries] = useState("");
  const [nationality, setNationality] = useState("");
  const [town, setTown] = useState("");
  const [roadname, setRoadname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [countriesofResidence, setCountriesofResidence] = useState("");
  const [mobile, setMobile] = useState("");*/




  const [modal2, setModal2] = useState(false);
  const [loader, setLoader] = useState(true);


  const toggle2 = () => setModal2(!modal2);
 
  const onChangehandler = ({ enabled }) => {
   // const { only } = this.state;
    this.setState({ enabled });
  }
 
  /*
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
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
       name: firstname,
        phone: mobile,
        town: town,
        country_of_residence:countriesofResidence,
        country: countries,
        nationality: nationality,
        dob: dob,
        email: email,
        road_name: roadname,
        address: address
  
  
  
  
      }
      console.log(payload);
    
      axios.post(`${common.api_url}pbc`, payload, config)
        .then(res => {
          if (res.data.data) {
            toggle3(false)
            swal("User Added Successfully!", "success");
            getData();
            return res.data.data;
          }
        }).catch(err => {
          console.log(err);
        })
  
    }
  */

  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    let token = localStorage.getItem("key");
    if (token) {
      var token1 = token.replace(/"/g, "");
      console.log(token);
    } else {
      return <Redirect to='/' />
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}pbc`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonParser = JSON.parse(dataJson);
      if (jsonParser.status == 200) {
        setList(jsonParser.data.data)
        setLoader(false)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const categoryOption = [
    { label: 'PUB ', value: 1 },
    { label: 'CLUB', value: 2 },
    { label: 'BAR', value: 3 },
  ];

  const dayOption = [
    { label: 'SUNDAY ', value: 1 },
    { label: 'MONDAY', value: 2 },
    { label: 'TUESDAY', value: 3 },
    { label: 'WEDNESDAY ', value: 4 },
    { label: 'THURDAY', value: 5 },
    { label: 'FRIDAY', value: 6 },
    { label: 'SATURDAY ', value: 7 }
  ];


  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);
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
                <h1 className="m-0">Property</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                    Add Property
                    </Button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="card-box mb-5">
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Property Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Type</th>
                  <th className="text-center">Contact</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {list.map(data =>
                <tbody key={data.data}>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={club2} />
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {data.title}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <Badge color="success" className="h-auto py-0 px-3">
                        {common.status[data.status]}
                      </Badge>
                    </td>
                    <td className="text-center">
                      <Badge color="warning" className="h-auto py-0 px-3">
                        {data.category}
                      </Badge>
                    </td>
                    <td className="text-center">
                      <Badge color="success" className="h-auto py-0 px-3">
                        {data.phone_number}
                      </Badge>
                    </td>

                    <td className="text-center">
                      <td>  <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-xxl"
                        placement="top"
                        id="tooltipforedit"
                        /* onClick={() => GetPubById(data.id)}*/
                        outline />
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
                          id="tooltipfordelete"
                          value={data.id}
                          /*  onClick={() => viewForDeleteData(data.id)}*/
                          outline />
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
                          id="tooltipforview"
                          /*    onClick={() => viewData(data.id)}*/
                          outline /> <UncontrolledTooltip
                            placement="top"
                            container="body"
                            target="tooltipforview">
                          view
                     </UncontrolledTooltip></td>
                    </td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="p-3 d-flex justify-content-center">
            <Pagination className="pagination-primary">
              <PaginationItem disabled>
                <PaginationLink
                  first
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink
                  previous
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'chevron-left']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  1
              </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  2
              </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  3
              </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  4
              </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  5
              </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  next
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  last
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </CardBody>
      </Card>

      {/* model view */}
      <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>Add Pub/Bar/Club Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="Title" sm={1}>
                Place Name
              </Label>
              <Col sm={3}>
                <Input
                  type="text"
                  name="title"
                  id="Title"

                />
              </Col>
              <Label htmlFor="category" sm={1}>
                Category
                    </Label>
              <Col sm={3}>
                <CustomInput
                  type="select"
                  id="exampleCustomMutlipleSelect"
                  name="customSelect"
                >
                  <option >Select</option>
                  <option>PUB</option>
                  <option>CLUB</option>
                  <option>BAR</option>
                  <option>PUB&BAR</option>
                  <option>CLUB&BAR</option>
                  <option>PUB&CLUB</option>
                </CustomInput>
              </Col>
              <Label for="Description" sm={1}>
                Phone No
        </Label>
              <Col sm={3}>
                <Input
                  type="number"
                  name="title"
                  id="Title"

                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Title" sm={1}>
                Place  Address
        </Label>
              <Col sm={3}>
                <Input
                  type="text"
                  name="title"
                  id="Title"

                />
              </Col>
              <Label for="Title" sm={1}>
                Town
              </Label>
              <Col sm={3}>
                <Input
                  type="text"
                  name="title"
                  id="Title"

                />
              </Col>
              <Label for="Title" sm={1}>
                Short Description
              </Label>
              <Col sm={3}>
                <Input
                  type="textarea"
                  name="title"
                  id="Title"

                />

              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Title" sm={1}>
                Opening Hours
               </Label>
              <Col sm={3}>
                <Input
                  type="number"
                  name="title"
                  id="Title"

                />
              </Col>
              <Label for="Title" sm={1}>
                Closing Hours
              </Label>
              <Col sm={3}>
                <Input
                  type="number"
                  name="title"
                  id="Title"

                />
              </Col>

            </FormGroup>
            <br />
            <Card>
            <CardBody>
                <FormGroup row>
                  <label>do you have music?</label>
                  <Col sm={2}>
                  <div className="Entertainment">
                  <ToggleSwitch
                   //enabled={enabled}
                   onChange={onChangehandler}
                   

                  
              
                          //isToggled={isToggled}
                         // onToggle={() => setIsToggled(!isToggled)}
                          
                    />
                    </div>
                    </Col>
                </FormGroup> 
                <FormGroup row>
                  <label>do you have DJ?</label>
                  <Col sm={2}>
                  <div className="Entertainment">
                  <ToggleSwitch
                          // isToggled={isToggled}
                          // onToggle={() => setIsToggled(!isToggled)}
                       
                        
                  />
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="roomType">Do you have live music?</Label>
                  <Col sm={2}>
                  <div className="Entertainment">
                  <ToggleSwitch
                          // isToggled={isToggled}
                          // onToggle={() => setIsToggled(!isToggled)}
                          
                   />
                  </div>
                  </Col>
              </FormGroup>
              <FormGroup row>
                    <Label htmlFor="roomType">
                    Do you have a dance floor?
                    </Label>
                    <Col sm={2}>
                    <div className="Entertainment">
                    <ToggleSwitch
                         // isToggled={isToggled}
                         // onToggle={() => setIsToggled(!isToggled)}
                          //onChange={event => this.handleChange(event)}
                          
                          
                        />
                    </div>
                    </Col>
              </FormGroup>
            </CardBody>
            </Card>

               <br />

            <FormGroup row>
              <Label htmlFor="personCapacity" sm={3}>
                Which days do you have a DJ music?
                    </Label>
              <Col sm={3}>
                <ReactMultiSelectCheckboxes options={dayOption} />
              </Col>
              <Label htmlFor="hotelType" sm={3}>
                Which days do you have a DJ in house?
                    </Label>
              <Col sm={3}>
                <ReactMultiSelectCheckboxes options={dayOption} />
              </Col>
            </FormGroup>
            <h5>From what time to what time.......</h5>
            <FormGroup row>
              <Label htmlFor="hotelType" sm={2}>
                From</Label>
              <Col sm={4}>
                <CustomInput
                  className="mb-3"
                  type="date"
                  id="exampleCustomRadio4"
                  name="customRadio"
                  label="No"
                />
              </Col>
              <Label htmlFor="hotelType" sm={2}>
                To</Label>
              <Col sm={4}>
                <CustomInput
                  className="mb-3"
                  type="date"
                  id="exampleCustomRadio4"
                  name="customRadio"
                  label="No"
                />
              </Col>
            </FormGroup>
           
            <FormGroup row>
              <Label htmlFor="personCapacity" sm={3}>
              Do you have a food menu? 
                    </Label>
                    <Col sm={1}>
                  <div className="Entertainment">
                  <ToggleSwitch
                 // enable={enable}
                 // onchange={toggleActivityEnabled}
                          //isToggled={isToggled}
                         // onToggle={() => setIsToggled(!isToggled)}
                          
                    />
                    </div>
                    </Col>
            </FormGroup>

            <h5>What time is food served.......</h5>
            <FormGroup row>
              <Label htmlFor="hotelType" sm={2}>
                From</Label>
              <Col sm={4}>
                <CustomInput
                  className="mb-3"
                  type="date"
                  id="exampleCustomRadio4"
                  name="customRadio"
                  label="No"
                />
              </Col>
              <Label htmlFor="hotelType" sm={2}>
                To</Label>
              <Col sm={4}>
                <CustomInput
                  className="mb-3"
                  type="date"
                  id="exampleCustomRadio4"
                  name="customRadio"
                  label="No"
                />
              </Col>
            </FormGroup>
            <Card>
              <CardBody>
                <FormGroup row>
                <label>Do you want to add your Dessert menu?</label>
                  <Col sm={2}>
                  <div className="Entertainment">
                  <ToggleSwitch
                 // enable={enable}
                 // onchange={toggleActivityEnabled}
                          //isToggled={isToggled}
                         // onToggle={() => setIsToggled(!isToggled)}
                          
                    />
                    </div>
                    </Col>
                 
                </FormGroup>
                <FormGroup row>
                 
                <label>Do you offer a drinks menu?</label>
                  <Col sm={2}>
                  <div className="Entertainment">
                  <ToggleSwitch
                 // enable={enable}
                 // onchange={toggleActivityEnabled}
                          //isToggled={isToggled}
                         // onToggle={() => setIsToggled(!isToggled)}
                          
                    />
                    </div>
                    </Col>
                   
                </FormGroup>
              </CardBody>
            </Card>
            <br />
            <br />
            {/* <FormGroup>
          <Label for="exampleFile">Upload The Image</Label>
          <Input type="file" name="file" id="exampleFile" sm={10} />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}

          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle3}>
            Close
          </Button>{' '}
          <Button color="primary" className="ml-auto" >
            Submit
          </Button>
          <Button color="primary" className="ml-auto"  /*onClick={handleSubmit} */>
            Add
          </Button>
        </ModalFooter>
      </Modal>

      {/* for information of pub,club ,bar */}
      <Modal zIndex={2000} className="information_Model" centered scrollable isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Information Of  {activityInformation.category}</ModalHeader>
        <ModalBody className="text-center">
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Media style={{ width: "100%", height: "70%" }} src={club1} alt="" image></Media>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Label style={{ text: "bold" }}><h5>Name of {activityInformation.category}</h5></Label>
            </Col>
            <Col sm={4}>
              <h3>{activityInformation.title}</h3>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle2}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}
} else {
  return <Redirect to='/ ' />
}
}
export default Entertainment;
