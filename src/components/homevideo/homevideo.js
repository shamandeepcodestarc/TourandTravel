import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './homevideo.css'
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

function CanclationCategory() {

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

  //add form for Pub
  const [loader, setLoader] = useState(true);
  const [videoInformation, setVideoInformation] = useState("");
  const [title, setTitle] = useState("");
  const [ids, setids] = useState("");
  
  //const [Country, setCountry] = useState("");
  const [homevideo, setHomeVideo] = useState([]);
  const [country, setCountry] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [CountryError, setCountryError] = useState('');
  const [homevideoError, setHomeVideoError] = useState('');
  const [Countries, setCountries] = useState("");

  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");

  const emptySetVariable = () => {
    setTitleError('');
    setCountryError('');
    setHomeVideoError('');
  }
  const readURI= (e) =>{
    if (e.target.files) {
     setHomeVideo(e.target.files[0]);
        // let filesAmount = e.target.files.length;
        // let i;
        // for (i = 0; i < filesAmount; i++) {
        //   console.log(e.target.files[i]);
        //    images.push(e.target.files[i]);
        //  setImages(images);
        // }
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
      setTitleError('Title is required!');
      return;
      }
      if (Countries == '') {
        setCountryError('country is required!');
        return;
      }
      if (homevideo == '') {
        setHomeVideoError('Video is required!');
          return;
      }
    console.log(homevideo)
    const formData = new FormData();
    formData.append('title',title);
    formData.append('country_id',Countries);
    formData.append('videofile',homevideo);
    
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };

    axios.post(`${common.api_url}homevideo/store`, formData,config)
        .then(response => {
          toggle3(false)
          getData();
          swal("video Add Successfully!");
    })
    .catch(err => {
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
    axios.get(`${common.api_url}homevideo/index`, config).then((response) => {
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
  const removeData = () => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.delete(`${common.api_url}homevideo/delete/${ids}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Video deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
        }
      }).catch(err => {
        console.log(err);
      })
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
    axios.get(`${common.api_url}policycategory/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setVideoInformation(jsonPrser.data.data)
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
    axios.get(`${common.api_url}homevideo/delete/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setVideoInformation(jsonPrser.data.data)
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
    axios.get(`${common.api_url}homevideo/show/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setVideoInformation(jsonPrser.data.data)
        setTitle(jsonPrser.data.data.title);
        setHomeVideo(jsonPrser.data.data.video);
        setCatorey(jsonPrser.data.data.country_id);
        setids(jsonPrser.data.data.id)
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }


  const UpdatepolicyById = () => {
	const formData = new FormData();
    formData.append('title',title);
    formData.append('country_id',Countries);
    formData.append('videofile',homevideo);
    
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };

    axios.put(`${common.api_url}homevideo/update/${ids}`, formData,config)
        .then(response => {
          toggle5(false);
          getData()
          swal("polciy Updated Successfully!");
          return response.data.data;
    })
    .catch(err => {
      console.log(err);
    })
  }



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
                   Add ideo
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
                      </tr>
                      <tr>
                        <th>Sl</th>
                        <th>Action</th>
                        <th>Title</th>
                        <th>country</th>
                        <th>Video</th>
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
                          <td>{data.title}</td>
                          <td><video style={{width:'100px',height:'100px'}} autoPlay muted src={"http://codestarc.com/client/tourtravelimages/homeVideo/"+data.video} /></td>
                          <td>{data.get_countries[0].name}</td>
                          {/* <td> {country.filter(country => country.id<data.country_id).map(county_id => (county_id.name))}</td> */}
                          {/* edit section for canclation */}
                          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                            <ModalHeader toggle={toggle5}>Edit Home Video</ModalHeader>
                            <ModalBody>
                            <Form >
                               <FormGroup row>
                              <Label htmlFor="personCapacity" sm={1}>Title</Label>
                              <Col sm={3}>
                                <Input
                                  type="text"
                                  id="title"
                                   name="title"
                                  defaultValue={videoInformation.title}
								  value={title}
                                  onChange={e => setTitle(e.target.value)}
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="personCapacity" sm={1}>Country</Label>
                              <Col sm={3}>
                              <CustomInput
                                type="select"
                                id="countries_1"
                                name="customSect"
                                value={country.id}
								defaultValue={videoInformation.country_id}
                                onChange={e => setCountries(e.target.value)}
                                >
                                <option >Select Country</option>
                                {country.map((data, index) =>
                                  <option key={index} value={data.id}>{data.name}</option>
                                )};
                              </CustomInput>
                            </Col>
                            </FormGroup>
                            <FormGroup row>
							   <Label htmlFor="personCapacity" sm={1}>Image</Label>
							<Col sm={3}>
							<div>
							<video style={{width:'100px',height:'100px'}} autoPlay muted src={"http://codestarc.com/client/tourtravelimages/homeVideo/"+videoInformation.video} />
							</div>
							</Col>
                              <Col sm={3}>
                               <Input
								  type="file"
								  id="videofile"
								  name="videofile"
								  onChange={handleFileChange}
								/>
							  </Col>
                            </FormGroup>
                              </Form>
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
        <ModalHeader toggle={toggle2}>Information Of Home Video</ModalHeader>
        <ModalBody className="text-center">
          <Form>
            <FormGroup row>
              <Label className='view_head' htmlFor="personCapacity" sm={1}>Title:</Label>
              <Col sm={4}>
                {videoInformation.title ?
                  videoInformation.title
                  : ('Null')}
              </Col>
              <Label className='view_head' htmlFor="personCapacity" sm={1}>Country:</Label>
              <Col sm={4}>
                {videoInformation.Country ?
                  videoInformation.Country
                  : ('Null')}
              </Col>
              <Label className='view_head' htmlFor="personCapacity" sm={1}>Title:</Label>
              <Col sm={4}>
                {videoInformation.homevideo ?
                  videoInformation.homevideo
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
        <ModalHeader toggle={toggle4}>Delete Home Video</ModalHeader>
        <ModalBody>
          <p>Are you sure Want To Delete {videoInformation.homevideo}?
                </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle4}>
            Close
                </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={() => removeData(videoInformation.id)}>
            Delete
              </Button>
        </ModalFooter>
      </Modal>

      <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
        <ModalHeader toggle={toggle3}>Add Home Video</ModalHeader>
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
              <Label htmlFor="personCapacity" sm={1}>Country</Label>
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
              {CountryError != '' ? (
                  <Label style={{ color: "red" }}>
                    {CountryError}
                  </Label>
                ) : null}
            </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="personCapacity" sm={1}>Home Video</Label>
              <Col sm={3}>
              <Input
                  type="file"
                  id="videofile"
                  name="videofile"
                  onChange={handleFileChange}
                />
                {homevideoError != '' ? (
                  <Label style={{ color: "red" }}>
                    {homevideoError}
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

export default CanclationCategory;
