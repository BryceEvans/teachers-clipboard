import React from 'react';
import { Route } from 'react-router-dom';
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Example from "../DND/example"


import Tracker from '../Tracker/Tracker';

const Dashboard = () => {
      return (
  <DndProvider backend={HTML5Backend}>


        <div>
          <Example />

            <Route path='/dashboard/tracker' component={ Tracker } />
            
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