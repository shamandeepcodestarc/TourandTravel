import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect,useHistory } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

function HeaderUserbox () {
  const history = useHistory();
 const  logout =() => {
    localStorage.clear();
    history.push('/')
  }
      return (
        <Fragment>
          <Button className="m-2" color="info">
       Change password
      </Button>
          <UncontrolledDropdown className="user-box position-relative ml-2">
            <DropdownToggle
              color="link"
              className="p-0 text-left d-flex align-items-center">
              <div className="d-block d-44 rounded-sm overflow-hidden">
                <img src="  " className="img-fluid" alt="..." />
              </div>
              
              <div className="d-none d-xl-block pl-2">
                <div className="font-weight-bold"></div>
                <span className="text-black-50">Admin</span>
              </div>
              <span className="pl-1 pl-xl-3">
                <FontAwesomeIcon
                  icon={['fas', 'angle-down']}
                  className="opacity-5"
                />
              </span>
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
              <ListGroup flush className="text-left bg-transparent">
                <ListGroupItem className="rounded-top">
                  <Nav pills className="nav-neutral-primary flex-column">
                    <NavItem>
                      <NavLink>
                        <Button color="second" onClick={logout}>Logout</Button>
                    </NavLink>
                    </NavItem>
                  </Nav>
                </ListGroupItem>
              </ListGroup>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Fragment>
      );
    }
    export default HeaderUserbox; 
