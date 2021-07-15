import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './canclation.css'
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

function Cancellation() {

  const [indexes, setIndexes] = useState([]);
  const [CatogeryList, setCatogeryList] = useState([]);


  const Placeoptions = [
    { label: 'Bar', value: 'Bar' },
    { label: 'Club', value: 'Club' },
    { label: 'Pub', value: 'Pub' },
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
  const [allList, setAllList] = useState([]);
  const [Catorey, setCatorey] = useState([]);
  const [placeInformation, setPlaceInformation] = useState([]);

  //add form for Pub
  const [loader, setLoader] = useState(true);

  
  const [getpolciyInformation, setpolciyInformationn] = useState("");
  const [polciyInformation, setpolciyInformation] = useState("");

  
  const [town, setTown] = useState("");
  const [ids, setids] = useState("");
  const [Canclelation, setCanclelation] = useState("");
  const [PolicyError, setPolicyError] = useState('');
  

  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  const [country, setCountry] = useState([]);
  const [category, setcategory] = useState("");

  const foodMenuOptions = [
    { label: 'Dessert', value: 1 },
    { label: 'Other', value: 2 },
    { label: 'Main', value: 3 },
    { label: 'Starter', value: 4 },
  ];

  const DrinkOptions = [
    { label: 'Alcohalic', value: 1 },
    { label: 'Non-alcohalic', value: 2 },

  ];

  const emptySetVariable = () => {
    setPolicyError('');
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    emptySetVariable();

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
      description: Canclelation,
      policy_category_id:category
    }
  axios.post(`${common.api_url}cancelpolicy`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
          swal("Policy Added Successfully!", "success");
          return res.data.data;
          // history.push('/canclation', roomModel)
        }
      }).catch(err => {
        console.log(err);
      })

    // history.push('/rooms', roomModel);
  }


  useEffect(() => {
   getData();
   // getCountries();
   getCatogeryId();
   getpolicy();
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
    axios.get(`${common.api_url}cancelpolicy`, config).then((response) => {
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


  const getpolicy = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}cancelpolicy`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setpolciyInformationn(jsonPrser.data.data)
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
    axios.delete(`${common.api_url}cancelpolicy/${ids}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("policy deleted Successfully!");
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
    axios.get(`${common.api_url}cancelpolicy/${id}`, config).then((response) => {
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
    axios.get(`${common.api_url}cancelpolicy/${id}`, config).then((response) => {
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
    axios.get(`${common.api_url}cancelpolicy/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setpolciyInformationn(jsonPrser.data.data)
        setCanclelation(jsonPrser.data.data.description);
        setcategory(jsonPrser.data.data.policy_category_id);
        setids(jsonPrser.data.data.id)
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  
  const getCatogeryId = () => {
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
      axios.get(`${common.api_url}policycategory`, config).then((response) => {
        var dataJson = JSON.stringify(response);
        var jsonPrser = JSON.parse(dataJson);
        if (jsonPrser.status == 200) {
          setCatogeryList(jsonPrser.data.data)
          console.log(jsonPrser.data.data)
        }
      }).catch((error) => {
        console.log(error, 'errror');
      });
    }
   


  const UpdatepolicyById = (id) => {

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
      policy_category_id : category
    }


    axios.put(`${common.api_url}cancelpolicy/${ids}`, payload, config)
      .then(res => {
        if (res) {
          toggle5(false);
          getData()
          console.log(id);
          swal("polciy Updated Successfully!", "success");
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
                <h1 className="m-0">Policy</h1>
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                   Add Policy
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
                        <th>
                        </th>

                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr>
                        <th>Sl</th>
                        <th>Action</th>
                        <th>polciy</th>
                        <th>Title</th>
                        <th>percentage</th>
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
                          <td>{data.description}</td>
                          <td>{data.get_policy_category.title}</td>
                          <td>{data.get_policy_category.price +"%"}</td>


                          {/* edit section for canclation */}
                          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                            <ModalHeader toggle={toggle5}>Edit policy</ModalHeader>
                            <ModalBody>


                              <Form onclick={() => UpdatepolicyById(data.id)}>
                                <FormGroup row>

                                  <Label htmlFor="personCapacity" sm={1}>canclation Policy</Label>
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
                              <FormGroup row>
                          <Label htmlFor="countries" sm={1}>
                          category
                                          </Label>
                                          <Col sm={3}>
                                      <CustomInput
                                    type="select"
                                    id="category_1"
                                    name="ccategory" 
                                    defaultValue={polciyInformation.policy_category_id}
                                    value={category.id}
                                    onChange={e => setcategory(e.target.value)}
                                    >
                                    <option >Select category</option>
                                    {CatogeryList.map((data, index) =>
                                      <option key={index} value={data.id}>{data.title}</option>
                                    )}; 
                        </CustomInput> 
               </Col>
            </FormGroup>
                            </ModalBody>

                            <ModalFooter>
                              <Button color="primary" className="ml-auto" onClick={() => UpdatepolicyById(data.id)}>
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
        <ModalHeader toggle={toggle2}>Information Of Policy</ModalHeader>
        <ModalBody className="text-center">
          <Form>
            <FormGroup row>
              <Label className='view_head' htmlFor="personCapacity" sm={1}>canclation Policy:</Label>
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
        <ModalHeader toggle={toggle4}>Delete Place</ModalHeader>
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
        <ModalHeader toggle={toggle3}>Add Place</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label htmlFor="personCapacity" sm={1}>canclation Policy</Label>
              <Col sm={9}>
                <Input
                  type="textarea"
                  id="placeName"
                  name="customSelect"
                  value={Canclelation}
                  onChange={e => setCanclelation(e.target.value)}
                />
                {PolicyError != '' ? (
                  <Label style={{ color: "red" }}>
                    {PolicyError}
                  </Label>
                ) : null}
              </Col>
              
            </FormGroup>
             <FormGroup row>
           <Label htmlFor="countries" sm={1}>
           category
                          </Label>
                          <Col sm={3}>
									    <CustomInput
										type="select"
										id="category_1"
										name="ccategory" 
									   value={category.id}
									   onChange={e => setcategory(e.target.value)}
									  >
										<option >Select category</option>
										{CatogeryList.map((data, index) =>
										  <option key={index} value={data.id}>{data.title}</option>
										)}; 
        </CustomInput> 
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

export default Cancellation;
