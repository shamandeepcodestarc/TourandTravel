import React, { Fragment } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <Fragment>
      <div className="app-footer text-black-50">
        <div className="app-footer--second">
          <span>Solution React Admin Dashboard</span> ©
          2021 - crafted with <span className="text-danger px-1">❤</span> by{' '}
          <a href="https://codestarc.com" target="_blank" title="UiFort.com">
           Codestrac.com
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
