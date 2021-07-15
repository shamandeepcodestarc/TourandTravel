import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './beautysalon.css'
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { CheckboxToggle } from 'react-rainbow-components';
import LoaderClass from '../../loader/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
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

          function Barber() {

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
  
  const [barberInformation, setbarberInformation] = useState([]);
  const [PolicyList, setPolicyList] = useState([]);
  const [loader, setLoader] = useState(true);



  //add form for Pub
 
  const [checkTogglechildsuit, setCheckTogglechildsuit] = useState(false);
  const [checkTogglechildrate, setCheckTogglechildrate] = useState(false);
  const [checkTogglegroupbook, setCheckTogglegroupbook] = useState(false);
  const [checkTogglegroupforchild, setCheckTogglegroupforchild] = useState(false);
  const [checkToggledayrate, setCheckToggledayrate] = useState(false);
  
  const [checkTogglehalfday, setCheckTogglehalfday] = useState(false);
  const [checkTogglefullday, setCheckTogglefullday] = useState(false);

  
  const [fineprint, setfineprint] = useState("");
  
  const [musictypeoffer, setmusictypeoffer] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [getSalonInformation, setgetSalonInformation] = useState("");
  const [Catogery, setCatogery] = useState(""); 
  const [Pubcatogery, setPubcatogery] = useState(""); 
  const [district, setDistrict] = useState(""); 
   
  const [town, setTown] = useState("");  
  const [salonDescription, setsalonDescription] = useState("");
 const [Placetype, setPlacetype] = useState([]);
   
  const [mobile, setMobile] = useState("");
  const [startdeal, setstartdeal] = useState("");
  const [enddeal, setenddeal] = useState("");
  const [dealOfferning, setdealOfferning] = useState("");
  const [CatogeryError, setCatogeryError] = useState('');
  const [PlaceError, setPlaceError] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [VoucherDate, setVoucherDate] = useState(new Date());
 
  const [checkTogglediscount, setCheckTogglediscount] = useState(false);
  const [checkToggledeal, setcheckToggledeal] = useState(false);
  const [checkToggleinfant, setCheckToggleinfant] = useState(false);
  const [checkToggledealpublish, setcheckToggledealpublish] = useState(false);
 
  const [address, setaddress] = useState('');
  const [additionalinfo, setadditionalinfo] = useState('');

  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
 
 const catogeryOptions = [
    { label: 'Barber', value:"Barber"},
    { label: 'Beauty salon', value: 'Beauty salon' },
      { label: 'Wellness Center', value: 'Wellness Center' },
    { label: 'Gym', value: 'Gym'},
    { label: 'Massege', value: 'Massege'},
  ];
    	
	  
  const addFriend123 = () => {
   setIndexes(prevIndexes => [...prevIndexes, counter]);
     setCounter(prevCounter => prevCounter + 1);
   };
   const addFriend = () => {
   setIndexes(prevIndexes => [...prevIndexes, counter]);
   setCounter(prevCounter => prevCounter + 1);
   };
   const removeFriend = index => () => {
  setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
   setCounter(prevCounter => prevCounter - 1);
   };
    const handleSubmit = (evt) => {
    evt.preventDefault();
	console.log(Placetype);
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
	        place_name: placeName,
            place_address: address ,
            town: town,
            district: district,
            phone_number: mobile,
            start_date :startDate,
            end_date : endDate,
            // opening_hours: openinghours,
            category:Pubcatogery,
            place_short_description: salonDescription,
            // highlights: hightights,
            additional_info: additionalinfo,
            // post_deal_status: 1,
            // offer_deals: null,
             // what_allowed: allowed,
             // not_suitable_for: notsuitablefor,
             fine_print: fineprint,
            
	}
    axios.post(`${common.api_url}barberbeautyshop`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
            swal("Salon Added Successfully!", "success");
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
     getPolicyData();
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
     axios.get(`${common.api_url}barberbeautyshop`, config).then((response) => {
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
      
   const getPolicyData = () => {
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
    axios.get(`${common.api_url}dealPolicy`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setPolicyList(jsonPrser.data.data)
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
    axios.delete(`${common.api_url}barberbeautyshop/${id}`, config)
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
     axios.get(`${common.api_url}barberbeautyshop/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setbarberInformation(jsonPrser.data.data)
         toggle2(true)
         if(jsonPrser.data.data.id != null){
          if(jsonPrser.data.data.id != null){
            var formate = moment(jsonPrser.data.data.end_data).format('LL h:mm:ss')
            var srt1 = formate.toString();
            var countDownDate = new Date(srt1).getTime();
            console.log(countDownDate,"222222222222",srt1)
           // Update the count down every 1 second
            var x = setInterval(function() {
         
           // Get today's date and time
           var formate1 = moment(jsonPrser.data.data.end_data).format('LL h:mm:ss')
           var srt2 = formate1.toString();
           //var countDownDate = new Date(srt1).getTime();
           var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
              console.log(distance,'uuuuuuuuuuuuuu')
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
            // Output the result in an element with id="demo"
            if( document.getElementById("demo") != null){
           
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
           //  console.log(days,hours,"============",minutes,seconds)
            // If the count down is over, write some text 
            if (distance < 0) {
              clearInterval(x);
              document.getElementById("demo").innerHTML = "EXPIRED";
            }
           }
          }, 1000);
           }
         }
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
     axios.get(`${common.api_url}barberbeautyshop/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setbarberInformation(jsonPrser.data.data)
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
    axios.get(`${common.api_url}barberbeautyshop/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setgetSalonInformation(jsonPrser.data.data)
        setPlaceName(jsonPrser.data.data.place_name);
        setCatogery(jsonPrser.data.data.category);
        setMobile(jsonPrser.data.data.phone_number);
        setTown(jsonPrser.data.data.town);
              setDistrict(jsonPrser.data.data.district);
              setaddress(jsonPrser.data.data.place_address);
        console.log(getSalonInformation);
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  
 
  const UpdateSalonById = (id) => {
	    // console.log(id);
  //  var equipped = roomequipped.toString();
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
         let payload={
            place_name: placeName,
            place_address: address ,
            town: town,
            district: district,
            phone_number: mobile,
            category:Pubcatogery,
            place_short_description: salonDescription,
            // highlights: hightights,
            additional_info: additionalinfo,
            // post_deal_status: 1,
            // offer_deals: null,
             // what_allowed: allowed,
             // not_suitable_for: notsuitablefor,
             fine_print: fineprint
	}
	
	
    axios.put(`${common.api_url}barberbeautyshop/${id}`, payload, config)
      .then(res => {
        if (res) {
          toggle5(false);
		  getData()
          swal("salon Updated Successfully!", "success");
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
                    <h1 className="m-0">Beauty Salon</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add salon
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


                                  <Form onclick={() => UpdateSalonById(data.id)}>
                                    <FormGroup row>
                                   
                                      <Label htmlFor="personCapacity" sm={1}>Place Name</Label>
                                    <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="placeName"
                                          name="customSelect"
										  defaultValue={getSalonInformation.place_name}
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
                                             value={Pubcatogery.id}
											 defaultValue={getSalonInformation.category}
                                             onChange={e => setPubcatogery(e.target.value)}>
                                            <option >Select Place</option>
                                            {catogeryOptions.map((data, index) =>
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
                                          defaultValue={getSalonInformation.phone_number}
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
										    defaultValue={getSalonInformation.place_address}
                                          onChange={e => setaddress(e.target.value)}
                                        />
                                      </Col>
				  <Label htmlFor="examplePropertyName" sm={1}>Town</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="town"
                                          defaultValue={getSalonInformation.town}
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
                                           defaultValue={getSalonInformation.district}
                                           onChange={e => setDistrict(e.target.value)}              
                                        />
                                      </Col>
									</FormGroup>
                                    
                                  </Form>
                                </ModalBody>

                                <ModalFooter>
                                   <Button color="primary" className="ml-auto" onClick={() => UpdateSalonById(data.id)}>
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
                  <Col sm={10}>
                  <div id="demo"></div>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Place Name :</Label>
                  <Col sm={3}>
                    {barberInformation.place_name ?
                      barberInformation.place_name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>openingHours</Label>
                  <Col sm={3}>
                    {barberInformation.close_mu_time ?
                      barberInformation.close_mu_time
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Catogery :
                    </Label>
                  <Col sm={3}>
                    {barberInformation.category ?
                      barberInformation.category
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Mobile No. :
                    </Label>
                  <Col sm={3}>
                    {barberInformation.phone_number ?
                      barberInformation.phone_number
                      : ('Null')}
                  </Col>
              
                </FormGroup>
                 
                <h3>Address</h3>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Town :</Label>
                <Col sm={3}>
                  {barberInformation.town}

                </Col>

                  <Label className='view_head' htmlFor="hotelType" sm={1}>District  :</Label>
                  <Col sm={3}>
                    {barberInformation.district ?
                      barberInformation.district
                      : ('Null')}
                  </Col>
				    <Label className='view_head' htmlFor="hotelType" sm={1}>Address  :</Label>
                  <Col sm={3}>
                    {barberInformation.place_address ?
                      barberInformation.place_address
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
              <p>Are you sure Want To Delete {barberInformation.place_name}?
                              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
                                 </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => removeData(barberInformation.id)}>
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
				   <Label htmlFor="hotelType" sm={1}>Address</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="address"
                      name="customSelect"
                      value={address}
                      onChange={e => setaddress(e.target.value)}
                    />
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
                  </Col>

               
    </FormGroup>
	   
                <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>Town</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="town"
                      value={town}
                      onChange={e => setTown(e.target.value)}
                    />
                  </Col>
                  <Label htmlFor="hotelType" sm={1}>District</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="district"
                      name="customSelect"
                      value={district}
                      onChange={e => setDistrict(e.target.value)}
                    />
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
                  <Col sm={2}>

										      <CustomInput
                                             type="select"
                                             name="customSect"
                                             id={"exampleCustomMutlipleSelect"}
                                             value={Pubcatogery.id}
                                             onChange={e => setPubcatogery(e.target.value)}>
                                            <option >Select Place</option>
                                            {catogeryOptions.map((data, index) =>
                                         <option key={index} value={data.value}>{data.label}</option>
                                         )};
                                        </CustomInput>
                    {CatogeryError != '' ? (
                      <Label style={{ color: "red" }}>
                        {CatogeryError}
                      </Label>
                    ) : null}
                  </Col>    
              
                <Label htmlFor="exampleTitle" sm={2}>Write a short discription about palce</Label>
                                 <Col sm={3}>
                    <Input
                      type="textarea"
                      name="additionalinfo"
                      id="additionalinfo"
                      value={salonDescription}
                      onChange={e => setsalonDescription(e.target.value)}
                    />
                  </Col>   
               <Label htmlFor="examplePropertyName" sm={1}>Additional Information</Label>
                  <Col sm={3}>
                    <Input
                      type="textarea"
                      name="additionalinfo"
                      id="additionalinfo"
                      value={additionalinfo}
                      onChange={e => setadditionalinfo(e.target.value)}
                    />
                  </Col>                 
              
         
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
            <Label htmlFor="hotelType" sm={1}>What are you offerning with this deal .</Label>
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
                          <Label><input type="checkbox" value="yes" />
             Children allowed - Suitable for Kids </Label> 
                      </Col>
    
              <Label htmlFor="PoliceStation" sm={2}>Age From</Label>
              <Col sm={2}>
                <Input type="number"
                  name="child_pay"
                  id="child_pay"
                  placeholder="" />
    
              </Col> 	<Label htmlFor="PoliceStation" sm={1}>Age To</Label>
              <Col sm={2}>
                <Input type="number"
                  name="child_pay"
                  id="child_pay"
                  placeholder="" />
              </Col>
              <Col sm={5}>
              <Label>if no why </Label>
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
                    <Card>
                    <CardBody>
                    <h3>Deal Duration</h3>
                      <FormGroup row>
                      <Col sm={3}>
                       <DatePicker
                       id="datestartpicker"
                        placeholderText="Select Start Date"
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mmaa"
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}
                    />
                    </Col>
                    <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                    <Col sm={3}>
                    <DatePicker
                     id="datestartpicker"
                      placeholderText="Select End Date"
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mmaa"
                      selected={endDate}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      onChange={date => setEndDate(date)}
                    />
                    </Col> 
                    <Label htmlFor="personCapacity" sm={2}>When does the voucher need to be used by: Date before Time</Label>
                    <Col sm={3}>
                    <DatePicker
                     id="datestartpicker"
                     selected={VoucherDate} 
                     onChange={(date) => setVoucherDate(date)} />
                    </Col> 
                      </FormGroup>
                    </CardBody>
                    </Card>
    
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
                                <Label htmlFor="PoliceStation" sm={4}>Infant</Label>
                                <Col sm={1}>
                          <CheckboxToggle
                            value={checkToggleinfant}
                            onChange={e => setCheckToggleinfant(checkToggleinfant == false ? true : false)}
                         />
                        </Col>
                        </FormGroup>
                        {checkToggleinfant == true ? (
                            <>
                              <FormGroup row>
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
                        </>
                  ) : ''}
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Label for="policy" sm={3}><h3>Cancellation Policy </h3></Label>
                      <FormGroup>
                      <Row>
                      <Col sm={10}>
                    <Label sm={3}>Please select a cancellation option you wish to offer:</Label>
                    </Col></Row>
                        <Row>
                        {PolicyList.map((data, index) =>
                          <Col key={index} sm={10}>
                       <Label style={{marginLeft:"40px"}}><input type="checkbox"/>{data.description}</Label>
                        </Col>
                        )}
                        </Row>
                      </FormGroup> 
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <FormGroup>
                        <Row>
                          <Col sm={4}></Col>
                          <h3 className="property_head text-center">You are one step closer to publish your Listing!</h3>
                        </Row>
                        <br />
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={10}>
                            <p>We will review your Listing and once it is approved by our team you are good to go Live!  Once your Listing goes Live, Guests will be able to book straight away and you will start making sales.
                        </p>
                          </Col>
                        </Row>
                      </FormGroup>
                    </CardBody>
                  </Card>
                  <br />
                  <Card>
                    <CardBody>
                      <FormGroup>
                        <Row>
                          <Col sm={4}></Col>
                          <h3 className="property_head text-center"> Rules, Laws and Taxes</h3>
                        </Row>
                        <br />
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={10}>
                            <p>
                              Please make sure that you are upto date with the laws in the country where you are listing your services.   </p>
    
                            <p>You are responsible with the decision for your listing, and to make sure that we are working in a fully trusted environment with all our users on this platform we require to review your listings before it goes live.  You are also advised to collect and remit your taxes in your respective countries where applicable.  </p>
    
                            <p>It is forbidden to encourage a Guest to go-past the Visit.mu platform and to book directly from you, or from your business website. </p>
                            <p>Please do not share any email address, phone numbers or website URL on any of your email exchanges or even on your Listings.</p>
                            <p> Once a Booking is confirmed your details will automatically be shared with the Guests. </p>
                            <p> All work is done in full transparency and all messages are filtered and monitored.  Sometimes you will be tested by  random Guests to check if you are following the rules.   </p>
    
                            <p>By accepting the Terms and conditions, you agree that you will comply with the applicable laws and regulations in the country where your services are listed, and to our rules.
    
                        </p>
                          </Col>
                        </Row>
                      </FormGroup>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <FormGroup>
                        <Row>
                          <Col sm={4}></Col>
                          <h3 className="property_head text-center">And Finally… </h3>
                        </Row>
                        <br />
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={10}>
                            <p>We are reviewing your Listing and once it is completed you will be informed through email and your Listing will go Live.</p>
    
                            <p>You can add, edit, delete your Listing or settings by going in the Dashboard anytime! </p>
                            <p>Read our FAQ, and if you have questions or feel free to email us  or Chat to one of our agent.</p>
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

export default Barber;
