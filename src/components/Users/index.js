import React, { useEffect, useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import common from "../../common/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
import LoaderClass from '../../loader/loader'
import './index.css';

import {
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Container,
  Row,
  CustomInput,
  Label,
  FormGroup,
  UncontrolledTooltip
} from 'reactstrap';

function Users() {

  const [singleUser, setSingleUser] = useState([]);




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
  const [country, setCountry] = useState([]);
  const [userInformation, setUserInformation] = useState([]);
  const [getuserInformation, setGetUserInformation] = useState("");


  //add form for users
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [roomType, setRoomType] = useState("");
  const [image, setImage] = useState("");
  const [Password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);

  //
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [countries, setCountries] = useState("");
  const [nationality, setNationality] = useState("");
  const [town, setTown] = useState("");
  const [roadname, setRoadname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [countriesofResidence, setCountriesofResidence] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [singleUsergetCountry, setuserCountry] = useState('');
  const [myname, setMyname] = useState('');

  const [search, setSearch] = useState("");
  const [searchbyEmail, setSearchbyEmail] = useState("");
  const [testSearch,setTestSearch] = useState("");
  const [searchEmail,setSearchEmail] = useState("");
  const [searchRole,setSearchRole] =useState("");
  const [searchbyRole, setSearchbyRole] = useState("");
  const [ids, setIds] = useState("");


  const emptySetVariable = () => {
    setEmailError('');
    setNameError('');
    setCountryError('');
  }

  const searchTesting=(e)=>{
    setTestSearch(e);
    if(testSearch.length!=1){
      setList([]);
      setList( allList.filter(
      (nameData) => (
        nameData.name.toLowerCase().includes(testSearch.toLowerCase()))
      ));
      }else{
        setList(allList);
      }
  }

  const searchEmailFun=(e)=>{
    setSearchEmail(e);
    if(searchEmail.length!=1){
     setList([]);   
      setList( allList.filter(
      (nameData) => (
        nameData.email.toLowerCase().includes(searchEmail.toLowerCase()))
      ));
      }else{
        setList(allList);
      }
  }

  const searchRoleFun =(e)=>{
    setSearchRole(e);
    if(searchRole){
      setList([]);
      setList( allList.filter(
      (data) => (
        data.role(searchRole))
      ));
      }else{
        setList(allList);
      }
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    emptySetVariable();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let te = /^[a-zA-Z]+$/;
    if (email == '') {
      setEmailError('Email is required!');
      return;
    } else if (!(re.test(email))) {
      setEmailError('Enter valid email!!');
      return;
    }

    if (firstname == '') {
      setNameError('Name is required!');
      return;
    } else if (!(te.test(firstname))) {
      setNameError('Enter Letters only!');
      return;
    }
    if (countries == '') {
      setCountryError('Country is required!');
      return;
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

    let payload = {
      name: firstname,
      phone: mobile,
      town: town,
      country_of_residence: countriesofResidence,
      country: countries,
      nationality: nationality,
      dob: dob,
      email: email,
      road_name: roadname,
      address: address,
      password: Password
    }

    axios.post(`${common.api_url}register`, payload, config)
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



  useEffect(() => {
    getData();
    getCountries();

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
    axios.get(`${common.api_url}user-list`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setList(jsonPrser.data.data);
        setAllList(jsonPrser.data.data);
        setLoader(false)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }


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

//edit
  const GetUserById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    // console.log(token);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}user-list/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetUserInformation(jsonPrser.data.data)
        setFirstName(jsonPrser.data.data.firstname);
        setMobile(jsonPrser.data.data.phone);
        setNationality(jsonPrser.data.data.nationality);
        setAddress(jsonPrser.data.data.address);
        setCountries(jsonPrser.data.data.country);
        setRoadname(jsonPrser.data.data.road_name);
        setDob(jsonPrser.data.data.dob);
        setTown(jsonPrser.data.data.town);
        setIds(jsonPrser.data.data.id);
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

 }


  const UpdateUserById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
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
      country_of_residence: countriesofResidence,
      country: countries,
      nationality: nationality,
      dob: dob,
      road_name: roadname,
      address: address,

    }
    axios.post(`${common.api_url}user/update/${ids}`, payload, config)
    .then(res => {
      if (res) {
        toggle5(false);
        getData()
        swal("User Updated Successfully!", "success");
        return res.data.data;
      }
    }).catch(err => {
      console.log(err);
    })
    }

  //deleted
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
    axios.get(`${common.api_url}user-list/${id}`, config).
      then((response) => {
        let dataJson = JSON.stringify(response);
        let jsonPrser = JSON.parse(dataJson);
        if (jsonPrser.status == 200) {
          setUserInformation(jsonPrser.data.data);
          toggle4(true);
        }
      })
      .catch((error) => {
        console.log(error, 'errror');
      });

  }

  //view
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
    axios.get(`${common.api_url}user-list/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setSingleUser(jsonPrser.data.data)
        setuserCountry(jsonPrser.data.data.get_countries[0])
        toggle2(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });

  }



  const deleteUserById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };

    axios.delete(`${common.api_url}user/${id}`, config)
      .then(res => {

        if (res) {
          toggle4(false);
          swal("User deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
        }
      }, err => {
        if (err && err.response.data) {
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
                    <h1 className="m-0">Users</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add User
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
                              <input type="text" className="form-control-sm" placeholder="search by Name" value={testSearch} onChange={e => searchTesting(e.target.value,this)} aria-label="Username" /></th>
                            <th>
                              <input type="text" className="form-control-sm" placeholder="search by Email" value={searchEmail} onChange={e => searchEmailFun(e.target.value)} aria-label="Username" /></th>
                              <th></th>
                            <th>
                            {/* <input type="text" className="form-control-sm" placeholder="search by Role" value={searchRole} onChange={(e=>searchRoleFun(e.target.value))} aria-label="Username" /> */}

                            </th>
                            
                            <th></th>
                          </tr>
                          <tr>
                            <th>Sl</th>
                            <th>Action</th>
                            <th>Name</th>
                            <th>Email(s)</th>
                            <th>Created at</th>
                            <th>Role</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        {list.filter((val) => {
                          if (search && searchbyEmail == "") {
                            return val;
                          } else if (val.name.toLowerCase().includes(search.toLowerCase()) ||  val.email == searchbyEmail) {
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
                                onClick={() => GetUserById(data.id)}
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
                              <td>{data.name}</td>
                              <td>{data.email}</td>
                              <td>{data.created_at}</td>
                              <td>{common.role[data.role]}</td>
                              <td className={common.status[data.status_id]}>{common.status[data.status_id]}</td>

                              {/* edit section for user */}
                              <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                                <ModalHeader toggle={toggle5}>Edit User</ModalHeader>
                                <ModalBody>


                                  <Form>
                                    <FormGroup row>
                                     
                                      <Label htmlFor="personCapacity" sm={1}>Full Name</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="firstName"
                                          name="customSelect"
                                          value={firstname}
                                          defaultValue={getuserInformation.name}
                                          onChange={e => setFirstName(e.target.value)}

                                        />
                                      </Col>
                                       <Label htmlFor="examplePropertyName" sm={1}>DOB</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="date"
                                          name="title"
                                          id="dateOfBirth"
                                          defaultValue={getuserInformation.dob}
                                          value={dob}
                                          onChange={e => setDob(e.target.value)}
                                        />
                                      </Col>
                                      <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>
                                        Countries
                                   </Label>
                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          id={"exampleCustomMutlipleSelect" + getuserInformation.id}
                                          name="customSelect"
                                          value={country.id}
                                          onChange={e => setCountries(e.target.value)}
                                        >
                                          <option >Select Country</option>
                                          {country.map((element, index) =>
                                            <option key={index} value={element.id}>{element.name}</option>
                                          )};
                                      </CustomInput>
                                      </Col>
                                    </FormGroup>
                                          <FormGroup row >
                                       <Label htmlFor="personCapacity" sm={1}>
                                        Mobile No.
                                     </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="mobileNo"
                                          defaultValue={getuserInformation.mobile}
                                           value={mobile}
                                          onChange={e => setMobile(e.target.value)}
                                          />
                                      </Col>
                                      <Label htmlFor="examplePropertyName" sm={1}>Address</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="address"
                                          id="address"
                                          defaultValue={getuserInformation.address}
                                          value={address}
                                          onChange={e => setAddress(e.target.value)}
                                       />
                                      </Col>
                                      <Label htmlFor="examplePropertyName" sm={1}>Nationality</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="nationality"
                                          id="nationality"
                                          placeholder="enter the nationality "
                                          defaultValue={getuserInformation.nationality}
                                           value={nationality}
                                          onChange={e => setNationality(e.target.value)}

                                        />
                                      </Col>
                                    </FormGroup>


                                    <h3>Address</h3>
                                    <FormGroup row>
                                      <Label htmlFor="personCapacity" sm={1}>Town</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          id="town"
                                          defaultValue={getuserInformation.town}
                                           value={town}
                                          onChange={e => setTown(e.target.value)}


                                        />
                                      </Col>
                                      <Label htmlFor="hotelType" sm={1}>Road Name</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="email"
                                          id="roadName"
                                          name="customSelect"
                                          defaultValue={getuserInformation.roadname}
                                          value={roadname}
                                          onChange={e => setRoadname(e.target.value)}


                                        />
                                      </Col>


                                      <Label htmlFor="examplePropertyName" sm={1}>Countries of residence</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="nationality"
                                          id="nationality"
                                          defaultValue={getuserInformation.ountriesofResidence}
                                          value={countriesofResidence}
                                          onChange={e => setCountriesofResidence(e.target.value)}


                                        />
                                      </Col>
                                    </FormGroup>
                                  </Form>
                                </ModalBody>

                                <ModalFooter>
                                  <Button color="primary" className="ml-auto"  onClick={() => UpdateUserById(getuserInformation.id)}>
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
            <ModalHeader toggle={toggle2}>Information Of User</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>First Name :</Label>
                  <Col sm={3}>
                    {singleUser.name ?
                      singleUser.name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>DOB :</Label>
                  <Col sm={3}>
                    {singleUser.dob ?
                      singleUser.dob
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Countries :
                    </Label>
                  <Col sm={3}>
                    {singleUsergetCountry.name ?
                      singleUsergetCountry.name
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Mobile No. :
                    </Label>
                  <Col sm={3}>
                    {singleUser.phone ?
                      singleUser.phone
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="hotelType" sm={1}>
                    Email :
                    </Label>
                  <Col sm={3}>
                    {singleUser.email ?
                      singleUser.email
                      : ('Null')}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>Nationality :</Label>
                  <Col sm={3}>
                    {singleUser.nationality ?
                      singleUser.nationality
                      : ('Null')}
                  </Col>
                </FormGroup>

                <h3>Address</h3>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Town :</Label>
                  <Col sm={3}>
                    {singleUser.town ?
                      singleUser.town
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="hotelType" sm={1}>Road Name :</Label>
                  <Col sm={3}>
                    {singleUser.road_name ?
                      singleUser.road_name
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
            <ModalHeader toggle={toggle4}>Delete Users</ModalHeader>
            <ModalBody>
              <p>Are you sure Want To Delete {userInformation.name}?
                </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
                 </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => deleteUserById(userInformation.id)}>
                Delete
                 </Button>
            </ModalFooter>
          </Modal>




          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle3}>Add User</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label htmlFor="personCapacity" sm={1}>First Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="firstName"
                      name="customSelect"
                      placeholder={getuserInformation.firstname}
                      value={firstname}
                      onChange={e => setFirstName(e.target.value)}
                    />
                    {nameError != '' ? (
                      <Label style={{ color: "red" }}>
                        {nameError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="hotelType" sm={1}>Last Name</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="lastName"
                      name="customSelect"
                      value={lastname}
                      onChange={e => setLastName(e.target.value)} />
                  </Col>

                  <Label htmlFor="examplePropertyName" sm={1}>DOB</Label>
                  <Col sm={3}>
                    <Input
                      type="date"
                      name="title"
                      id="dateOfBirth"
                      value={dob}
                      onChange={e => setDob(e.target.value)} />
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Countries
                    </Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      id="exampleCustomMutlipleSelect"
                      name="customSelect"
                      value={country.id}
                      onChange={e => setCountries(e.target.value)}
                    >
                      <option >Select Country</option>
                      {country.map((element, index) =>
                        <option key={index} value={element.id}>{element.name}</option>
                      )};
                                      </CustomInput>
                    {countryError != '' ? (
                      <Label style={{ color: "red" }}>
                        {countryError}
                      </Label>
                    ) : null}
                  </Col>

                  <Label htmlFor="personCapacity" sm={1}>
                    Mobile No.
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
                  <Label htmlFor="hotelType" sm={1}>
                    Email
                    </Label>
                  <Col sm={3}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {emailError != '' ? (
                      <Label style={{ color: "red" }}>
                        {emailError}
                      </Label>
                    ) : null}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="examplePropertyName" sm={1}>Nationality</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="nationality"
                      id="nationality"

                      value={nationality}
                      onChange={e => setNationality(e.target.value)}
                    />
                  </Col>
                  <Label htmlFor="examplePropertyName" sm={1}>Password</Label>
                  <Col sm={3}>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      //defaultValue={getuserInformation.email}
                      value={Password}
                      onChange={e => setPassword(e.target.value)}


                    />
                  </Col>
                </FormGroup>

                <h3>Address</h3>
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
                  <Label htmlFor="hotelType" sm={1}>Road Name</Label>
                  <Col sm={3}>
                    <Input
                      type="email"
                      id="roadName"
                      name="customSelect"
                      value={roadname}
                      onChange={e => setRoadname(e.target.value)}
                    />
                  </Col>


                  <Label htmlFor="examplePropertyName" sm={1}>Countries of residence</Label>
                  <Col sm={2}>
                    <Input
                      type="text"
                      name="nationality"
                      id="nationality"
                      value={countriesofResidence}
                      onChange={e => setCountriesofResidence(e.target.value)}
                    />
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


export default Users;
