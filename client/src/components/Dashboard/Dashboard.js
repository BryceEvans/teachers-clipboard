import React from 'react';
import { Route } from 'react-router-dom';
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import MainDnD from "../DND/MainDnD"
import TopNavigation from "../NavigationBar/TopNavigation";
import SideNavigation from "../NavigationBar/SideNavigation";
import MainHome from "../HomePage/MainHome"
const Dashboard = () => {
      return (
  <DndProvider backend={HTML5Backend}>
        <div>
            <TopNavigation />
            <SideNavigation />
            <Route exact path='/home' component={ MainHome } />
            <Route path='/home/second' component={ MainDnD } />
            <Route path='/home/third' component={ MainDnD } />

            {/*<MainDnD />*/}

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
  };


export default (Dashboard)