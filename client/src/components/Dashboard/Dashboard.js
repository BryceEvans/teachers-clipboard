import React from 'react';
import { Route } from 'react-router-dom';


import Example from "../DND/example"
import withDragDropContext from '../DND/fix';


import Tracker from '../Tracker/Tracker';

const Dashboard = () => {
      return ( 
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
    
    )
  }


export default withDragDropContext(Dashboard)