import React from 'react';
import { Route } from 'react-router-dom';
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import MainDnD from "../DND/MainDnD"


import Tracker from '../Tracker/Tracker';
import SecuredRoute from "../../Authentication/SecuredRoute";
import TopNavigation from "../NavigationBar/TopNavigation";
import SideNavigation from "../NavigationBar/SideNavigation";
import auth from "../../Authentication/Auth0";
import TopBar from "../TopBar/TopBar";

const Dashboard = () => {
      return (
  <DndProvider backend={HTML5Backend}>
        <div>
            <MainDnD />
            <TopNavigation />
            <SideNavigation />
            {/*<TopBar />*/}
            {/*<Route path='/dashboard/tracker' component={ Tracker } />*/}
            
            {/* 
              <Route exact path='/dashboard/' component={ Home } />
              <Route path='/dashboard/students' component={ Students } />
              <Route path='/dashboard/reports' component={ Reports } />
              <Route path='/dashboard/settings' component={ Settings } /> 
            */}

      </div>
  </DndProvider>
    )
  }


export default (Dashboard)