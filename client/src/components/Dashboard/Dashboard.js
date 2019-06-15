import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import Example from "../DND/example6/example"
import Example from "../DND/AGAIN/example"
import Board from "../DND/ClassroomGrid/Board"
import { observe } from '../DND/ClassroomGrid/Game'
import withDragDropContext from '../DND/Student/fix';


import Tracker from '../Tracker/Tracker';

//************************************ */Refactor into HOOKS!
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      knightPosition: [0, 0]
     }
  }
  componentDidMount = () => {
    observe(knightPosition => {
        this.setState(prevState => ({
            ...prevState,
            knightPosition
        }));
    });
}

  render() { 
      return ( 
        <div>
          <Example />
            <Board knightPosition={this.state.knightPosition} />
            {/* <Route path='/dashboard/home' component={ Board } /> */}
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
}

export default withDragDropContext(Dashboard)