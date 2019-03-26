import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Tracker from '../Tracker/Tracker';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div>
        {/* <Route exact path='/dashboard/' component={ Home } /> */}
        <Route path='/dashboard/tracker' component={ Tracker } />
        {/* <Route path='/dashboard/students' component={ Students } />
        <Route path='/dashboard/reports' component={ Reports } />
        <Route path='/dashboard/settings' component={ Settings } /> */}
      </div>
    );
  }
}

export default Dashboard;