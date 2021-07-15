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
    label: 'HomeVideo',
    icon: 'pe-7s-safe',
    to: '/homevideo'
  },
  {
    label: 'Users',
    icon: 'pe-7s-keypad',
    to: '/users'
  },
  {
    label: 'DealcancellationPolicy',
    icon: 'pe-7s-keypad',
    to: '/DealDcanclationPolicy'
  },
  {
    label: 'Properties',
    icon: 'pe-7s-box2',
    to: '/properties'
  },
  {
    label: 'Locations',
    icon: 'pe-7s-box2',
    to: '/molesiasLocation'
  },
  {
    label: 'Policy',
    icon: 'pe-7s-box2',
    content: [
      {
        label: 'CancellationPolicy',
        icon: 'pe-7s-box2',
        to: '/canclation'
      },
      {
        label: 'CancellationCategory',
        icon: 'pe-7s-box2',
        to: '/canclationCategory'
      }
    ],
},

  {
    label: 'transactions',
    icon: 'pe-7s-box2',
    to: '/transactions'
  }, 
  {
    icon: 'pe-7s-box2',
    label: 'Deals',
    content: [
      {
        label: 'Pubs',
        icon: 'pe-7s-box2',
        to: '/pubs'
      },
      {
        label: 'BeautySalon',
        icon: 'pe-7s-box2',
        to: '/beautysalon'
      },
      {
        label: 'Activities',
        icon: 'pe-7s-menu',
        to: '/activity'
      },
       {
          label: 'Restaurent/CoffeeShop',
          icon: 'pe-7s-coffee',
           to: '/restautent'
       },
       {
       label: 'Stay Deals',
        icon: 'pe-7s-menu',
         to: '/staydeals'
       },
       
    ],
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
   }
  //  {
  //     label: 'Restaurent/CoffeeShop',
  //     icon: 'pe-7s-coffee',
  //      to: '/restautent'
  //  },
  //  {
  //  label: 'Stay Deals',
  //   icon: 'pe-7s-menu',
  //    to: '/staydeals'
  //  },
   
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
