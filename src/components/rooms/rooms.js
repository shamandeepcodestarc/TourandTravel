import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import common from "../../common/common";
import LoaderClass from '../../loader/loader'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FormGroup,
  Input,
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
import './rooms.css';
function Rooms(props) {
  
  // if (state == true) { toggle3(true) } else { '' }
  const roomOptions = [
    { label: 'Small Single Room ', value: 1 },
    { label: 'Standard Single Room', value: 2 },
    { label: 'Small Double Room', value: 3 },
    { label: 'Standard Double Room ', value: 4 },
    { label: 'superior Double Room  ', value: 5 },
    { label: 'SmallTwin Room', value: 6 },
    { label: 'Superior Twin Room', value: 7 },
    { label: 'Standard Twin Room', value: 8 },
    { label: 'Standard King Room ', value: 9 },
    { label: 'Superior King Room', value: 10 },
    { label: 'Standard Queen Room', value: 11 },
    { label: 'Superior Queen Room', value: 12 },
    { label: 'Family Room', value: 13 },
    { label: 'Dorm', value: 14 }
  ];

  const ViewOptions = [
    { label: 'with Garden View', value: 1 },
    { label: 'with Sea View', value: 2 },
    { label: 'with Pool View', value: 3 },
    { label: 'with Mountain View', value: 4 },
    { label: 'with City View', value: 5 },
    { label: ' with Sunset View', value: 6 },
    { label: 'with View', value: 7 },
    { label: 'with Landmark view', value: 8 },
    { label: 'with Lake View', value: 9 },
    { label: 'with River View', value: 10 },
  ];

  const bedOptions = [
    { label: 'Single Bed(s)', value: 1 },
    { label: 'Double Bed(s)', value: 2 },
    { label: 'Twin Bed(s', value: 3 },
    { label: 'Triple Bed(s)', value: 4 },
    { label: 'Quad Bed(s)', value: 5 },
    { label: 'King Bed(s)', value: 6 },
    { label: 'Queen Bed(s)', value: 7 },
    { label: 'Fold-up Bed(s)', value: 8 },
    { label: 'Sofa Bed(s)', value: 9 },
    { label: 'Floor Mattress(s)', value: 10 },
    { label: 'Cot Bed(s)', value: 11 }
  ];

  const EquipmentOptions = [
    { label: 'A/C ', value: 1 },
    { label: 'Fan', value: 2 },
    { label: 'A/C & Heater', value: 3 },
    { label: 'Fan & Heater', value: 4 },
  ];

  const facilityOptions = [
    { label: 'Towels', value: 1 },
    { label: 'Beddings', value: 2 },
    { label: 'Pillows', value: 3 },
    { label: 'Toilets papers', value: 4 },
    { label: 'Wardrobe', value: 5 },
    { label: 'Drying Clothing Rack', value: 6 },
    { label: 'Hot tub/Jacuzzi', value: 7 },
    { label: 'Shower', value: 8 },
    { label: 'Hangers', value: 9 },
    { label: 'Safe', value: 10 },
    { label: 'Interconnected rooms available', value: 11 },
    { label: 'Soundproof', value: 12 },
    { label: 'Free toiletries', value: 13 },
    { label: 'Hairdryer', value: 14 },
    { label: 'Shower/ Bathtub', value: 15 },
    { label: 'Family room', value: 16 },
    { label: 'Slippers', value: 17 },
    { label: 'Blankets', value: 18 },
    { label: 'Workdesk', value: 19 },
    { label: 'Iron', value: 20 },
    { label: 'Ironing facilities', value: 21 },
    { label: 'Mosquito net', value: 22 },
    { label: 'Extra pillows', value: 23 },
    { label: 'Bathrobes', value: 24 },
    { label: 'Room Service', value: 25 },
    { label: ' Duvet', value: 26 },
    { label: 'Add Item', value: 2 },
  ];

  const otherFacilityOptions = [
    { label: 'TV', value: 1 },
    { label: ' DVD Player', value: 2 },
    { label: 'Landline', value: 3 },
    { label: 'Alarm Clock', value: 4 },
    { label: 'Ipod dock', value: 5 },
    { label: 'Phone Charger', value: 6 },
    { label: 'Laptop Safe', value: 7 },
    { label: 'CD player', value: 8 },
    { label: 'Projector', value: 9 },
    { label: 'Cable channels', value: 10 },
    { label: 'International Adaptor', value: 11 },
    { label: 'Add Item', value: 12 }
  ];

  const foodOptions = [
    { label: 'Mini Bar', value: 1 },
    { label: 'Electric Kettle', value: 2 },
    { label: 'Complimentary Tea/Coffee', value: 3 },
    { label: 'Cups and Glasses', value: 4 },
    { label: 'Coffee machine', value: 5 },
    { label: 'Tea or Coffee maker', value: 6 },
    { label: 'Add Item', value: 7 },



  ];

  const IndoorOptions = [
    { label: 'Free Wifi', value: 1 },
    { label: 'Toaster', value: 2 },
    { label: 'Refrigerator', value: 3 },
    { label: 'Microwave', value: 4 },
    { label: 'Kitchenware', value: 5 },
    { label: 'Kitchen', value: 6 },
    { label: 'Baby Chair', value: 7 },
    { label: 'Dining Area', value: 8 },
    { label: 'Dining Table', value: 9 },
    { label: 'Sofa', value: 10 },
    { label: 'Sofa bed', value: 11 },
    { label: 'Lounge', value: 12 },
    { label: 'Coffee table', value: 13 },
    { label: ' Electric Generator', value: 14 },
    { label: 'Water Tank', value: 15 },
    { label: 'Cooking basics(Pots and pans, oil, salt and pepper)', value: 16 },
    { label: 'Dishes and silverware', value: 17 },
    { label: 'Elevator', value: 18 },
    { label: 'Living room', value: 19 },
    { label: 'Hot water', value: 20 },
    { label: 'Hoover', value: 21 },
    { label: 'Cooker', value: 22 },
    { label: 'Stove', value: 23 },
    { label: ' Washing Machine', value: 24 },
    { label: ' Washing Dryer', value: 25 },
    { label: 'Cleaning essentials', value: 26 },
    { label: 'Laundry (surcharge)', value: 27 },
    { label: 'Dry cleaning (surcharge)', value: 28 },
    { label: 'Ironing (surcharge)', value: 29 },
    { label: 'Trouser press (surcharge)', value: 30 },
    { label: 'Daily cleaning service', value: 31 },

  ];

  const outdoorOptions = [
    { label: 'BBQ', value: 1 },
    { label: 'Outdoor furniture', value: 2 },
    { label: 'Outdoor dining area', value: 3 },
    { label: 'Terrace', value: 4 },
    { label: 'Roof Terrace', value: 5 },
    { label: 'Patio', value: 6 },
    { label: 'Kids Pool', value: 7 },
    { label: 'Private Pool', value: 8 },
    { label: 'Shared Pool', value: 9 },
    { label: 'Jacuzzi', value: 10 },
    { label: 'Near the beach', value: 11 },
    { label: 'Garage parking', value: 12 },
    { label: 'Airport Shuttle', value: 13 },
    { label: 'Private Garden', value: 14 },
    { label: 'Shared Gardens', value: 15 },
    { label: 'Outdoor parking', value: 16 },
    { label: 'Golf Course', value: 17 },
    { label: 'Activities', value: 18 }
    
  ];

  const otherAmenitiesOptions = [
    { label: 'Serves Halal food', value: 1 },
    { label: 'Serves Vegetarian food', value: 2 },
    { label: '24-hour front desk', value: 3 },
    { label: ' Concierge service', value: 4 },
    { label: 'Muslim friendly', value: 5 },
    { label: 'Porter', value: 6 },
    { label: 'Fitness Centre/ Gym', value: 7 },
    { label: 'Bar', value: 8 },
    { label: 'Spa', value: 9 },
    { label: 'Gym', value: 10 },
    { label: 'Fitness Centre', value: 11 },
    { label: 'Massage Centre', value: 12 },
    { label: 'Disability Access', value: 13 },
    { label: 'Activities', value: 14 },
    { label: 'Restaurant', value: 15 },
    { label: 'Pet Friendly', value: 16 },
    { label: 'Golf', value: 17 },
    { label: 'Currency exchange', value: 18 },
    { label: 'Luggage storage', value: 19 },
    { label: 'Newspapers', value: 20 },
    { label: 'Tour desk', value: 21 },
    { label: 'Designated smoking area', value: 22 },
    { label: 'Kosher food', value: 23 },
    { label: 'Prayer Room(Muslim)', value: 24 },
  ];



  const [list, setList] = useState([]);
  const [rooomtype, setRoomtype] = useState([]);
  const [bedtype, setBedtype] = useState([]);
  const [viewtype, setViewtype] = useState([]);
  const [roomequipments, setRoomequipments] = useState([]);
  const [singleRoom, setSingleRoom] = useState([]);
  const [roomInformation, setRoomInformation] = useState("");
  const [getroomInformation, setGetRoomInformation] = useState("");


  const [modal3, setModal3] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [loader, setLoader] = useState(true);
  // const [model5, setModal5] = useState(false);
  // const [model6, setModal6] = useState(false);


  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);


  



  //add form for rooms
  const [title, setTitle] = useState("");
  const [person, setperson] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [room_size, setRoom_size] = useState("");
  const [number_bathroom, setNumber_bathroom] = useState("");
  const [number_toilet, setNumber_toilet] = useState("");
  const [lounge, setLounge] = useState("");
  const [location, setLocation] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [free_activity, setfree_activity] = useState("");
  const [surcharge_activity, setsurcharge_activity] = useState("");
  const [pool, setpool] = useState("");
  const [garden, setGarden] = useState("");
  const [personCapacity, setPersonCapacity] = useState("");
  const [hotelType, setHotelType] = useState("");
  const [Roomtype, setRoomtypes] = useState("");
  const [Bedtype, setBedtypes] = useState("");
  const [Viewtype, setViewtypes] = useState("");
  const [titleError, setTitleError] = useState('');
  const [priceError, setPriceError] = useState('');
  //const [Roomequipments, setRoomequipmentss] = useState("");


  const options = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
  ];
  useEffect(() => {
    getData();
    getroomtype();
    getbedtype();
    getviewtype();

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
    axios.get(`${common.api_url}rooms`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setList(jsonPrser.data.data)
        console.log(jsonPrser.data.data);
         setLoader(false)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const emptySetVariable = () => {
    setTitleError('');
    setPriceError('');

  }
  const createRooms = (evt) => {
    evt.preventDefault();
    emptySetVariable();
    let te = /^[a-zA-Z]+$/;
    if (title == '') {
      setTitleError('Title is required!');
      return;
    } else if (!(te.test(title))) {
      setTitleError('Enter Letters only!');
      return;
    }
    if (price == '') {
      setPriceError('Price is required!');
      return;
    }

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
      title: title,
      description: description,
      price: price,
      image: image,
      room_size: room_size,
      number_bathroom: number_bathroom,
      lounge: lounge,
      location: location,
      number_toilet: number_toilet,
      free_activity,
      surcharge_activity,
      person: personCapacity,
      garden: garden,


    }
    console.log(payload);
    axios.post(`${common.api_url}rooms`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false);
          swal("Rooms Added Successfully!", "success");
          getData();
          console.log(res);
          return res.data.data;
        }
      }).catch(err => {
        console.log(err);
      })

  }



  const getroomtype = () => {
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
    axios.get(`${common.api_url}roomtype`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setRoomtype(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const getbedtype = () => {
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
    axios.get(`${common.api_url}bedtype`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setBedtype(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const getviewtype = () => {
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
    axios.get(`${common.api_url}viewtype`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setViewtype(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const viewDataRoom = (id) => {
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
    axios.get(`${common.api_url}rooms/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setRoomInformation(jsonPrser.data.data)
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
    axios.get(`${common.api_url}properties/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setRoomInformation(jsonPrser.data.data)
        toggle4(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });

  }

  const deleteRoomById = (id) => {
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
    axios.delete(`${common.api_url}rooms/${id}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Room deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
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
                  <h1 className="m-0">Rooms</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                      Add Rooms
      </Button></li>
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
                          <th>Sl</th>
                          <th>Action</th>
                          <th>Room </th>
                          <th>Title</th>
                          <th>Location</th>
                          <th>Person Capacity</th>
                          <th>Price</th>
                          <th>User Email</th>
                          <th>Created At</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      {list.map(data =>
                        <tbody key={data.data}>
                          <td>{data.id}</td>
                          <td>  <FontAwesomeIcon
                            icon={['far', 'edit']}
                            className="font-size-xxl"
                            placement="top"
                            style={{fontSize:15,color:'#0AEE23'}}
                            id="tooltipforedit"
                            outline /*onClick={() => GetRooomById(data.id)}*/ />
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
                              outline onClick={() => viewForDeleteData(data.id)} />
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
                              onClick={() => viewDataRoom(data.id)}
                              outline /> <UncontrolledTooltip
                                placement="top"
                                container="body"
                                target="tooltipforview">
                              view
                     </UncontrolledTooltip></td>
                          <td>{data.title}</td>
                          <td>{data.location}</td>
                          <td></td>
                          <td>{data.person}</td>
                          <td>{data.price}</td>
                          <td>{data.get_user.email}</td>
                          <td>{data.created_at}</td>
                          <td className={common.status[data.user_id]}>{common.status[data.user_id]}</td>

                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal zIndex={2000} centered size="sm" isOpen={modal4} toggle={toggle4}>
          <ModalHeader toggle={toggle4}>Delete Room</ModalHeader>
          <ModalBody className="text-center">

            <h1>{roomInformation.id}</h1>
            <h2>{roomInformation.title}</h2>
            <h3>{roomInformation.location} </h3>
            <img src={roomInformation.image} alt="hotel-image" />
            <p>Are you sure Want To Delete {roomInformation.title}?
                           </p>
          </ModalBody>
          <ModalFooter>
            <Button color="link" className="btn-link-dark" onClick={toggle4}>
              Close
                        </Button>{' '}
            <Button color="primary" className="ml-auto" onClick={() => deleteRoomById(roomInformation.id)}>
              Delete
                          </Button>
          </ModalFooter>
        </Modal>





        <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard="false">
          <ModalHeader toggle={toggle3}><h1>Add Rooms</h1></ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="Title" sm={1}> Title </Label>
                <Col sm={3}>
                  <Input
                    type="text"
                    name="title"
                    id="Title"

                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  {titleError != '' ? (
                    <Label style={{ color: "red" }}>
                      {titleError}
                    </Label>
                  ) : null}
                </Col>
                <Label for="Person" sm={1}>Person</Label>
                <Col sm={3}>
                  <Input
                    type="text"
                    name="person"
                    id="Person"
                    value={person}
                    onChange={e => setperson(e.target.value)}

                  />
                </Col>
                <Label for="Price" sm={1}>Price</Label>
                <Col sm={3}>
                  <Input
                    type="text"
                    name="price"
                    id="Price"

                    value={price}
                    onChange={e => setprice(e.target.value)} />
                  {priceError != '' ? (
                    <Label style={{ color: "red" }}>
                      {priceError}
                    </Label>
                  ) : null}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Description" sm={1}>Description</Label>
                <Col sm={5}>
                  <Input
                    type="textarea"
                    name="title"
                    id="Title"

                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Col>
                <Label htmlFor="exampleFile" sm={1}>Image</Label>
                <Col sm={4}>
                  <Input type="file" name="file" id="exampleFile"
                  // value={Image}
                  // onChange={e => setImage(e.target.value)} />
                  />
                  <FormText color="muted">
                    Please select the images of property
                  </FormText>
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>Roomtype</Label>
                <Col sm={3}>
                  <CustomInput
                    type="select"
                    name="customSect"
                    id="customSect1"
                    value={rooomtype.id}
                    onChange={e => setRoomtypes(e.target.value)}>
                    <option >Select Roomtype</option>
                    {rooomtype.map((data, index) =>
                      <option key={index} value={data.id}>{data.title}</option>
                    )};
                    </CustomInput>


                </Col>
                <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>BedType</Label>
                <Col sm={3}>
                  <CustomInput
                    type="select"
                    name="customSect"
                    id="customSect2"
                    value={bedtype.id}
                    onChange={e => setBedtypes(e.target.value)}>
                    <option >Select Roomtype</option>
                    {bedtype.map((data, index) =>
                      <option key={index} value={data.id}>{data.title}</option>
                    )};
                    </CustomInput>
                </Col>
                <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>ViewType</Label>
                <Col sm={3}>
                  <CustomInput
                    type="select"
                    name="customSect"
                    id="customSect3"
                    value={viewtype.id}
                    onChange={e => setViewtypes(e.target.value)}>
                    <option >Select Roomtype</option>
                    {viewtype.map((data, index) =>
                      <option key={index} value={data.id}>{data.title}</option>
                    )};
                    </CustomInput>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="personCapacity" sm={2}>Room Equipments</Label>
                <Col sm={2}>
                  <ReactMultiSelectCheckboxes options={EquipmentOptions
                  } />




                </Col>
                <Label htmlFor="hotelType" sm={1}>Room Size</Label>
                <Col sm={3}>
                  <Input
                    type="text"
                    id="hotelType"
                    name="customSelect"
                  />
                </Col>
                <Label htmlFor="personCapacity" sm={2}>Room Facilities</Label>
                <Col sm={2}>

                  <ReactMultiSelectCheckboxes options={facilityOptions
                  } />
                </Col>
              </FormGroup>



              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label htmlFor="roomType" sm={1}>Balcony</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio1"
                        label="Yes"
                      // Onchange={}
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio2"
                        name="customRadio1"
                        label="No"
                      />
                    </Col>
                    <Label htmlFor="roomType" sm={1}>Disability Access</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio3"
                        name="customRadio2"
                        label="Yes" />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio4"
                        name="customRadio2"
                        label="No" />
                    </Col>
                    <Label htmlFor="roomType" sm={1}>SwimmingPool</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio5"
                        name="customRadio3"
                        label="Yes"
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio6"
                        name="customRadio3"
                        label="No"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="roomType" sm={1}>Garden</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio7"
                        name="customRadio4"
                        label="Yes"
                        value={garden}
                        onChange={e => setGarden(e.target.value)} />



                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio8"
                        name="customRadio4"
                        label="No"

                      />
                    </Col>
                    <Label htmlFor="roomType" sm={1}>Lounge
                      </Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio9"
                        name="customRadio5"
                        label="Yes"
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio10"
                        name="customRadio5"
                        label="No"
                      />
                    </Col>
                    <Label htmlFor="roomType" sm={1}>free Activity
                      </Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio11"
                        name="customRadio6"
                        label="Yes"
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio12"
                        name="customRadio6"
                        label="No"
                      />
                    </Col>

                  </FormGroup>
                </CardBody>
              </Card>

              <br />
              <FormGroup row>
                <Label htmlFor="roomType" sm={3}>Do you offer Live Music?
                      </Label>
                <Col sm={3}>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio11"
                    name="customRadio7"
                    label="Yes"
                  />
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio12"
                    name="customRadio7"
                    label="No"
                  />
                </Col>
              </FormGroup>





              <br />
              <h1>Other Facilities</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label htmlFor="personCapacity" sm={2}>Techonology</Label>
                    <Col sm={3}>
                      <ReactMultiSelectCheckboxes options={otherFacilityOptions
                      } />
                    </Col>
                    <Label htmlFor="hotelType" sm={2}>Food & Drink</Label>
                    <Col sm={3}>
                      <ReactMultiSelectCheckboxes options={foodOptions
                      } />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>


              <FormGroup row>

                <Button style={{ alignItems: 'center' }} color="link" className="m-2 btn-link-warning" href="#"><span>Duplicate Room</span></Button>

                <Button color="link" className="m-2 btn-link-warning" href="#">
                  <span>Add another Room</span>
                </Button>

              </FormGroup>
              <FormGroup row>
                <Label htmlFor="personCapacity" sm={2}> Number of Bathroom</Label>
                <Col sm={3}>
                  <Input
                    type="number"
                    id="exampleCustomMutlipleSelect"
                    name="customSelect"
                  />
                </Col>
                <Label htmlFor="hotelType" sm={2}>Number of toilet</Label>
                <Col sm={3}>
                  <Input
                    type="number"
                    id="hotelType"
                    name="customSelect"
                  />
                </Col>
              </FormGroup>






              <br />
              <h1>List your Amenities</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label htmlFor="personCapacity" sm={2}>Indoor Amenities:</Label>
                    <Col sm={2}>
                      <ReactMultiSelectCheckboxes options={IndoorOptions
                      } />
                    </Col>
                    <Label htmlFor="hotelType" sm={2}>Outdoor Amenities</Label>
                    <Col sm={2}>
                      <ReactMultiSelectCheckboxes options={outdoorOptions
                      } />
                    </Col>
                    <Label htmlFor="personCapacity" sm={2}>Other Amenities</Label>
                    <Col sm={2}>

                      <ReactMultiSelectCheckboxes options={otherAmenitiesOptions
                      } />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>


              <br />
              <Label htmlFor="Roomtype" sm={4}>Do you offer any activities with this listing?</Label>
              <FormGroup row>
                <Label htmlFor="Roomtype" sm={1}>Land Activities</Label>
                <Col sm={2}>
                  <Input
                    type="number"
                    id="hotelType"
                    name="customSelect" />

                </Col>
                <Label htmlFor="Roomtype" sm={2}> Water Activities</Label>
                <Col sm={2}>
                  <Input
                    type="number"
                    id="hotelType"
                    name="customSelect" />

                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="exampleCustomMutlipleSelect" sm={2}>Chargeable activities</Label>
                <Col sm={2}>
                  <CustomInput
                    type="select"
                    id="exampleCustomMutlipleSelect"
                    name="customSelect"
                  // value={Facility}
                  // onChange={e => setFacility(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>Golf</option>
                    <option>Kayak</option>
                    <option>Parasailing</option>
                  </CustomInput>
                </Col>




              </FormGroup>



              <br />
              <h1>Kids/Teens Facilities</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label htmlFor="Roomtype" sm={1}>Kids Club</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio13"
                        name="customRadio"
                        label="Yes"
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio14"
                        name="customRadio"
                        label="No"
                      />
                    </Col>
                    <Label htmlFor="Roomtype" sm={1}>Kid Age</Label>
                    <Col sm={3}>
                      <Input
                        type="text"
                        name="kid_age"
                        id="Kid_age"

                      // value={kid_age}
                      // onChange={e => setKid_age(e.target.value)} />   
                      />
                    </Col>
                    <Label htmlFor="Roomtype" sm={1}>Kidsclub_Comments</Label>
                    <Col sm={3}>
                      <Input
                        type="text"
                        name="kids_club_comments"
                        id="Kids_club_comments"

                      // value={kids_club_comments}
                      // onChange={e => setKids_club_comments(e.target.value)} />   
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="Roomtype" sm={1}>Teen Club</Label>
                    <Col sm={3}>
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio13"
                        name="customRadio"
                        label="Yes"
                      />
                      <CustomInput
                        className="mb-3"
                        type="radio"
                        id="exampleCustomRadio14"
                        name="customRadio"
                        label="No"
                      />
                    </Col>
                    <Label htmlFor="Roomtype" sm={1}>Teen Age</Label>
                    <Col sm={3}>
                      <Input
                        type="text"
                        name="teen_age"
                        id="Teen_age"

                      // value={teen_age}
                      // onChange={e => setTeen_age(e.target.value)} />   
                      />
                    </Col>
                    <Label htmlFor="Roomtype" sm={1}>Teenclub_Comments</Label>
                    <Col sm={3}>
                      <Input
                        type="text"
                        name="teen_club_comments"
                        id="Teen_club_comments"

                      // value={teen_club_comments}
                      // onChange={e => setTeen_club_comments(e.target.value)} />   
                      />
                    </Col>

                    <Label for="Description" sm={3}>Description about The Space</Label>
                    <Col sm={3}>
                      <Input
                        type="textarea"
                        name="title"
                        id="Title"

                        value={description}
                        onChange={e => setDescription(e.target.value)}
                      />
                    </Col>

                  </FormGroup>
                </CardBody>
              </Card>

              <br />
              <h1>Other information</h1>
              <FormGroup row>
                <Label for="information" sm={2}>Places to recommend:</Label>
                <Col sm={3}>
                  <CustomInput
                    type="select"
                    id="exampleCustomMutlipleSelect"
                    name="customSelect">
                    <option value="">Select</option>
                    <option>Add Grocery</option>
                    <option>Add Restaurants</option>
                    <option>Add Bar</option>
                    <option>Add Clubs</option>
                    <option>Add ATM</option>
                    <option>Add Petrol Station</option>
                    <option>Add  Bank</option>
                    <option>Add  Money Exchange</option>
                    <option>Add Police Station</option>
                    <option>Add  hospital</option>
                    <option>Add  Activities</option>
                    <option>Add Pharmacy</option>
                  </CustomInput>
                </Col>


              </FormGroup>

              <h1>Rules</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label for="information" sm={2}>What is allowed:</Label>

                    <div class="checkbox">
                      <Col sm={8}>
                        <label><input type="checkbox" value="one" />
            You are responsible to keep anything that you're provided with in the host in the same condition.
            If there is any damage to the property or to any of the items you will be asked to pay for it.
            </label>
                      </Col>
                    </div>
                  </FormGroup>


                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="two" />
           Smoking allowed:  If yes,mentioned where can they smoke
           </label>
                      </Col>
                    </div>
                  </FormGroup>


                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="three" />
           Events or parties allowed:If yes, mention about the quiet hours
          </label>
                      </Col>
                    </div>
                  </FormGroup>

                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="four" />
           Guests can receive visitors
          </label>
                      </Col>
                    </div>
                  </FormGroup>

                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="five" />
           Children allowed - Suitable for Kids( from age  to  ), if no why
          </label>
                      </Col>
                    </div>
                  </FormGroup>


                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="six" />
          Smoking allowed-(if yes, where)</label>
                      </Col>
                    </div>
                  </FormGroup>

                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="seven" />
           Guests should not bring or do drugs in the property
            </label>
                      </Col>
                    </div>
                  </FormGroup>

                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="eight" />
           Must climb stairs
          </label>
                      </Col>
                    </div>
                    <Button color="primary" className="ml-auto" >
                      ADD ADDITIONAL INFORMATION
          </Button>
                  </FormGroup>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Label for="information" sm={3}>Who is it not suitable for:</Label>
                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="one" />
           Not applicable
            </label>
                      </Col>
                    </div>

                  </FormGroup>
                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="two" />
           Pets
          </label>
                      </Col>
                    </div>
                    <Button color="primary" className="ml-auto">
                      ADD ADDITIONAL INFORMATION
          </Button>
                  </FormGroup>
                </CardBody>
              </Card>


              <Card>
                <CardBody>
                  <Label for="information" sm={3}>Additional Information:</Label>
                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="one" />
           To bring a Government ID/ Passport which will be shown to the owner
            </label>
                      </Col>
                    </div>

                  </FormGroup>
                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="two" />
           No shoes in the property
          </label>
                      </Col>
                    </div>
                  </FormGroup>


                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="three" />
           No noise from ____ to
          </label>
                      </Col>
                    </div>
                  </FormGroup>





                  <FormGroup row>
                    <div class="checkbox">
                      <Col sm={12}>
                        <label><input type="checkbox" value="four" />
           Potential for noise due to house renovation next door
          </label>
                      </Col>
                    </div>
                    <Button color="primary" className="ml-auto" onClick={toggle3}>
                      ADD ADDITIONAL INFORMATION
          </Button>
                  </FormGroup>
                </CardBody>
              </Card>


              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label for="information" sm={2}>Safety & Security:</Label>
                    {/*
         <label>First Aid Box</label>
         <label>Fire Extinguisher</label>
         <label>Alarm</label>
         <label>Smoke Detector</label>
         <label>Security guard</label>
         <label>Fire Blanket</label>
         <label>CO2 detector</label>
         <label>Fire Door</label>
         l<label>Fire Exit</label>
         <label>Lock on the door from inside</label>
         <label> Security Camera</label>*/}
                  </FormGroup>
                </CardBody>
              </Card>

              <h1>Emergency Contact number</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label for="safety" sm={2}>Emergency services:</Label>
                  </FormGroup>
                </CardBody>
              </Card>













            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="link" className="btn-link-dark" onClick={toggle3}>
              Close
          </Button>{' '}
            <Button color="primary" className="ml-auto" onClick={createRooms}>
              Submit
          </Button>
          </ModalFooter>
        </Modal>


        {/* bal}















        {/* get rooms by id */}
        <Modal zIndex={2000} className="custom_model_size" centered scrollable isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Information Of Room</ModalHeader>
          <ModalBody className="text-center">
            <Form>
              <FormGroup row>
                <Label className='view_head' for="Title" sm={1}> Title : </Label>
                <Col sm={3}>
                  {roomInformation.title}
                </Col>
                <Label className='view_head' for="Person" sm={1}>Person :</Label>
                <Col sm={3}>
                  {roomInformation.person ?
                    roomInformation.person
                    : ('Null')}
                </Col>
                <Label className='view_head' for="Price" sm={1}>Price :</Label>
                <Col sm={3}>
                  {roomInformation.price ?
                    roomInformation.price
                    : ('Null')}
                </Col>
              </FormGroup>




              <FormGroup row>
                <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>Roomtype :</Label>
                <Col sm={3}>
                  {roomInformation.roomtype ?
                    roomInformation.roomtype
                    : ('Null')}


                </Col>
                <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>BedType :</Label>
                <Col sm={3}>
                  {roomInformation.bedtype ?
                    roomInformation.bedtype
                    : ('Null')}
                </Col>
                <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>ViewType :</Label>
                <Col sm={3}>
                  {roomInformation.viewtype ?
                    roomInformation.viewtype
                    : ('Null')}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label className='view_head' htmlFor="personCapacity" sm={1}>Room Equipments :</Label>
                <Col sm={3}>
                  {roomInformation.roomequip ?
                    roomInformation.roomequip
                    : ('Null')}



                </Col>
                <Label className='view_head' htmlFor="hotelType" sm={1}>Room Size :</Label>
                <Col sm={3}>
                  {roomInformation.room_size ?
                    roomInformation.room_size
                    : ('Null')}
                </Col>
                <Label className='view_head' htmlFor="personCapacity" sm={1}>Room Facilities :</Label>
                <Col sm={3}>

                  {roomInformation.roomfacil ?
                    roomInformation.roomfacil
                    : ('Null')}
                </Col>
              </FormGroup>




              <FormGroup row>
                <Label className='view_head' htmlFor="roomType" sm={1}>Balcony :</Label>
                <Col sm={3}>
                  {roomInformation.balocony == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
                <Label className='view_head' htmlFor="roomType" sm={1}>Disability Access :</Label>
                <Col sm={3}>
                  {roomInformation.disability_access == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
                <Label className='view_head' htmlFor="roomType" sm={1}>SwimmingPool:</Label>
                <Col sm={3}>
                  {roomInformation.pool == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className='view_head' htmlFor="roomType" sm={1}>Garden :</Label>
                <Col sm={3}>
                  {roomInformation.garden == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
                <Label className='view_head' htmlFor="roomType" sm={1}>Lounge :
                      </Label>
                <Col sm={3}>
                  {roomInformation.lounge == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
                <Label className='view_head' htmlFor="roomType" sm={1}>free Activity :
                      </Label>
                <Col sm={3}>
                  {roomInformation.free_activity == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>

              </FormGroup>


              <br />
              <FormGroup row>
                <Label className='view_head' htmlFor="roomType" sm={2}>Do you offer Live Music?
                      </Label>
                <Col sm={1}>
                  {roomInformation.live_music == 0 ?
                    <p>no</p>
                    : (<p>yes</p>)}
                </Col>
                <Label className='view_head' className='view_head' for="Description" sm={3}>Description:</Label>
                <Col sm={1}>
                  {roomInformation.description ?
                    roomInformation.description
                    : ('Null')}
                </Col>


              </FormGroup>





              <br />
              <h1>Other Facilities</h1>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Label className='view_head' htmlFor="personCapacity" sm={2}>Techonology</Label>
                    <Col sm={3}>
                      {roomInformation.technology ?
                        roomInformation.technology
                        : ('Null')}
                    </Col>
                    <Label className='view_head' htmlFor="hotelType" sm={2}>Food & Drink</Label>
                    <Col sm={3}>
                      {roomInformation.fooddrink ?
                        roomInformation.fooddrink
                        : ('Null')}
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>


            </Form>
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
  return <Redirect to='/' />
}

}
  
export default Rooms;
