import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import common  from "../../common/common";
import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
// import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
// import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
// import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import HostDashboard from '../../example-components/DashboardDefault/DashboardDefaultSection5';
export default function DashboardDefault() {
  let role = localStorage.getItem("role");
  let isloggedIn = localStorage.getItem("IsLoggedIn");
  if (role == common.role.Admin) {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Dashboard"
        />
        <DashboardDefaultSection1 />
        {/* <DashboardDefaultSection3 />
      <DashboardDefaultSection4 /> */}
      </Fragment>
    );
  } else  {  if (role == common.role.User) {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Dashboard"
        />

      <HostDashboard />
        {/* <DashboardDefaultSection3 />
      <DashboardDefaultSection4 /> */}
      </Fragment>
    );
  } 
    return <Redirect to="/" />
  }
}
