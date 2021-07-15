import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './transactions.css'
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

          function Transaction() {

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
   const [loader, setLoader] = useState(true);

  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);


  const [list, setList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [Catorey, setCatorey] = useState([]);
  const [trasactionInformation, setTrasactionInformation] = useState([]);
  const [GeTtrasactionInformation, setGetTrasactionInformation] = useState("");

  const [checkTogglebed, setCheckTogglebed] = useState(false);
  const [checkToggledrink, setcheckToggledrink] = useState(false);
  const [checkTogglefoods, setcheckTogglefoods] = useState("");
   const [Placetype, setPlacetype] = useState([]);
   const [amount, setAmount] = useState('');
   const [braintreeId, setBraintreeId] = useState('');
   const [cardType, setCardType] = useState('');
  const [name , setName ] =useState("");
  const [transactionstatus , setTransactionstatus ] =useState("");

 
  const [search, setSearch] = useState("");
  const [searchbyName, setSearchbyName] = useState("");
  

    const handleSubmit = (evt) => {
    evt.preventDefault();

    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
   
  }


  useEffect(() => {
     getData();
    
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
     axios.get(`http://codestarc.com/client/newproject/api/gettransaction`, config).then((response) => {
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
     axios.get(`${common.api_url}payment/${id}`, config).then((response) => {
       let dataJson = JSON.stringify(response);
       let jsonPrser = JSON.parse(dataJson);
       if (jsonPrser.status == 200) {
         setTrasactionInformation(jsonPrser.data.creditCard)
         toggle2(true)
       }
     }).catch((error) => {
       console.log(error, 'errror');

     });

   }
  
  const token = localStorage.getItem("token")

  let role = localStorage.getItem("role");
  let isLoggedIn = localStorage.getItem("IsLoggedIn")
  // if (role && isLoggedIn) {
  //   if (loader == true) {
  //     return (
  //       <Fragment>
  //         <LoaderClass className="loader_position" />
  //       </Fragment>
  //     )
  //   } else {
    return (

        <Fragment>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Transaction</h1>
                  </div>

                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
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
                            <th>Sl</th>
                            <th>Action</th>
                            <th>Amount</th>
                            <th>BrainTree Id</th>
                            <th>cardType</th>
                            <th>Name</th>
						              	<th>Transaction status</th>
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
                              <td> 
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
                              <td>{data.amount}</td>
                              <td>{data.braintree_id}</td>
                              <td>{data.cardType}</td>
                              <td>{data.name}</td>
							                <td>{data.status}</td>
                              <td className={common.status[data.status_id]}>{common.status[data.status_id]}</td>  
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
            <ModalHeader toggle={toggle2}>Information Of Transaction</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="personCapacity" sm={1}>Amount :</Label>
                  <Col sm={3}>
                    {trasactionInformation.amount ?
                      trasactionInformation.amount
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>BrainTree Id</Label>
                  <Col sm={3}>
                    {trasactionInformation.braintree_id ?
                      trasactionInformation.braintree_id
                      : ('Null')}
                  </Col>
                </FormGroup>


                <FormGroup row >
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Card Type :
                    </Label>
                  <Col sm={3}>
                    {trasactionInformation.cardType ?
                      trasactionInformation.cardType
                      : ('Null')}
                  </Col>

                  <Label className='view_head' htmlFor="personCapacity" sm={1}>
                    Name :
                    </Label>
                  <Col sm={3}>
                    {trasactionInformation.name ?
                      trasactionInformation.name
                      : ('Null')}
                  </Col>
              
                </FormGroup>
                 
                <h3>Address</h3>
                <FormGroup row>

                  <Label className='view_head' htmlFor="hotelType" sm={1}>Transaction Status  :</Label>
                  <Col sm={3}>
                    {trasactionInformation.transaction_status ?
                      trasactionInformation.transaction_status
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
        </Fragment>
       )
    //   }
    // } else {
    //   return <Redirect to='/' />
    // }
      }



export default Transaction;
