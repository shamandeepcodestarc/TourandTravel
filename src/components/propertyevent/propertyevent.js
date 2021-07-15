import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './propertyevent.css'
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

          function Pubs() {

            const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);

  const addNewField = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeNewField = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFields = () => {
    setIndexes([]);
  };
		  
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
  const [notify1, setNotify1] = useState(false);

  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);


  const [list, setList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [Catorey, setCatorey] = useState([]);
  const [placeInformation, setPlaceInformation] = useState([]);
  const [GetPlaceInformation, setGetPlaceInformation] = useState("");


  //add form for Pub
  const [loader, setLoader] = useState(true);

  //
  const [checkTogglechildsuit, setCheckTogglechildsuit] = useState(false);
  const [checkTogglechildrate, setCheckTogglechildrate] = useState(false);
  const [checkTogglegroupbook, setCheckTogglegroupbook] = useState(false);
  const [checkTogglegroupforchild, setCheckTogglegroupforchild] = useState(false);
  const [checkToggledayrate, setCheckToggledayrate] = useState(false);
  
  const [checkTogglehalfday, setCheckTogglehalfday] = useState(false);
  const [checkTogglefullday, setCheckTogglefullday] = useState(false);
  const [checkToggledealpublish, setcheckToggledealpublish] = useState(false);

  const [musictypeoffer, setmusictypeoffer] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [getPubsInformation, setGetPubsInformation] = useState("");
  const [Catogery, setCatogery] = useState(""); 
  const [district, setDistrict] = useState(""); 
  const [openinghours, setOpeningHours] = useState(""); 
  const [placeShortDescription, setplaceShortDescription] = useState(""); 
  const [town, setTown] = useState("");
  const [fineprint, setfineprint] = useState("");
  const [checkToggledrink, setcheckToggledrink] = useState(false);
  const [ShortDescriptionDrink, setShortDescriptionDrink] = useState(false);

  
  const [checkTogglefoods, setcheckTogglefoods] = useState("");
   const [Placetype, setPlacetype] = useState([]);
   const [AddFoodMenu, setAddFoodMenu] = useState("");
   const [FoodManu, setFoodManu] = useState("");
   const [dinktypeoffer, setdinktypeoffer] = useState("");

  const [checkToggleMusicLive, setcheckToggleMusicLive] = useState("");
  const [checkTogglemusic, setcheckTogglemusic] = useState("");
  const [checkTogglefloor, setcheckTogglefloor] = useState("");
  const [checkToggleDJ, setcheckToggleDJ] = useState("");
  
  const [Openfoodtime, setOpenfoodtime] = useState("");
  const [closefoodtime, setclosefoodtime] = useState("");
  const [address, setAddress] = useState("");
  
  const [mobile, setMobile] = useState("");
  const [startdeal, setstartdeal] = useState("");
  const [enddeal, setenddeal] = useState("");
  const [dealOfferning, setdealOfferning] = useState("");
  const [CatogeryError, setCatogeryError] = useState('');
  const [PlaceError, setPlaceError] = useState('');
  const [AddressError, setAddressError] = useState('');
  const [TownError, setTownError] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [DistrictError, setDistrictError] = useState('');
  const [disrciptionerror, setdisrciptionerror] = useState('');
  const [singlePlacegetCatogery, setplaceCatogery] = useState('');
  const [checkTogglediscount, setCheckTogglediscount] = useState(false);

  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  
  
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
    setCatogeryError('');
    setAddressError('');
    setTownError('');
	setPlaceError('');
    setMobileError('');
    setDistrictError('');
    setdisrciptionerror('');
  }
	  const handleSubmit = (evt) => {
      evt.preventDefault();
      emptySetVariable();
     if (Placetype == '') {
     setCatogeryError('Cetgory is required!');
     return;
     }
    // const isValid=FormValidation();
     emptySetVariable();
     if (town == '') {
    setTownError('town is required!');
    return;
     }

     if (address == '') {
    setAddressError('Address is required!');
    return;
     }
     if (mobile == '') {
     setMobileError('phone no is required!');
     return;
     }
	  if (address == '') {
     setDistrictError('distrcit is required!');
     return;
     } if (disrciptionerror == '') {
     setdisrciptionerror('discription is required!');
     return;
     }
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
	   place_name : placeName,
	   music_type:musictypeoffer,
	   open_time:openinghours,
       phone_number: mobile,
	   live_music : checkToggleMusicLive,
       town: town,
       category: Placetype,
       place_address: address,
	   // distrcit : district,
	   music:checkTogglemusic,
	   description:placeShortDescription,
	   dance_floor:checkTogglefloor,
	   dj:checkToggleDJ,
	   drinks:checkToggledrink,
	   drinks_menu:DrinkOptions,
	   food_menu:checkTogglefoods,
	   food_menu_add :foodMenuOptions,
	   open_f_time:Openfoodtime
	}


    console.log(payload);
	console.log("hello");
    axios.post(`${common.api_url}pbc`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
            swal("Pub Added Successfully!", "success");
			console.log("hello");
          // getData();
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
       console.log(token);
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
     axios.get(`${common.api_url}pbc`, config).then((response) => {
       var dataJson = JSON.stringify(response);
       var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
         setList(jsonPrser.data.data)
         console.log(jsonPrser.data.data);

       }
     }).catch((error) => {
       console.log(error, 'errror');
     });
   }
      



  const removeData = (id) => {
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
    axios.delete(`${common.api_url}pbc/${id}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Pub deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
        }
      }).catch(err => {
        console.log(err);
      })
  }


   const viewData = (id) => {
     console.log(id);
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
     axios.get(`${common.api_url}pbc/${id}`, config).then((response) => {
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
     console.log(id);
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
     axios.get(`${common.api_url}pbc/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setPlaceInformation(jsonPrser.data.data)
         toggle4(true)
       }
     }).catch((error) => {
       console.log(error, 'errror');

     });

   }

  const GetPlaceById = (id) => {
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
    axios.get(`${common.api_url}pbc/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetPubsInformation(jsonPrser.data.data)
		setTown(jsonPrser.data.data.town);
		setMobile(jsonPrser.data.data.phone_number);
		setDistrict(jsonPrser.data.data.place_address);
		setPlacetype(jsonPrser.data.data.category);
		setPlaceName(jsonPrser.data.data.place_name);
        console.log(getPubsInformation);
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  

  const UpdatePubsById = (id) => {

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
	   place_name : placeName,
       phone_number: mobile,
       town: town,
       category: Placetype,
       place_address: address,
	   district:district
	  
	}
	
	
    axios.put(`${common.api_url}pbc/${id}`, payload, config)
      .then(res => {
        if (res) {
         toggle5(false);
		 getData()
         swal("Pub Updated Successfully!", "success");
  
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
                    <h1 className="m-0">Places</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
					  <Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add Place
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
                            <th>Mobile</th>
                            <th>Place Address</th>
                            <th>Catogery</th>
                            <th>PlaceName</th>
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
                              <td>{data.phone_number}</td>
                              <td>{data.town}</td>
                              <td>{data.place_address}</td>
                              <td>{data.place_name}</td>
                               <td className={common.status[data.status_id]}>{common.status[data.status_id]}</td> 
                          
                              {/* edit section for pub */}
                              <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                                <ModalHeader toggle={toggle5}>Edit Place</ModalHeader>
                                <ModalBody>


                                  <Form onclick={() => UpdatePubsById(data.id)}>
                                    <FormGroup row>
                                   
                                      <Label htmlFor="personCapacity" sm={1}>Place Name</Label>
                                    <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="placeName"
                                          name="customSelect"
										  defaultValue={getPubsInformation.place_name}
										  value={placeName}
                                          onChange={e => setPlaceName(e.target.value)}

                                        />
                                      </Col>

                        
                                      <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>
                                      Catogery
                                   </Label>
                                      <Col sm={3}>
										      <CustomInput
                                             type="select"
                                             name="customSect"
                                             id={"exampleCustomMutlipleSelect"}
                                             value={Placetype.id}
											 defaultValue={getPubsInformation.category}
                                             onChange={e => setPlacetype(e.target.value)}>
                                            <option >Select Place</option>
                                            {Placeoptions.map((data, index) =>
											<option key={index} value={data.value}>{data.label}</option>
                                         )};
                                        </CustomInput>

                                      </Col>
									   <Label htmlFor="personCapacity" sm={1}>
                                     Phone Number
                                     </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="number"
                                          id="mobileNo"
                                          value={mobile}
                                          defaultValue={getPubsInformation.phone_number}
                                          onChange={e => setMobile(e.target.value)}


                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
									 <Label htmlFor="examplePropertyName" sm={1}>Place Address</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="address"
										  value={address}
										    defaultValue={getPubsInformation.place_address}
                                          onChange={e => setAddress(e.target.value)}
                                        />
                                      </Col>
				  <Label htmlFor="examplePropertyName" sm={1}>Town</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="town"
                                          defaultValue={getPubsInformation.town}
										   value={town}
                                             onChange={e => setTown(e.target.value)}
                                        />
                                      </Col>
									  
                                     <Label htmlFor="personCapacity" sm={1}>District
                            </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="district"
                                           value={district}
                                           defaultValue={getPubsInformation.district}
                                           onChange={e => setDistrict(e.target.value)}              
                                        />
                                      </Col>
									</FormGroup>
                                    
                                  </Form>
                                </ModalBody>

                                <ModalFooter>
                                   <Button color="primary" className="ml-auto" onClick={() => UpdatePubsById(data.id)}>
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
            <ModalHeader toggle={toggle2}>Information Of place</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Place Name :</Label>
                  <Col sm={3}>
                    {placeInformation.place_name ?
                      placeInformation.place_name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>openingHours</Label>
                  <Col sm={3}>
                    {placeInformation.close_mu_time ?
                      placeInformation.close_mu_time
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Catogery :
                    </Label>
                  <Col sm={3}>
                    {placeInformation.category ?
                      placeInformation.category
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Mobile No. :
                    </Label>
                  <Col sm={3}>
                    {placeInformation.phone_number ?
                      placeInformation.phone_number
                      : ('Null')}
                  </Col>
              
                </FormGroup>
                 
                <h3>Address</h3>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Town :</Label>
                <Col sm={3}>
                  {placeInformation.town}

                </Col>

                  <Label className='view_head' htmlFor="hotelType" sm={1}>District  :</Label>
                  <Col sm={3}>
                    {placeInformation.place_address ?
                      placeInformation.place_address
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
            <ModalHeader toggle={toggle4}>Delete Place</ModalHeader>
            <ModalBody>
              <p>Are you sure Want To Delete {placeInformation.place_name}?
                              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
                                 </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => removeData(placeInformation.id)}>
                Delete
                               </Button>
            </ModalFooter>
          </Modal>


 

          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle3}>Add Place</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>Place Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="placeName"
                      name="customSelect"
                      // placeholder={getuserInformation.placeName}
                      value={placeName}
                      onChange={e => setPlaceName(e.target.value)}
                    />
                    {PlaceError != '' ? (
                      <Label style={{ color: "red" }}>
                        {PlaceError}
                      </Label>
                    ) : null}
                  </Col>
				   <Label htmlFor="examplePropertyName" sm={1}>Place Address</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="address"
										  value={address}
                                          onChange={e => setAddress(e.target.value)}
                                        />
										 {AddressError != '' ? (
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
                                          defaultValue={getPubsInformation.town}
										   value={town}
                                             onChange={e => setTown(e.target.value)}
                                        />
										 {TownError != '' ? (
										  <Label style={{ color: "red" }}>
											{TownError}
										  </Label>
										) : null}
                                      </Col>                                    
							</FormGroup>
							<FormGroup row>
							 <Label htmlFor="personCapacity" sm={1}>District
                            </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="district"
                                           value={district}
                                           defaultValue={getPubsInformation.place_address}
                                           onChange={e => setDistrict(e.target.value)}              
                                        />
										{DistrictError != '' ? (
										  <Label style={{ color: "red" }}>
											{DistrictError}
										  </Label>
										) : null}
														  </Col>
						  <Label htmlFor="personCapacity" sm={1}>
									   Phone Number
										</Label>
									  <Col sm={3}>
										<Input
										  type="number"
										  id="mobileNo"
										  name="customSelect"
										  value={mobile}
										  onChange={e => setMobile(e.target.value)}
										/>
										 {MobileError != '' ? (
									  <Label style={{ color: "red" }}>
										{MobileError}
									  </Label>
									) : null}
									  </Col>
					          </FormGroup>
				     <Row>
                           <Label htmlFor="examplePropertyName" sm={2}>Opening hours</Label>
						   <br/>
					    </Row>
                    <FormGroup>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Monday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Tuesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Wednesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Thursday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Friday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Saturday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Sunday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                    </FormGroup>
												
										<FormGroup row>
										<Label htmlFor="exampleCustomMutlipleSelect" sm={1}>
										Catogery
										</Label>
									  <Col sm={3}>

										      <CustomInput
                                             type="select"
                                             name="customSect"
                                             id={"exampleCustomMutlipleSelect"}
                                             value={Placetype.id}
                                             onChange={e => setPlacetype(e.target.value)}>
                                            <option >Select Place</option>
                                            {Placeoptions.map((data, index) =>
                                         <option key={index} value={data.value}>{data.label}</option>
                                         )};
                                        </CustomInput>
                    {CatogeryError != '' ? (
                      <Label style={{ color: "red" }}>
                        {CatogeryError}
                      </Label>
                    ) : null}
                  </Col>
				  <Label htmlFor="exampleTitle" sm={3}>Write a short discription about your place.</Label>
                                    <Col sm={3}>
                                      <Input type="textarea"
                                        name="placeShortDescrip"
                                        id="exampleExample"
                                        value={placeShortDescription}
                                        onChange={e => setplaceShortDescription(e.target.value)} />
										 {disrciptionerror != '' ? (
										  <Label style={{ color: "red" }}>
											{disrciptionerror}
										  </Label>
										) : null}
                                    </Col>
                 </FormGroup>

        <FormGroup row>				  
                
                <Label htmlFor="exampleMusic" sm={2}>Do you have music?</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkTogglemusic}
                    onChange={e => setcheckTogglemusic(checkTogglemusic == false ? true : false)}

                  />

                </Col>
				
				
              {checkTogglemusic == true ? (
                <>
                 
                    <Label htmlFor="exampleTitle" sm={4}>What type of music do you offer? </Label>
                    <Col sm={3}>
                    <Input
                      type="text"
                      id="musictypeoffer"
                      value={musictypeoffer}
                      onChange={e => setmusictypeoffer(e.target.value)}
                    />

                       {/* setmusictypeoffer */}
                    </Col>
                
                  </>
                  ) : ''}

				</FormGroup >
				<FormGroup row>
				<Label htmlFor="exampleMusic" sm={2}>Do you have DJ?</Label>

                <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleDJ}
                   onChange={e => setcheckToggleDJ(checkToggleDJ == false ? true : false)}

                  />
                </Col>
				</FormGroup>
				           
		  {checkToggleDJ == true ? (
                <>
                  <FormGroup>
                    <Row>
                    <label>Which days do you offer DJ ?</label>
                      
                    </Row>
                    <FormGroup>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Monday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Tuesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Wednesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Thursday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Friday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Saturday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Sunday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>



                     
                     
                    </Row>

                  </FormGroup>
                  
                </>
              ) : ''}
      
				<FormGroup row>
               <Label htmlFor="exampleMusic" sm={2}>Do you have dance floor?</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkTogglefloor}
                    onChange={e => setcheckTogglefloor(checkTogglefloor == false ? true : false)}

                  />

                </Col>
              </FormGroup>
		

               <FormGroup row>
			     <Label htmlFor="exampleTitle" sm={2}>Do you offer Live Music? </Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleMusicLive}
                    onChange={e => setcheckToggleMusicLive(checkToggleMusicLive == false ? true : false)}

                  />

                </Col>
				</FormGroup>
				 {checkToggleMusicLive == true ? (
                <>
                  <FormGroup>
                    <Row>

                      <Label htmlFor="exampleTitle" sm={3}>Which days do you offer live music.</Label>
                      
                    </Row>
                    <FormGroup>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Monday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Tuesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Wednesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Thursday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Friday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Saturday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Sunday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                    </FormGroup>


                  </FormGroup>
                 
                </>
              ) : ''}
                    
				<FormGroup row>
				<Label sm={2}>Do you have Food menu?</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkTogglefoods}
                     onChange={e => setcheckTogglefoods(checkTogglefoods == false ? true : false)}

                  />
                </Col>
				</FormGroup>
				  
                {checkTogglefoods == true ? (
                <>
				 <FormGroup>
                    <Row>

                      <Label htmlFor="exampleTitle" sm={3}>Which days do you offer Food.</Label>
                      
                    </Row>
                    <FormGroup>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Monday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Tuesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Wednesday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Thursday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Friday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Saturday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Sunday
                        </label>
                        </Col>
                        <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                    </FormGroup>


                  </FormGroup>
				  <FormGroup row>
			 <Label sm={2}>Do you want to add food menu.</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={AddFoodMenu}
                     onChange={e => setAddFoodMenu(AddFoodMenu == false ? true : false)}

                  />
                </Col>
				    {AddFoodMenu == true ? (
                <>
      

                    <Label htmlFor="exampleTitle" sm={3}>You can now add your food menu </Label>
                         <Col sm={3}>
						    <Input
                            type="text"
                            id="foodmanu"
                            name="foodmanu"
                            value={FoodManu}
                           onChange={e => setFoodManu(e.target.value)}
						 placeholder="e.g Starter,Main,Desert,Other  "
                          />

	    					 </Col>
		
                  </>
                  ) : ''}
                   </FormGroup> 
                  </>
                  ) : ''}
                    
				
				<FormGroup row>
                 <Label htmlFor="exampleMusic" sm={2}>Do you offer a drink menu?</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggledrink}
                    onChange={e => setcheckToggledrink(checkToggledrink == false ? true : false)}

                  />

                </Col>
               
		      {checkToggledrink == true ? (
                <>
				   <Label htmlFor="exampleTitle" sm={2}>You can add your drink menu. </Label>
                        <Col sm={3}>
                         <Input
                      type="textarea"
                      id="drinkmanur"
                      value={dinktypeoffer}
					  placeholder="Alcohalic and non alcohalic"
                      onChange={e => setdinktypeoffer(e.target.value)}
                    />                      
                        </Col>
						<label  htmlFor="exampleTitle" sm={1}>
                            Any additional Information:
                        </label>
                      <Col sm={2}>
                        <Input type="textarea"
                          name="ShortDescriptionDrink"
                          id="ShortDescriptionDrink"
						  value={ShortDescriptionDrink}
                          onChange={e => setShortDescriptionDrink(e.target.value)}
                          placeholder="Additional Information" />
                      </Col>
                  </>
                  ) : ''}
          </FormGroup>
	  <FormGroup row>
					
			<Label htmlFor="exampleMusic" sm={2}>Do you want to publish a deal?</Label>
                <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggledealpublish}
                    onChange={e => setcheckToggledealpublish(checkToggledealpublish == false ? true : false)}

                  />
				  </Col>
					</FormGroup>
					{checkToggledealpublish == true ? ( 
					<>
				<FormGroup row>
				<Label htmlFor="hotelType" sm={2}>What are you offerning with this deal .</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="district"
                      name="customSelect"
                      value={dealOfferning}
                      onChange={e => setdealOfferning(e.target.value)}
                    />
                  </Col>
                  <Label htmlFor="hotelType" sm={2}>The fine Print (to write the condition)</Label>
                      <Col sm={6}>
                        <Input
                          type="textarea"
                          id="fineprint"
                          name="fineprint"
                          value={fineprint}
                          placeholder="One deal per person/ Price is based on two people sharing etc,, so you will need to buy 2 deals vouchers May buy multiples as gifts Voucher valid untill"
                          onChange={e => setfineprint(e.target.value)}
                        />
                      </Col>
				</FormGroup>
				<Card>
                <CardBody>
                  <Label for="RulesAllowed" sm={12}><h3>What is allowed:</h3></Label>
                  <FormGroup row>
                    <br />
                    <Col sm={4}>
                      <label><input type="checkbox" value="yes" />
                         Smoking allowed:
                       </label>
                    </Col>
                    <Col sm={5}>
                      <Input type="text"
                        name="rulesomkeArea"
                        id="rulesomkeArea"
                        placeholder="If yes,mentioned where can they smoke." />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col sm={4}>
                      <label><input type="checkbox" value="yes" />
          Events or parties allowed :
                        </label>
                    </Col>
                    <Col sm={5}>
                      <Input type="text"
                        name="rulepartiesQuiteHour"
                        id="rulepartiesQuiteHour"
                        placeholder="If checked, Tell us what are the quiet hours ." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={4}>
                      <label><input type="checkbox" value="yes" />
          Guests can receive Visitors
                        </label>
                    </Col>

                  </FormGroup>
                  <FormGroup row>
                    <Col sm={4}>
                      <label><input type="checkbox" value="yes" />
                      You are responsible to keep anything that you're provided with in the host in the same condition.  If there is any damage to the property or to any of the items you will be asked to pay for it:
                        </label>
                    </Col>

                  </FormGroup>

                  <FormGroup row>
                    <Col sm={4}>
                      <label><input type="checkbox" value="yes" />
         Children allowed - Suitable for Kids( from age to ), if no why
                        </label>
                    </Col>
                    <Col sm={5}>
                      <Input type="text"
                        name="rulekidsAge"
                        id="rulekidsAge"
                        placeholder="If no why, Tell us  ." />
                    </Col>


                  </FormGroup>
                  {indexes.map(index => {
                    const fieldName = `friends[${index}]`;
                    return (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={2}>Add Additional Information</Label>
                          <Col sm={4}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>
                        </FormGroup>
                      </>
                    );
                  })}
                  <br />
                  <FormGroup className="add_my_new_info">

                    <Button color="primary" className="ml-auto add_my_new_info_btn">
                      ADD ADDITIONAL INFORMATION
                   </Button>
                  </FormGroup>
                </CardBody>
              </Card>
			  <h3>Deal Duration</h3>
			    <FormGroup row>
			        	   <Label htmlFor="personCapacity" sm={1}>Start</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="startdeal"
                      value={startdeal}
                      onChange={e => setstartdeal(e.target.value)}
                    />
                  </Col>
                  <Label htmlFor="hotelType" sm={1}>End</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="enddeal"
                      name="customSelect"
                      value={enddeal}
                      onChange={e => setenddeal(e.target.value)}
                    />
                  </Col>
                </FormGroup>
			      

              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label htmlFor="DiscountLongStay" sm={2}>Do you offer any discount on Long Stay?</Label>
                    <Col sm={1}>
                      <CheckboxToggle
                        value={checkTogglediscount}
                        onChange={e => setCheckTogglediscount(checkTogglediscount == false ? true : false)}

                      />
                    </Col>
                    {checkTogglediscount == true ? (
                      <>
                        <Label htmlFor="DiscountCode" sm={2}>Create Discount code</Label>
                        <Col sm={3}>
                          <Input type="text"
                            name="discountCodeLongStay"
                            id="discountCodeLongStay"
                            placeholder="enter codes" />
                        </Col>
                      </>
                    ) : ''}
                  </FormGroup>
                  {indexes.map(index => {
                    const fieldName = `friends[${index}]`;
                    return (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={2}>Add Additional Information</Label>
                          <Col sm={4}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>
                        </FormGroup>
                      </>
                    );
                  })}
                  <br />
                  <FormGroup className="add_my_new_info">

                    <Button color="primary" className="ml-auto add_my_new_info_btn">
                      ADD ADDITIONAL INFORMATION
                    </Button>
                  </FormGroup>
				  </CardBody>
                </Card>
				 <Card>
                <CardBody>
                  <Label for="guest_rate" sm={12}><h3>Let’s set the rate for your Guest</h3></Label>

                  <FormGroup row>

                    <Label htmlFor="exampleTitle" sm={4}>Adult will pay (per person per night include VAT)</Label>

                    <Col sm={2}>
                      <Input type="number"
                        name="adult_pay"
                        id="adult_pay"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>

                    <Label htmlFor="exampleTitle" sm={4}>Is it suitable for Children
(If you want to offer a Group rate instead then do not choose )</Label>
                    <Col sm={1}>
                      <CheckboxToggle
                        value={checkTogglechildsuit}
                        onChange={e => setCheckTogglechildsuit(checkTogglechildsuit == false ? true : false)}

                      />
                    </Col>
                  </FormGroup>

                  {checkTogglechildsuit == true ? (
                    <>
                      <FormGroup row>

                        <Label htmlFor="exampleTitle" sm={4}>Do you have a special rate for Children
					</Label>
                        <Col sm={1}>
                          <CheckboxToggle
                            value={checkTogglechildrate}
                            onChange={e => setCheckTogglechildrate(checkTogglechildrate == false ? true : false)}

                          />
                        </Col>
                      </FormGroup>

                      {checkTogglechildrate == true ? (
                        <>
                          <FormGroup row>


                            <Label htmlFor="PoliceStation" sm={2}>Child (including VAT)</Label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col> 	<Label htmlFor="PoliceStation" sm={1}>Per night</Label>
                            <Label htmlFor="PoliceStation" sm={1}>Age from</Label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><label>To</label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><span>Year(s)</span>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="PoliceStation" sm={2}>Infant</Label>
                            <Col sm={2}>
                              <Input type="text"
                                name="child_pay"
                                id="child_pay"
                                placeholder="free" value="Free" readonly />

                            </Col><Label htmlFor="PoliceStation" sm={1}></Label>
                            <Label htmlFor="PoliceStation" sm={1}>Age from</Label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><label>To</label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><span>Year(s)</span>


                          </FormGroup>
                        </>
                      ) : ''}
                    </>
                  ) : ''}

                  <FormGroup row>

                    <Label htmlFor="exampleTitle" sm={4}>Do you offer a Group Booking rate

					</Label>
                    <Col sm={1}>
                      <CheckboxToggle
                        value={checkTogglegroupbook}
                        onChange={e => setCheckTogglegroupbook(checkTogglegroupbook == false ? true : false)}

                      />
                    </Col>
                  </FormGroup>
                  {checkTogglegroupbook == true ? (
                    <>
                      <FormGroup row>


                        <Label htmlFor="PoliceStation" sm={2}>Guests</Label>
                        <Label htmlFor="PoliceStation" sm={0}> From </Label><Col sm={2}>
                          <Input type="number"
                            name="child_pay"
                            id="child_pay"
                            placeholder="No. of guests" />

                        </Col> <Label htmlFor="PoliceStation" sm={0}> To </Label>
                        <Col sm={2}>
                          <Input type="number"
                            name="child_pay"
                            id="child_pay"
                            placeholder="No. of guests" />

                        </Col>
                        <Label htmlFor="PoliceStation" sm={1}>Pay</Label>
                        <Col sm={2}>
                          <Input type="number"
                            name="child_pay"
                            id="child_pay"
                            placeholder="" /> 
                        </Col><Label htmlFor="PoliceStation" sm={2}>Per guest per night(including VAT)</Label>
                      </FormGroup>
                      <FormGroup className="add_my_new_info_group_booking">

<Button color="primary" className="ml-auto add_my_new_info_btn_group_booking">
  ADD MORE RATE
</Button>
</FormGroup>
                      <FormGroup row>

                        <Label htmlFor="exampleTitle" sm={4}>Is it suitable for either children or infant</Label>
                        <Col sm={1}>
                          <CheckboxToggle
                            value={checkTogglegroupforchild}
                            onChange={e => setCheckTogglegroupforchild(checkTogglegroupforchild == false ? true : false)}

                          />
                        </Col>
                      </FormGroup>
                      {checkTogglegroupforchild == true ? (
                        <>
                          <FormGroup row>
                            <Label htmlFor="PoliceStation" sm={2}>Suitable for children of age</Label>

                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><label>To</label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><span>Year(s)</span>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="PoliceStation" sm={2}>Suitable for Infant of age</Label>

                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><label>To</label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                placeholder="" />

                            </Col><span>Year(s)</span>

                          </FormGroup>


                        </>
                      ) : ''}
                      <FormGroup row>

                        <Label htmlFor="exampleTitle" sm={4}>Do you have a day time rate?</Label>
                        <Col sm={1}>
                          <CheckboxToggle
                            value={checkToggledayrate}
                            onChange={e => setCheckToggledayrate(checkToggledayrate == false ? true : false)}

                          />
                        </Col>
                      </FormGroup>
                      {checkToggledayrate == true ? (
                        <>
                          <FormGroup row>


                            <Label htmlFor="PoliceStation" sm={2}>Half Day</Label>
                            <Col sm={1}>
                              <CheckboxToggle
                                value={checkTogglehalfday}
                                onChange={e => setCheckTogglehalfday(checkTogglehalfday == false ? true : false)}

                              />
                            </Col>
                          </FormGroup>
                          {checkTogglehalfday == true ? (
                            <>
                              <FormGroup row>
                                <Label htmlFor="PoliceStation" sm={1}> From </Label><Col sm={2}>
                                  <Input type="time"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                                <Col sm={2}>
                                  <CustomInput
                                    type="select"
                                    name="which_meal_type"
                                    id="which_meal_type"
                                  >

                                    <option key='0' value=''>Select</option>
                                    <option key='1' value='AM'>AM</option>
                                    <option key='2' value='PM'>PM</option>

                                  </CustomInput>

                                </Col>
                                <Label htmlFor="PoliceStation" sm={0}> To </Label>
                                <Col sm={2}>
                                  <Input type="time"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                                <Col sm={2}>
                                  <CustomInput
                                    type="select"
                                    name="which_meal_type"
                                    id="which_meal_type"
                                  >

                                    <option key='0' value=''>Select</option>
                                    <option key='1' value='AM'>AM</option>
                                    <option key='2' value='PM'>PM</option>

                                  </CustomInput>

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label htmlFor="PoliceStation" sm={3}>Guest will have to pay (per person including VAT)</Label>
                                <Col sm={2}>
                                  <Input type="number"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                              </FormGroup>
                            </>
                          ) : ''}

                          <FormGroup row>


                            <Label htmlFor="PoliceStation" sm={2}>Full Day</Label>
                            <Col sm={1}>
                              <CheckboxToggle
                                value={checkTogglefullday}
                                onChange={e => setCheckTogglefullday(checkTogglefullday == false ? true : false)}

                              />
                            </Col>

                          </FormGroup>
                          {checkTogglefullday == true ? (
                            <>
                              <FormGroup row>

                                <Label htmlFor="PoliceStation" sm={1}> From </Label><Col sm={2}>
                                  <Input type="time"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                                <Col sm={2}>
                                  <CustomInput
                                    type="select"
                                    name="which_meal_type"
                                    id="which_meal_type"
                                  >

                                    <option key='0' value=''>Select</option>
                                    <option key='1' value='AM'>AM</option>
                                    <option key='2' value='PM'>PM</option>

                                  </CustomInput>

                                </Col>
                                <Label htmlFor="PoliceStation" sm={0}> To </Label>
                                <Col sm={2}>
                                  <Input type="time"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                                <Col sm={2}>
                                  <CustomInput
                                    type="select"
                                    name="which_meal_type"
                                    id="which_meal_type"
                                  >

                                    <option key='0' value=''>Select</option>
                                    <option key='1' value='AM'>AM</option>
                                    <option key='2' value='PM'>PM</option>

                                  </CustomInput>

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label htmlFor="PoliceStation" sm={3}>Guest will have to pay (per person including VAT)</Label>
                                <Col sm={2}>
                                  <Input type="number"
                                    name="child_pay"
                                    id="child_pay"
                                    placeholder="" />

                                </Col>
                              </FormGroup>
                            </>
                          ) : ''}

                        </>
                      ) : ''}
                    </>



                  ) : ''}
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Label for="policy" sm={3}><h3>Cancellation Policy </h3></Label>
                  <FormGroup>
                    <Row>
                      <Label for="policy" sm={12}>Please select the cancellation policies you wish to offer to your Guests to chose from while making a booking:</Label>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <input type="checkbox" value="" />
                      </Col>
                      <Col sm={10}>
                        <label>
                          Superflex  (Full-refund for any cancellation made 72hrs before arrival Visit.mu’s Markup is set at 40% per night (Rs100 per night + 40%= Rs130) only if Host  offers Guests Superflex, and full payment is required from Guests. If no refund is made, the Host will earn their full amount )
                 </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <input type="checkbox" value="Free cancellation 48hrs after booking is made and after that 70% refund from (after the 48hrs after booking) upto 14 days prior to arrival From the 30% retainment Vist.mu’s markup will be at 80% and  Host will earn 20%" />
                      </Col>
                      <Col sm={10}>
                        <label>
                          Flex  (Free cancellation 48hrs after booking is made and after that 70% refund from (after the 48hrs after booking) upto 14 days prior to arrival From the 30% retainment Vist.mu’s markup will be at 80% and  Host will earn 20%)
                 </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <input type="checkbox" />
                      </Col>
                      <Col sm={10}>
                        <label>
                          Semi-Flex  (50% refund upto  14 days prior to arrival From the 50% retainment Visit.mu’s mark up will be at 70% and Host will earn 30%")
                 </label>
                      </Col>
                    </Row>   <Row>
                      <Col sm={1}>
                        <input type="checkbox" />
                      </Col>
                      <Col sm={10}>
                        <label>
                          Moderate  (30% refund and cancel 10 days prior to arrival (from the 70% retained amount  I will charge 60% and Host will earn 40%))
                 </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}>
                        <input type="checkbox" value="" />
                      </Col>
                      <Col sm={10}>
                        <label>
                          Strict  (Non-refundable (It applies if you either offer Guest to either pay full or do part payment of 25% online and the remaining amount pay on arrival) - here my Markup will be 25%))
                 </label>
                      </Col>
                    </Row>



                  </FormGroup>
                  
                </CardBody>
              </Card>
			  </>
					) : ''}
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

export default Pubs;
