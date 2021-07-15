import React, { Fragment, Component } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';

const sidebarMenuContent = [
  {
    label: 'Dashboards',
    icon: 'pe-7s-safe',
    to: '/DashboardDefault'
  },
  {
    label: 'Users',
    icon: 'pe-7s-keypad',
    to: '/users'
  },
  {
    label: 'Properties',
    icon: 'pe-7s-box2',
    to: '/properties'
  },
  {
    label: 'Rooms',
    icon: 'pe-7s-id',
    to: '/rooms'
  },
  {
    label: 'Entertainment-Activity',
    icon: 'pe-7s-box2',
    to: '/activities'
  },
  {
    label: 'Taxi',
    icon: 'pe-7s-menu',
    to: '/taxi'
  },

 // {
   // label:'Activities',
   // icon: 'pe-7s-',
   // to: '/activities'

 // },

 // {
   // label:'Activity Deal',
   // icon: 'pe-7s-',
   //  to: '/activity deal'

 // },
   {
      label: 'Restaurant/ Coffee shop',
      icon: 'pe-7s-coffee',
       to: '/Restaurant/ Coffee shop'
   },
   {
   label: 'Deals',
    icon: 'pe-7s-menu',
     to: '/Deals'
   },
   {
    label: 'Events',
    icon: 'pe-7s-display2',
    to: '/event'
   },
   {
    label: 'Events',
    icon: 'pe-7s-display2',
    to: '/event'
   },
 
];

class SidebarMenu extends Component {
  render() {
    return (
      <Fragment>
        <PerfectScrollbar>
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>
            <MetisMenu
              content={sidebarMenuContent}
              LinkComponent={RouterLink}
              activeLinkFromLocation
              iconNamePrefix=""
              noBuiltInClassNames={true}
              classNameItemActive="active"
              classNameIcon="sidebar-icon"
              iconNameStateVisible="sidebar-icon-indicator"
              iconNameStateHidden="sidebar-icon-indicator"
              classNameItemHasVisibleChild="submenu-open"
              classNameItemHasActiveChild=""
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </PerfectScrollbar>
      </Fragment>
    );
  }
}

export default SidebarMenu;
