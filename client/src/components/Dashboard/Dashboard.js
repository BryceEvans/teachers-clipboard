import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Knight from "../DND/Student/Student"
import Square from "../DND/Square/Square"
import Board from "../DND/ClassroomGrid/Board"
import { observe } from '../DND/ClassroomGrid/Game'


import Tracker from '../Tracker/Tracker';


// observe(knightPosition =>
//   ReactDOM.render(<Board knightPosition={knightPosition} />, root),
// )

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 

      return ( 
        <div>

            <Board knightPosition={[0,0] } />
        


        {/* <Route exact path='/dashboard/' component={ Home } /> */}
        <Route path='/dashboard/tracker' component={ Tracker } />
        {/* <Route path='/dashboard/students' component={ Students } />
        <Route path='/dashboard/reports' component={ Reports } />
      <Route path='/dashboard/settings' component={ Settings } /> */}
      </div>
    
    )
  }
}

export default Dashboard;