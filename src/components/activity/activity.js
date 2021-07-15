import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './activity.css'
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { CheckboxToggle } from 'react-rainbow-components';
import LoaderClass from '../../loader/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

          function Activity(props) {

            const [indexes, setIndexes] = useState([]);
            const [counter, setCounter] = useState(0);

		  
  const HourMinutes = [
    { label: 'Hours', value: 'Hours' },
    { label: ' Minutes', value: ' Minutes' },
  ];
  
    const Placeoptions = [
      { label: 'Bar', value: 'Bar' },
      { label: 'Club', value: 'Club' },
	    {label:'Pub',value : 'Pub'},
    ];

  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal5, setModal5] = useState(false);
 
  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);
  

  const [list, setList] = useState([]);
  const [ActivityInformation, setActivityInformation] = useState([]);
  const [getActivitiesInformation, setGetActivitiesInformation] = useState([]);


  //add form for Activities
  const [activitiyName, setActivitiyName] = useState("");
  const [ids, setids] = useState("");
  const [listingToday, setListingToday] = useState("");
  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  const [district, setDistrict] = useState(""); 
  const [title, setTitle] = useState(""); 
  
  const [loader, setLoader] = useState(true);


 
  const foodMenuOptions = [
    { label: 'Dessert', value: 1 },
    { label: 'Other', value: 2 },
      { label: 'Main', value: 3 },
    { label: 'Starter', value: 4},
  ];
      
	  const DrinkOptions = [
    { label: 'Alcohalic', value: 1 },
    { label: 'Non-alcohalic', value: 2 },
    
  ];

  const emptySetVariable = () => {
    // setCatogeryError('');
    // setAddressError('');
    // setTownError('');
  	// setPlaceError('');
    // setMobileError('');
    // setDistrictError('');
    // setdisrciptionerror('');
  }
	  const handleSubmit = (evt) => {
      evt.preventDefault();
      emptySetVariable();
    //  if (Placetype == '') {
    //  setCatogeryError('Cetgory is required!');
    //  return;
    //  }
    // // const isValid=FormValidation();
    //  emptySetVariable();
    //  if (town == '') {
    // setTownError('town is required!');
    // return;
    //  }

    //  if (address == '') {
    // setAddressError('Address is required!');
    // return;
    //  }
    //  if (mobile == '') {
    //  setMobileError('phone no is required!');
    //  return;
    //  }
	  // if (address == '') {
    //  setDistrictError('distrcit is required!');
    //  return;
    //  } if (disrciptionerror == '') {
    //  setdisrciptionerror('discription is required!');
    //  return;
     //}
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
  
  activityName: activitiyName,
listingToday:listingToday,
title:title
// located: null,
// location: null,
// notice_guest: null,
// offerservice: null,
// otherAct: null,
// otherDietary: null,
// pickupServiceGuest: 1,
// prop_num_street_name: null
// rate_guest: null
// remarks: null
// skyAct: null
// status: 1
// suitableChild: 1

// totalDays: null
// town: null
// transportService: 1
// type: 1
// updated_at: "07-Jun-2021 06:31:46"
// upload: null
// user_id: 1
// waterAct: null
// wheelchairAccess: 1
	}


  
    axios.post(`${common.api_url}activity`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
          getData();
            swal("Activity Added Successfully!", "success");
           return res.data.data;
          // history.push('/rooms', roomModel)
        }
      }).catch(err => {
        console.log(err);
      })

    // history.push('/rooms', roomModel);
  }


  useEffect(() => {
     getData();
     // getListing();
   }, [])
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
     axios.get(`${common.api_url}activity`, config).then((response) => {
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
    axios.delete(`${common.api_url}activity/${id}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Activity deleted Successfully!");
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
     axios.get(`${common.api_url}pbc/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
        setActivityInformation(jsonPrser.data.data)
         toggle2(true)
       }
     }).catch((error) => {
       console.log(error, 'errror');

     });

   }
  const viewForDeleteData = (id) => {
     console.log(id);
     let token = localStorage.getItem("key");
     var token1 = token.replace(/"/g, "");
     const config = {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token1}`
       }
     };
     axios.get(`${common.api_url}activity/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
        setActivityInformation(jsonPrser.data.data) 
         toggle4(true)
       }
     }).catch((error) => {
       console.log(error, 'errror');

     });

   }

  const GetPlaceById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}activity/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetActivitiesInformation(jsonPrser.data.data)
        setTitle(jsonPrser.data.data.title)
        setids(jsonPrser.data.data.id)
        setListingToday(jsonPrser.data.data.listingToday)
        setActivitiyName(jsonPrser.data.data.activitiyName)
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  

  const UpdateActivitysById = (id) => {

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
        activityName: activitiyName,
        listingToday:listingToday,
        title:title
        	}
	
	
    axios.put(`${common.api_url}activity/${ids}`, payload, config)
      .then(res => {
        if (res) {
         toggle5(false);
		     getData();
         swal("Activity Updated Successfully!", "success");
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
                    <h1 className="m-0">Activity</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
					           <Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add Activity
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
                            <th></th>
                            <th></th>
                            <th>
							  </th>
                              <th></th>
                            <th>
                            {/* <input type="text" className="form-control-sm" placeholder="search by Role" value={searchRole} onChange={(e=>searchRoleFun(e.target.value))} aria-label="Username" /> */}

                            </th>
                            
                            <th></th>
                          </tr>
                          <tr>
                            <th>Sl</th>
                            <th>Action</th>
                            <th>activityName</th>
                            <th>listingToday</th>
                            <th>title</th>
                            <th>created_at</th>
                            {/* <th>PlaceName</th> */}
                          </tr>
                        </thead>
                        {list.filter((val) => {
                          if (search && searchbyName == "") {
                            return val;
                           } else
                  //  if (val.placeName.includes(search) ||  val.email == searchbyName) 
						   {
                            return val;
                          }
                        }).map((data, index) =>
                          <tbody key={index}>
                            <tr>
                              <td>{index+1}</td>
                              <td>  <FontAwesomeIcon
                                icon={['far', 'edit']}
                                className="font-size-xxl"
                                placement="top"
                                style={{fontSize:15,color:'#0AEE23'}}
                                onClick={() => GetPlaceById(data.id)}
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
                                  style={{fontSize:15,color:'#EE180A '}}
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
                                  style={{fontSize:15,color:'#0710CD '}}
                                  id="tooltipforview"
                                  outline={data.id} onClick={() => viewData(data.id)} /> <UncontrolledTooltip
                                    placement="top"
                                    container="body"
                                    target="tooltipforview">
                                  view
                     </UncontrolledTooltip></td>
                              <td>{data.activityName}</td>
                              <td>{data.listingToday}</td>
                              <td>{data.title}</td>
                              <td>{data.created_at}</td>
                               {/* <td className={common.status[data.status_id]}>{common.status[data.status_id]}</td>  */}
                          
                              {/* edit section for Activity */}
                              <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                                <ModalHeader toggle={toggle5}>Edit Activity</ModalHeader>
                                <ModalBody>

                               <Form>
                               <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>Activity Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="activitiyName"
                      name="activitiyName"
                       //placeholder={getuserInformation.activityName}
                       defaultValue={getActivitiesInformation.activityName}
                      value={activitiyName}
                      onChange={e => setActivitiyName(e.target.value)}
                    />
                    {/* {PlaceError != '' ? (
                      <Label style={{ color: "red" }}>
                        {PlaceError}
                      </Label>
                    ) : null} */}
                  </Col>
                  <Label htmlFor="personCapacity" sm={1}>listingToday
                            </Label>
                          <Col sm={3}>
                            <Input
                               type="text"
                                id="listingtoday"
                                placeholder="Land Activity, Sea Activity, Air Activity, Others"
                                 defaultValue={getActivitiesInformation.listingToday}
                                 value={listingToday}
                                 onChange={e => setListingToday(e.target.value)}              
                            />
                          {/* {DistrictError != '' ? (
                            <Label style={{ color: "red" }}>
                            {DistrictError}
                            </Label>
                          ) : null} */}
														  </Col>
                  <Label htmlFor="personCapacity" sm={1}>Title
                            </Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="title"
                                value={title}
                                 defaultValue={getActivitiesInformation.title}
                                onChange={e => setTitle(e.target.value)}              
                            />
										{/* {DistrictError != '' ? (
										  <Label style={{ color: "red" }}>
											{DistrictError}
										  </Label>
										) : null} */}
														  </Col>
				   {/* <Label htmlFor="examplePropertyName" sm={1}>Place Address</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="address"
                    value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                    {/* {AddressError != '' ? (
                    <Label style={{ color: "red" }}>
                    {AddressError}
                    </Label>
                  ) : null} 
                                      </Col>
                    <Label htmlFor="examplePropertyName" sm={1}>Town</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="town"
                      defaultValue={getActivitiesInformation.town}
                        value={town}
                          onChange={e => setTown(e.target.value)}
                                        />
                                  {TownError != '' ? (
                                    <Label style={{ color: "red" }}>
                                    {TownError}
                                    </Label>
                                  ) : null} 
                                      </Col> */}
							</FormGroup>
                               </Form>
                                 
                                 
                                </ModalBody>

                                <ModalFooter>
                                   <Button color="primary" className="ml-auto" onClick={() => UpdateActivitysById(data.id)}>
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
            <ModalHeader toggle={toggle2}>Information Of Activity</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Place Name :</Label>
                  <Col sm={3}>
                    {ActivityInformation.place_name ?
                      ActivityInformation.place_name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>openingHours</Label>
                  <Col sm={3}>
                    {ActivityInformation.close_mu_time ?
                      ActivityInformation.close_mu_time
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Catogery :
                    </Label>
                  <Col sm={3}>
                    {ActivityInformation.category ?
                      ActivityInformation.category
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Mobile No. :
                    </Label>
                  <Col sm={3}>
                    {ActivityInformation.phone_number ?
                      ActivityInformation.phone_number
                      : ('Null')}
                  </Col>
              
                </FormGroup>
                 
                <h3>Address</h3>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Town :</Label>
                <Col sm={3}>
                  {ActivityInformation.town}

                </Col>

                  <Label className='view_head' htmlFor="hotelType" sm={1}>District  :</Label>
                  <Col sm={3}>
                    {ActivityInformation.place_address ?
                      ActivityInformation.place_address
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
            <ModalHeader toggle={toggle4}>Delete Activity</ModalHeader>
            <ModalBody>
              <p>Are you sure Want To Delete {ActivityInformation.place_name}?
                              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
                                 </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => removeData(ActivityInformation.id)}>
                Delete
                               </Button>
            </ModalFooter>
          </Modal>


 

          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle3}>Add Activity</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>Activity Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="activitiyName"
                      name="activitiyName"
                      // placeholder={getuserInformation.placeName}
                      value={activitiyName}
                      onChange={e => setActivitiyName(e.target.value)}
                    />
                    {/* {PlaceError != '' ? (
                      <Label style={{ color: "red" }}>
                        {PlaceError}
                      </Label>
                    ) : null} */}
                  </Col>
                  <Label htmlFor="personCapacity" sm={1}>listingToday
                            </Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="district"
                                value={listingToday}
                                // defaultValue={getActivitiesInformation.place_address}
                                onChange={e => setListingToday(e.target.value)}              
                            />
										{/* {DistrictError != '' ? (
										  <Label style={{ color: "red" }}>
											{DistrictError}
										  </Label>
										) : null} */}
														  </Col>
                  <Label htmlFor="personCapacity" sm={1}>Title
                            </Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="district"
                                value={title}
                                // defaultValue={getActivitiesInformation.title}
                                onChange={e => setTitle(e.target.value)}              
                            />
										{/* {DistrictError != '' ? (
										  <Label style={{ color: "red" }}>
											{DistrictError}
										  </Label>
										) : null} */}
														  </Col>
				   {/* <Label htmlFor="examplePropertyName" sm={1}>Place Address</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="address"
                    value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                    {/* {AddressError != '' ? (
                    <Label style={{ color: "red" }}>
                    {AddressError}
                    </Label>
                  ) : null} 
                                      </Col>
                    <Label htmlFor="examplePropertyName" sm={1}>Town</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="town"
                      defaultValue={getActivitiesInformation.town}
                        value={town}
                          onChange={e => setTown(e.target.value)}
                                        />
                                  {TownError != '' ? (
                                    <Label style={{ color: "red" }}>
                                    {TownError}
                                    </Label>
                                  ) : null} 
                                      </Col> */}
							</FormGroup>
							<FormGroup row>
							
						  {/* <Label htmlFor="personCapacity" sm={1}>
									   Phone Number
										</Label>
									  <Col sm={3}>
										<Input
										  type="number"
										  id="mobileNo"
										  name="customSelect"
										  value={mobile}
										  onChange={e => setMobile(e.target.value)}
										/> */}
										 {/* {MobileError != '' ? (
									  <Label style={{ color: "red" }}>
										{MobileError}
									  </Label>
									) : null} 
									  </Col>*/}
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
	
export default Activity;
