import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsLayout from './example-pages/FormsLayout';
import FormsControls from './example-pages/FormsControls';
import LoginForm from 'components/forms/loginForm';

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Users = lazy(() => import('./components/Users'));
const HostDashboard = lazy(() => import('./example-components/DashboardDefault/DashboardDefaultSection5'));
const Cards3 = lazy(() => import('./example-pages/Cards3'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Carousels = lazy(() => import('./example-pages/Carousels'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tooltips = lazy(() => import('./example-pages/Tooltips'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
const Properties = lazy(() => import('./components/properties/properties'));
const molesiasLocation = lazy(() => import('./components/molesiasLocation/molesiasLocation'));
const Pubs = lazy(() => import('./components/pubs/pubs'));
const activity = lazy(() => import('./components/activity/activity'));
const homevideo = lazy(() => import('./components/homevideo/homevideo'));
const canclation = lazy(() => import('./components/canclation/canclation'));
const DealDcanclationPolicy = lazy(() => import('./components/DealDcanclationPolicy/DealDcanclationPolicy'));
const canclationCategory = lazy(() => import('./components/canclationCategory/canclationCategory'));
const transactions = lazy(() => import('./components/transactions/transactions'));
const restautent = lazy(() => import('./components/restautent/restautent'));
const Rooms = lazy(() => import('./components/rooms/rooms'));
const EntertainmentActivity = lazy(() => import('./components/entertainment/entertainment'));
const Taxi = lazy(() => import('./components/taxi/taxi'));
const beautysalon = lazy(() => import('./components/beautysalon/beautysalon'));
const RegisterForm = lazy(() => import('./components/register/register'));
const Staydeals = lazy(() => import('./components/staydeals/staydeals'));


const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              Please wait while we load the live preview examples
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/sign-in" />
          <Route path={['/sign-in']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/sign-in" component={LoginForm} />
                </motion.div>

              </Switch>
            </PresentationLayout>
              </Route>

          <Route path="/register" component={RegisterForm} />
          <Route
            path={[
              '/DashboardDefault',
              '/hostdashboard',
              '/Buttons',
               '/Dropdowns',
              '/Cards3',
              // '/ListGroups',
              // '/Modals',
              '/Notifications',
              // '/Carousels',
              // '/Popovers',
              // '/Tooltips',
              // '/Tabs',
              '/RegularTables1',
              '/RegularTables4',
              '/FormsLayout',
              '/FormsControls',
              // '/ApexCharts',
              // '/Maps',
              '/users',
              '/properties',
              '/pubs',
              '/rooms',
              '/activities',
              '/register',
              '/taxi',
              // '/Bar',
              '/staydeals',
              '/homevideo',
              '/restautent',
               '/beautysalon',
               '/transactions',
      	       '/activity',
               '/canclation',
               '/canclationCategory',
               '/DealDcanclationPolicy',
               '/molesiasLocation',
            ]}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/DashboardDefault"  component={DashboardDefault} />
                  <Route   path="/hostdashboard"     component={HostDashboard} />
                  <Route path="/Buttons" component={Buttons} />
                  <Route path="/Dropdowns" component={Dropdowns} />
                  <Route path="/NavigationMenus" component={NavigationMenus} />
                  <Route path="/ProgressBars" component={ProgressBars} />
                  <Route path="/Pagination" component={Pagination} />
                  <Route path="/Scrollable" component={Scrollable} />
                  <Route path="/Badges" component={Badges} />
                  <Route path="/Icons" component={Icons} />
                  <Route path="/UtilitiesHelpers"component={UtilitiesHelpers}/>
                  <Route path="/Cards3" component={Cards3} />
                  <Route path="/ListGroups" component={ListGroups} />
                  <Route path="/Modals" component={Modals} />
                  <Route path="/Notifications" component={Notifications} />
                  <Route path="/Carousels" component={Carousels} />
                  <Route path="/Popovers" component={Popovers} />
                  <Route path="/Tooltips" component={Tooltips} />
                  <Route path="/Tabs" component={Tabs} />
                  <Route path="/RegularTables1" component={RegularTables1} />
                  <Route path="/RegularTables4" component={RegularTables4} />
                  <Route path="/FormsLayout" component={FormsLayout} />
                  <Route path="/FormsControls" component={FormsControls} />
                  <Route path="/ApexCharts" component={ApexCharts} />
                  <Route path="/Maps" component={Maps} />
                  <Route path="/users" component={Users} />
                  {/* <Route path="/bar" component={Bar} /> */}
                  <Route path="/properties" component={Properties} />
                  <Route path="/molesiasLocation" component={molesiasLocation} />
                  <Route path="/pubs" component={Pubs} />
                  <Route path="/homevideo" component={homevideo} />
                  <Route path="/canclation" component={canclation} />
                  <Route path="/canclationCategory" component={canclationCategory} />
                  <Route path="/DealDcanclationPolicy" component={DealDcanclationPolicy} />
                  <Route path="/activity" component={activity} />
                  <Route path="/transactions" component={transactions} />
                  <Route path="/restautent" component={restautent} />
                  <Route path="/rooms" component={Rooms} />
                  <Route path="/activities" component={EntertainmentActivity} />
                  <Route path="/taxi" component={Taxi} />
                  <Route path="/beautysalon" component={beautysalon} />
                  
                  <Route path="/staydeals" component={Staydeals} />


                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
