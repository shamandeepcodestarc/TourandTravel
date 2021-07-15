import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './restautent.css';
import Select from 'react-select';
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { CheckboxToggle } from 'react-rainbow-components';
import LoaderClass from '../../loader/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
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

          function Restourent() {

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

		  
  const RestorentCatogery = [
    { label: 'Fine dining', value: 1 },
    { label: ' Family style', value: 2 },
    { label: 'Casual dining', value: 3 },
    { label: 'Contemporary casual', value: 4 },
    { label: 'Fast casual', value: 5 },
    { label: 'Fast food', value: 6 },
    { label: 'Cafe', value: 7 },
    { label: 'Buffet', value: 8 },
    { label: 'Street Food', value: 9 },
  ];

  const [loader, setLoader] = useState(true);
  const [checkTogglediscount, setCheckTogglediscount] = useState(false);
  const [checkToggleDeal, setcheckToggleDeal] = useState(false);
  
  const [checkTogglechildsuit, setCheckTogglechildsuit] = useState(false);
  const [checkTogglechildrate, setCheckTogglechildrate] = useState(false);
  const [checkTogglegroupbook, setCheckTogglegroupbook] = useState(false);
  const [checkTogglegroupforchild, setCheckTogglegroupforchild] = useState(false);
  const [checkToggledayrate, setCheckToggledayrate] = useState(false);
  
  const [checkTogglehalfday, setCheckTogglehalfday] = useState(false);
  const [checkTogglefullday, setCheckTogglefullday] = useState(false);
  const [checkToggleDessert, setcheckToggleDessert] = useState(false);
  const [checkToggleMain, setcheckToggleMain] = useState(false);
  const [checkToggleStarter, setCheckToggleStarter] = useState(false);
  const [checkToggleOther, setCheckToggleOther] = useState(false);
   
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [notify1, setNotify1] = useState(false);
  const [checkTogglefoods, setcheckTogglefoods] = useState(false);

  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);


  const [list, setList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [Catorey, setCatorey] = useState([]);
  const [ReatourentInformation, setReatourentInformation] = useState([]);
  const [PolicyList, setPolicyList] = useState([]);
  const [RestourentType, setRestourentType] = useState([]);
  const [singlePlace, setsinglePlace] = useState([]);

  //add form for Restourent
  
  // const [musictypeoffer, setmusictypeoffer] = useState("");
  const [propertyNameErr, setPropertyNameErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [RestorentCat, setRestorentCat] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [district, setDistrict] = useState(""); 
  const [GetRestInformation, setGetRestInformation] = useState("");
  const [town, setTown] = useState("");
  const [checkToggledrink, setcheckToggledrink] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);
  const [Allowvalue,setAllowvalue] = useState("");
  const [EventsAllowvalue,setEventsAllowvalue] = useState("");

 
  const [checkfoodMenu, setcheckfoodMenu] = useState("");
  const [PlaceAddress, setPlaceAddress] = useState("");
  const [Foodcuisine, setFoodcuisine] = useState([]);
  const [RestaurentShortDistcription, setRestaurentShortDistcription] = useState("");
  
  const [mobile, setMobile] = useState("");
  const [dessert, setdessert] = useState("");
  const [AdditionalInromation, setAdditionalInromation] = useState("");
  const [Adddessertmenu, setAdddessertmenu] = useState("");
  const [AddMainmenu, setAddMainmenu] = useState("");
  const [AddStartermenu, setAddStartermenu] = useState("");
  const [AddOthermenu, setAddOthermenu] = useState("");
  //const [AddOthermenu, setAddOthermenu] = useState("");
  
  const [PlaceErrors, setPlaceErrors] = useState('');
  const [AdressError, setAdressError] = useState('');
  const [townError, settownError] = useState('');
  const [districtError, setdistrictError] = useState('');
  const [DisccriptionError, setDisccriptionError] = useState('');
  const [mobileError, setmobileError] = useState('');
  const [ids, setids] = useState('');
  const [dealOfferning, setdealOfferning] = useState("");
  const [fineprint, setfineprint] = useState("");
  
  const [CatogeryError, setCatogeryError] = useState('');
  const [AdditionError, setAdditionError] = useState('');
  const [singlePlacegetCatogery, setplaceCatogery] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [VoucherDate, setVoucherDate] = useState(new Date());
  const [whatIsAllowCheckbox ,setwhatIsAllowCheckbox] = useState(false);
   
  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  const [restnameError, setRestnameError] = useState('');
  const [AddFoodMenu, setAddFoodMenu] = useState("");
  const [ShortDescriptionDrink, setShortDescriptionDrink] = useState("");
  const [Allergens, setAllergens] = useState("");
  const [AdultWillPay, setAdultWillPay] = useState("");
  const [GuestsFrom, setGuestsFrom] = useState("");
  const [GuestsTo, setGuestsTo] = useState("");
  const [GuestsPay, setGuestsPay] = useState("");
  const [HalfDayFrom, setHalfDayFrom] = useState("");
  const [HalfDayTo, setHalfDayTo] = useState("");
  const [FullDayFrom, setFullDayFrom] = useState("");
  const [FullDayTO, setFullDayTo] = useState("");
  const [SuitableAgeFrom, setSuitableAgeFrom] = useState("");
  const [SuitableAgeTo, setSuitableAgeTo] = useState("");
  const [SuitableAgeWhy, setSuitableAgeWhy] = useState("");
  const [ChildFrom, setChildFrom] = useState("");
  const [ChildAgeFrom, setChildAgeFrom] = useState("");
  const [ChildTo, setChildTo] = useState("");
 
	  const FoodcuisineOptions = [
    { label: 'Creole', value: 1 },
    { label: 'English', value: 2 },
      { label: 'Indian', value: 3 },
    { label: 'Mauritian', Italain: 4},
	{ label: 'Chinese', value: 5 },
    { label: 'Japanese', value: 6 },
      { label: 'Grill', value: 7},
    { label: 'French', Italain: 8},
	{ label: 'Fusion', value: 9 },
    { label: 'American', value: 10 },
      { label: 'Seafood', value: 11 },
    { label: 'StreetFood', Italain: 12},
	{ label: 'Mixed', value: 13 },
    { label: 'Thai', value: 14 },
      { label: 'Greek', value: 15 },
    { label: 'Middle East', Italain: 17},
	{ label: 'Turkish', value: 18 },
    { label: 'Mexican', value: 19},
      { label: 'South African', value: 20 },
    { label: 'Moroccan', Italain: 21},
	{ label: 'Spanish', value: 22 },
    { label: 'Fast Food', value: 23 },
      { label: 'Vegetarian', value: 24 },
    { label: 'Sandwich', Italain: 26},
    { label: 'Vegan', Italain: 27},
    { label: 'Pescatarian', Italain: 28},
    { label: 'Pastry', Italain: 29},
  ];
  
  
	  const DrinkOptions = [
    { label: 'Alcohalic', value: 1 },
    { label: 'Non-alcohalic', value: 2 },
    
  ];
  var whatIsAllowData = new Array();
  function myFunction() {
    debugger
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("allowinputbox");
    if (checkBox.checked ){
      text.disabled = false;
      var Allowvaluedata = text.value;
      whatIsAllowData.push(Allowvaluedata);
    }
    console.log(whatIsAllowData,'=========')
  }
  var whatIsAllowData = new Array();
  function myFunctionEvent() {
    debugger
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("EventAllowedbox");
    if (checkBox.checked ){
      text.disabled = false;
      var EventAllowvaluedata = text.value;
      whatIsAllowData.push(EventAllowvaluedata);
    }
    console.log(whatIsAllowData,'=========')
  }
  const whatIsAllow=(e)=>{
    debugger
    myFunction();
    setwhatIsAllowCheckbox(!whatIsAllowCheckbox)
    var chks = $("input[type=checkbox][name=whatIsAllowed]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
          whatIsAllowData.push(chks[i].value)
         // parant_car.toString();
        }
      } 
      console.log(whatIsAllowData)
  }

  const emptySetVariable = () => {
	  setAdressError(' ');
	  settownError(' ');
	  setmobileError(' ');
	  setCatogeryError(' ');
	  setDisccriptionError(' ');
	  setAdditionError(' ');
	  setPlaceErrors(' ');
	  setdistrictError(' ');
  }

  const handleFacilities = (e) => {
    setFoodcuisine(Array.isArray(e) ? e.map(x => x.value) : []);
  }
	  const handleSubmit = (evt) => {
    evt.preventDefault();
    whatIsAllow();
    var Foodcuisinestr = Foodcuisine.toString();
	console.log(RestourentType);
     // const isValid=FormValidation();
     emptySetVariable();
	  if (PlaceAddress == '') {
     setAdressError('address is required!');
     return;
     }
     if (town == '') {
     settownError('town is required!');
     return;
     }

     if (placeName == '') {
     setPlaceErrors('PlaceName is required!');
     return;
     }
     if (mobile == '') {
     setmobileError('PhoneNumber is required!');
     return;
     }
     if (RestorentCat == '') {
     setCatogeryError('Catogery is required!');
     return;
     }
	  if (RestorentCat == '') {
     setCatogeryError('Catogery is required!');
     return;
     }
	 if (district == '') {
     setdistrictError('District is required!');
     return;
     }
	 if (AdditionalInromation == '') {
     setAdditionError('Infromation is required!');
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
            place_name: placeName,
            place_address:PlaceAddress,
            town: town,
            district: district,
            phone_number: mobile,
            // opening_hours: openinghours,
            restaurant_category: RestorentCat,
            food_cuisine_category: Foodcuisinestr,
            place_short_description: RestaurentShortDistcription,
            // food_menu_status: 1,
            //food_menu: foodMenuOptions,
            // dessert_status: 1,
            dessert: Adddessertmenu,
            // drinks_status: 1,
            drinks: checkToggledrink,
            additional_info: AdditionalInromation,
            allergens:Allergens,
            offerning:dealOfferning,
            AdultWillPay:AdultWillPay,
            VoucherDate:VoucherDate,
            AddMainmenu:AddMainmenu,
            AddOthermenu:AddOthermenu,
            AddStartermenu:AddStartermenu,
            ShortDescriptionDrink:ShortDescriptionDrink,
            checkTogglefoods:checkTogglefoods,
            guests_from:GuestsFrom,
            guests_to:GuestsTo,
            guests_pay:GuestsPay,
            checkTogglegroupforchild:checkTogglegroupforchild,
            half_day_time_from:HalfDayFrom,
            half_day_time_to:HalfDayTo,
            full_day_time_from:FullDayFrom,
            full_day_time_to:FullDayTO,
            suitablechild_age_from:SuitableAgeFrom,
            suitablechild_age_to:SuitableAgeTo,
            suitablechild_age_why:SuitableAgeWhy,
            EventsAllowvalue:EventsAllowvalue,
            child_age_from:ChildFrom,
            child_age_to:ChildAgeFrom,
            ChildTo:ChildTo,
	}


    axios.post(`${common.api_url}restaurentcoffee`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
            swal("Restaurent Added Successfully!", "success");
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
     axios.get(`${common.api_url}restaurentcoffee`, config).then((response) => {
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
    console.log(token);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.delete(`${common.api_url}restaurentcoffee/${id}`, config)
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
     axios.get(`${common.api_url}restaurentcoffee/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setReatourentInformation(jsonPrser.data.data)
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
     axios.get(`${common.api_url}restaurentcoffee/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setReatourentInformation(jsonPrser.data.data)
         setids(jsonPrser.data.data.id)
		   toggle4(true)
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
    axios.get(`${common.api_url}restaurentcoffee/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetRestInformation(jsonPrser.data.data);
		  setPlaceAddress(jsonPrser.data.data.place_address);
      setids(jsonPrser.data.data.id)
		  setTown(jsonPrser.data.data.town);
		  setDistrict(jsonPrser.data.data.district);
		  setRestourentType(jsonPrser.data.data.restaurant_category);
		  setMobile(jsonPrser.data.data.phone_number);
        console.log(jsonPrser.data.data.phone_number);
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  

  const UpdateRestourentById = (id) => {
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
         category: RestorentCat,
         place_address: PlaceAddress,
	       district:district
	       }
	
	
    axios.put(`${common.api_url}restaurentcoffee/${ids}`, payload, config)
      .then(res => {
        if (res) {
          toggle5(false);
          swal("Pub Updated Successfully!", "success");
          getData()
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
                    <h1 className="m-0">Restaurent</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add Restuarent
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
                              <th></th>
                              <th></th>
                            <th></th>
                            <th></th>

                            <th></th>
                          </tr>
                          <tr>
                            <th>Sl</th>
                            <th>Action</th>
                            <th>Mobile</th>
							  <th>Town</th>
                            <th>Place Address</th>
                            <th>PlaceName</th>
                            <th></th>
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
                                <ModalHeader toggle={toggle5}>Edit Restaurent</ModalHeader>
                                <ModalBody>


                                  <Form onclick={() => UpdateRestourentById(data.id)}>
                                    <FormGroup row>
                                   
                                      <Label htmlFor="personCapacity" sm={1}>Place Name</Label>
                                    <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="placeName"
                                          name="customSelect"                                   
                                        // defaultValue={post.title}
										  defaultValue={GetRestInformation.place_name}
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
                                             value={RestorentCat.id}
											 defaultValue={GetRestInformation.RestorentCatogery}
                                             onChange={e => setRestorentCat(e.target.value)}>
                                            <option >Select Place</option>       
                                            {RestorentCatogery.map((data, index) =>
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
                                          defaultValue={GetRestInformation.phone_number}
                                          value={mobile}
                                          onChange={e => setMobile(e.target.value)}
                                        />
                                      </Col>
                                    </FormGroup>
									<FormGroup row>
                                      <Label htmlFor="examplePropertyName" sm={1}>Town</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="town"
                                          defaultValue={GetRestInformation.town}
                                          value={town}
                                          onChange={e => setTown(e.target.value)}

                                        // value={dob}
                                        />
                                      </Col>
                                      <Label htmlFor="personCapacity" sm={1}>District
                            </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="district"
										  value={district}
                                          onChange={e => setDistrict(e.target.value)}
                                           defaultValue={GetRestInformation.place_address}
                                           
                                        />
                                      </Col>
                                     <Label htmlFor="personCapacity" sm={1}>Place Address
                            </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="district"
										  value={PlaceAddress}
                                          onChange={e => setPlaceAddress(e.target.value)}
                                           defaultValue={GetRestInformation.place_address}
                                           
                                        />
                                      </Col>
                                      
                                    </FormGroup>
                                  </Form>
                                </ModalBody>

                                <ModalFooter>
                                   <Button color="primary" className="ml-auto" onClick={() => UpdateRestourentById(data.id)}>
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
            <ModalHeader toggle={toggle2}>Information Of Restaurent</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Place Name :</Label>
                  <Col sm={3}>
                    {ReatourentInformation.place_name ?
                      ReatourentInformation.place_name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>openingHours</Label>
                  <Col sm={3}>
                    {ReatourentInformation.opening_hours ?
                      ReatourentInformation.opening_hours
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                   Restaurent Catogery :
                    </Label>
                  <Col sm={3}>
                    {ReatourentInformation.RestorentCatogery ?
                      ReatourentInformation.RestorentCatogery
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Mobile No. :
                    </Label>
                  <Col sm={3}>
                    {ReatourentInformation.phone_number ?
                      ReatourentInformation.phone_number
                      : ('Null')}
                  </Col>
              
                </FormGroup>
                 
             <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Town :</Label>
                <Col sm={3}>
                  {ReatourentInformation.town}

                </Col>

                  <Label className='view_head' htmlFor="hotelType" sm={1}>PlaceAddress  :</Label>
                  <Col sm={3}>
                    {ReatourentInformation.place_address ?
                      ReatourentInformation.place_address
                      : ('Null')}
                  </Col>
				  <Label className='view_head' htmlFor="hotelType" sm={1}>District  :</Label>
                  <Col sm={3}>
                    {ReatourentInformation.district ?
                      ReatourentInformation.district
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
            <ModalHeader toggle={toggle4}>Delete Restuarent</ModalHeader>
            <ModalBody>
              <p>Are you sure Want To Delete {ReatourentInformation.place_name}?
                              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
                                 </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => removeData(ReatourentInformation.id)}>
                Delete
                               </Button>
            </ModalFooter>
          </Modal>


 

          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle3}>Add Restaurent</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>Place Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="placeName"
                      name="customSelect"
                      value={placeName}
                      onChange={e => setPlaceName(e.target.value)}
                    />
					 {PlaceErrors != '' ? (
                      <Label style={{ color: "red" }}>
                        {PlaceErrors}
                      </Label>
                    ) : null}
                  </Col>
				  
				    
                  <Label htmlFor="hotelType" sm={1}>Place Address</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="PlaceAddress"
                      name="customSelect"
                      value={PlaceAddress}
                      onChange={e => setPlaceAddress(e.target.value)}
                    />
					{AdressError != '' ? (
                      <Label style={{ color: "red" }}>
                        {AdressError}
                      </Label>
                    ) : null}
                  </Col>
             
				  <Label htmlFor="personCapacity" sm={1}>Town</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="town"
                      value={town}
                      onChange={e => setTown(e.target.value)}
                    />
					{townError != '' ? (
                      <Label style={{ color: "red" }}>
                        {townError}
                      </Label>
                    ) : null}
                  </Col>
				  
				  </FormGroup>
				  <FormGroup row>
				  <Label htmlFor="hotelType" sm={1}>District</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="district"
                      name="customSelect"
                      value={district}
                      onChange={e => setDistrict(e.target.value)}
                    />
					 {districtError != '' ? (
                      <Label style={{ color: "red" }}>
                        {districtError}
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
					{mobileError != '' ? (
                      <Label style={{ color: "red" }}>
                        {mobileError}
                      </Label>
                    ) : null}
                  </Col>
    </FormGroup>
	 
                 <FormGroup>
                    <Row>

                      <Label htmlFor="exampleTitle" sm={2}>Opening Hours</Label>
                    
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
				         <Label htmlFor="exampleCustomMutlipleSelect" sm={2}>
                   Restaurent Catogery
                    </Label>
                  <Col sm={2}>

	                            <CustomInput
                                type="select"
                                name="customSect"
                                id={"exampleCustomMutlipleSelect"}
                                 value={RestorentCat.id}
                                             onChange={e => setRestorentCat(e.target.value)}>
                                            <option >Select Place</option>
                                            {RestorentCatogery.map((data, index) =>
                                         <option key={index} value={data.value}>{data.label}</option>
                                         )};
                                        </CustomInput>
										</Col>
										{CatogeryError != '' ? (
									  <Label style={{ color: "red" }}>
										{CatogeryError}
									  </Label>
									) : null}
										<Label htmlFor="exampleTitle" sm={3}>You can now add your food cuisine menu </Label>
                    <Col sm={2}>
                           <Select
                          className="dropdownbed"
                          placeholder="Select Option"
                          value={FoodcuisineOptions.filter(obj => Foodcuisine.includes(obj.value))} // set selected values
                          options={FoodcuisineOptions} // set list of the data
                          onChange={handleFacilities} // assign onChange functioAddmoreOptions
                          isMulti
                          isClearable
                          />
                        </Col>
                                  
				  </FormGroup>
				  <FormGroup row>
				  <Label htmlFor="exampleTitle" sm={4}>Write a short discription about Restaurent Or Coffee Shop.</Label>	
							  <Col sm={3}>
                                      <Input type="textarea"
                                        name="restoShortDescrip"
                                        id="exampleExample"
                                        value={RestaurentShortDistcription}
                                        onChange={e => setRestaurentShortDistcription(e.target.value)} />
											{DisccriptionError!= '' ? (
								  <Label style={{ color: "red" }}>
									{DisccriptionError}
								  </Label>
								) : null}
                                    </Col>
								
									 <label sm={2}>Add additional information</label>
                <Col sm={3}>
                                      <Input type="textarea"
                                        name="restoShortDescrip"
                                        id="exampleExample"
                                        value={AdditionalInromation}
										placeholder = "for e.g We offer take away We offer free home delivery"
                                        onChange={e => setAdditionalInromation(e.target.value)} />
								{AdditionError != '' ? (
									  <Label style={{ color: "red" }}>
										{AdditionError}
									  </Label>
									) : null}
								</Col>
								
								  </FormGroup>
								  
								  <FormGroup>
                    <Row>

                      <Label htmlFor="exampleTitle" sm={2}>Food Serving timing</Label>
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
                    <Label htmlFor="exampleTitle" sm={4}>Please state if there are any allergens concerns in your food:</Label>
                      <Col sm={6}>
                        <Input type="textarea"
                        name="allergens "
                        id="allergens "
                        value={Allergens}
                        onChange={e=>setAllergens(e.target.value)}

                        placeholder="For e.g Prepared/ Handled in a facility that handles  celery, cereals containing gluten (such as barley and oats), crustaceans (such as prawns, crabs and lobsters), eggs, fish, lupin, milk, molluscs (such as mussels and oysters), mustard, peanuts, sesame, soybeans, sulphur dioxide and sulphites Kosher food available, Gluten-free option available, lactose/ dairy-free, Vegan, Vegetarian food also available " />
                    </Col>
                      </FormGroup>
                  </FormGroup>
                  <FormGroup row>	
				  
                  <Label htmlFor="examplePropertyName" sm={2}>Do you want to add food menu. ?</Label>
				   <Col sm={1}>
                  <CheckboxToggle
                    value={checkTogglefoods}
                    onChange={e => setcheckTogglefoods(checkTogglefoods == false ? true : false)}

                  />          
             </Col>
          </FormGroup>
				    {checkTogglefoods == true ? (
                        <>
                    <FormGroup row>
			      <Label htmlFor="examplePropertyName" sm={2}>Do you have a dessert . ?</Label>
				      <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleDessert}
                    onChange={e => setcheckToggleDessert(checkToggleDessert == false ? true : false)}

                  />          
                   </Col>
						
                      {checkToggleDessert == true ? (
                        <>
                   
                        <Label htmlFor="exampleTitle" sm={2}>You can add your dessert menu.</Label>
												
                      <Col sm={3}>
                        <Input type="textarea"
                          name="Adddessertmenu"
                          id="desmenuid"
                          value={Adddessertmenu}
                          onChange={e => setAdddessertmenu(e.target.value)} />
                      </Col>
            
                        </>
                        ) : ''}  
			</FormGroup>
      <FormGroup row>
			      <Label htmlFor="examplePropertyName" sm={2}>Do you have a Main Menu. ?</Label>
				      <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleMain}
                    onChange={e => setcheckToggleMain(checkToggleMain == false ? true : false)}

                  />          
                   </Col>
						
                      {checkToggleMain == true ? (
                        <>
                   
                        <Label htmlFor="exampleTitle" sm={2}>You can add your Main menu.</Label>
												
                      <Col sm={3}>
                        <Input type="textarea"
                          name="Adddessertmenu"
                          id="desmenuid"
                          value={AddMainmenu}
                          onChange={e => setAddMainmenu(e.target.value)} />
                      </Col>
            
                        </>
                        ) : ''}  
			</FormGroup>
      <FormGroup row>
			      <Label htmlFor="examplePropertyName" sm={2}>Do you have a Starter Menu. ?</Label>
				      <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleStarter}
                    onChange={e => setCheckToggleStarter(checkToggleStarter == false ? true : false)}

                  />          
                   </Col>
						
                      {checkToggleStarter == true ? (
                        <>
                   
                        <Label htmlFor="exampleTitle" sm={2}>You can add your Starter menu.</Label>
												
                      <Col sm={3}>
                        <Input type="textarea"
                          name="Adddessertmenu"
                          id="desmenuid"
                          value={AddStartermenu}
                          onChange={e => setAddStartermenu(e.target.value)} />
                      </Col>
            
                        </>
                        ) : ''}  
			</FormGroup>
      <FormGroup row>
			      <Label htmlFor="examplePropertyName" sm={2}>Do you have a Other Menu. ?</Label>
				      <Col sm={1}>
                  <CheckboxToggle
                    value={checkToggleOther}
                    onChange={e => setCheckToggleOther(checkToggleOther == false ? true : false)}

                  />          
                   </Col>
						
                      {checkToggleOther == true ? (
                        <>
                   
                        <Label htmlFor="exampleTitle" sm={2}>You can add your Other menu.</Label>
												
                      <Col sm={3}>
                        <Input type="textarea"
                          name="Adddessertmenu"
                          id="desmenuid"
                          value={AddOthermenu}
                          onChange={e => setAddOthermenu(e.target.value)} />
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
				
						<label  htmlFor="exampleTitle" sm={1}>
                            Any additional Information about Drinks:
                        </label>
                      <Col sm={2}>
                        <Input type="textarea"
                          name="ShortDescriptionDrink"
                          id="ShortDescriptionDrink"
						              value={ShortDescriptionDrink}
                          onChange={e => setShortDescriptionDrink(e.target.value)}
                          placeholder="Any Additional information Minors need to be accompanied by an adult Only Guests who meet the legal drinking age will be served alcohalic beherages  Add more" />
                      </Col>
                 
					
                  </>
                  ) : ''}
				 
					   </FormGroup>
  
				<FormGroup row>
				
				<Label sm={2}>Do you want a publish a deal.</Label>
                    <Col sm={1}>
                      <CheckboxToggle
                        value={checkToggleDeal}
                        onChange={e => setcheckToggleDeal(checkToggleDeal == false ? true : false)}    />
                    </Col>					
			</FormGroup>
            {checkToggleDeal == true ? (
                <>
                  <h3>Deal Duration</h3>
			    <FormGroup row>
          <Label htmlFor="personCapacity" sm={1}>Start Deal</Label>
          <Col sm={2}>
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
                    
                      <label><input  type="checkbox" id="myCheck" onClick={myFunction}/>
                         Smoking allowed:
                       </label>
                       
                    </Col>
                    <Col sm={5}>
                      <Input type="text"
                        name="allowinputbox"
                        id="allowinputbox"
                        value={Allowvalue}
                        onChange={e=>setAllowvalue(e.target.value)}
                        placeholder="If yes,mentioned where can they smoke." />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col sm={4}>
                    <label><input  type="checkbox" id="myCheck" onClick={myFunctionEvent}/>

          Events or parties allowed :
                        </label>
                    </Col>
                    <Col sm={5}>
                      <Input type="text"
                        name="EventAllowedbox"
                        id="EventAllowedbox"
                        value={EventsAllowvalue}
                        onChange={e=>setEventsAllowvalue(e.target.value)}
                        placeholder="If checked, Tell us what are the quiet hours ." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={4}>
                    <label><input type="checkbox" name='whatIsAllowed' checked={whatIsAllowCheckbox[2]} value="  Guests can receive Visitors" />
          Guests can receive Visitors
                        </label>
                    </Col>

                  </FormGroup>
                  <FormGroup row>
                    <Col sm={4}>
                    <label><input type="checkbox" name='whatIsAllowed' checked={whatIsAllowCheckbox[3]} value=" You are responsible to keep anything that you're provided with in the host in the same condition.  If there is any damage to the property or to any of the items you will be asked to pay for it" />
                      You are responsible to keep anything that you're provided with in the host in the same condition.  If there is any damage to the property or to any of the items you will be asked to pay for it:
                        </label>
                    </Col>

                  </FormGroup>

                  <FormGroup row>
                    <Col sm={4}>
                    <label><input type="checkbox" name='whatIsAllowed' checked={whatIsAllowCheckbox[4]} value=" Children allowed - Suitable for Kids" />
                  Children allowed - Suitable for Kids </label>
                          </Col>

                  <Label sm={2}>Age From</Label>
                  <Col sm={2}>
                    <Input type="number"
                      name="child_pay"
                      id="child_pay"
                      value={SuitableAgeFrom}
                      onChange={e=>setSuitableAgeFrom(e.target.value)}
                      placeholder="" />

                  </Col> 	<Label sm={1}>Age To</Label>
                  <Col sm={2}>
                    <Input type="number"
                      name="child_pay"
                      id="child_pay"
                      value={SuitableAgeTo}
                      onChange={e=>setSuitableAgeTo(e.target.value)}
                      placeholder="" />
                  </Col>
                  <Col sm={5}>
                  <Label>if no why </Label>
                  <Input type="text"
                    name="rulekidsAge"
                    id="rulekidsAge"
                    value={SuitableAgeWhy}
                    onChange={e=>setSuitableAgeWhy(e.target.value)}
                    placeholder="If no why, Tell us  ." />
                </Col>
                {/* <input value="add" id="newid" onClick={whatIsAllow} type="button"/> */}
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
                        value={AdultWillPay}
                        onChange={e=>setAdultWillPay(e.target.value)}
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
                                value={ChildFrom}
                                onChange={e=>setChildFrom(e.target.value)}
                                placeholder="" />

                            </Col> 	<Label htmlFor="PoliceStation" sm={1}>Per night</Label>
                            <Label htmlFor="PoliceStation" sm={1}>Age from</Label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                value={ChildAgeFrom}
                                onChange={e=>setChildAgeFrom(e.target.value)}
                                placeholder="" />

                            </Col><label>To</label>
                            <Col sm={2}>
                              <Input type="number"
                                name="child_pay"
                                id="child_pay"
                                value={ChildTo}
                                onChange={e=>setChildTo(e.target.value)}
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
                            value={GuestsFrom}
                            onChange={e=>setGuestsFrom(e.target.value)}
                            placeholder="No. of guests" />

                        </Col> <Label htmlFor="PoliceStation" sm={0}> To </Label>
                        <Col sm={2}>
                          <Input type="number"
                            name="child_pay"
                            id="child_pay"
                            value={GuestsTo}
                            onChange={e=>setGuestsTo(e.target.value)}
                            placeholder="No. of guests" />

                        </Col>
                        <Label htmlFor="PoliceStation" sm={1}>Pay</Label>
                        <Col sm={2}>
                          <Input type="number"
                            name="child_pay"
                            id="child_pay"
                            value={GuestsPay}
                            onChange={e=>setGuestsPay(e.target.value)}
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
                                    value={HalfDayFrom}
                                    onChange={e=>setHalfDayFrom(e.target.value)}
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
                                    value={HalfDayTo}
                                    onChange={e=>setHalfDayTo(e.target.value)}
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
                                    value={FullDayFrom}
                                    onChange={e=>setFullDayFrom(e.target.value)}
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
                                    value={FullDayTO}
                                    onChange={e=>setFullDayTo(e.target.value)}
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
                      <h3 className="property_head text-center">Rules, Laws and Taxes</h3>
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

export default Restourent;
