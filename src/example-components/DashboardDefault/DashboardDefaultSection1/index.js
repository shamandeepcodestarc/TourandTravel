import React, { Fragment,useEffect ,useState} from 'react';

import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import common from "../../../common/common";
import { Row, Col, CardBody, Card, Button } from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const [count, setCount] = useState([]);
  var isLoading = true;
useEffect(() => {
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
    axios.get(`${common.api_url}user-list`, config).then((response) => {
      var dataCount = JSON.stringify(response.data.count);
      if (dataCount) {
        setCount(dataCount)
        isLoading =false;
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
},[])

    const options = {
    labels: ['A', 'B', 'C', 'D', 'E']
  };
  const series = [44, 55, 41, 17, 15];

  const chart30Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart30Data = [
    {
      name: 'Customers',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Sales',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  return (
    <Fragment>
      <Row>
        <Col lg="4">
          <Card className="card-box bg-premium-dark border-0 text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                  Users 
                  </small>
                  <span className="font-size-xxl mt-1">{count}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['fas', 'user-friends']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">15.4%</span>
                <span className="text-white-50">increase this month</span>
              </div> */}
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-box bg-midnight-bloom text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Sales
                  </small>
                  <span className="font-size-xxl mt-1">23,274</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-warning mr-1"
                />
                <span className="text-warning pr-1">7.4%</span>
                <span className="text-white-50">same as before</span>
              </div> */}
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-box bg-plum-plate text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Orders
                  </small>
                  <span className="font-size-xxl mt-1">345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-down']}
                  className="text-white mr-1"
                />
                <span className="text-white px-1">15.4%</span>
                <span className="text-white-50">less orders</span>
              </div> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardBody className="p-0">
              <Row className="mt-4">
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button size="sm" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </CardBody>
            <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="6">
       <div className="d-flex justify-content-center">
        <Chart options={options} series={series} type="donut" width="380" />
      </div>
        </Col>
      </Row>
    </Fragment>
  );
}
