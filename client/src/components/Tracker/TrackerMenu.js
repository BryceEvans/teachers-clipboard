import React, { Component } from 'react';
// import Menu from '@material-ui/core/Menu';
// import { Menu } from 'semantic-ui-react';
import Period from '../Periods/Period';

class TrackerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    
    this.classPeriods = [
      { class: '2nd', name: 'Honors' },
      { class: '3rd', name: 'Core' },
      { class: '4th', name: 'Core' },
      { class: '5th', name: 'ESL' },
      { class: '6th', name: 'Core' },
      { class: '7th', name: 'Honors' },
    ]
  }
  render() { 
    return ( 
      <div style={{display: "flex", flexDirection: "row", justifyContent: "flexStart"}}>
        {/* <Menu tabular> */}
          {this.classPeriods.map((classPeriods, index) => (
            <Period key={index} classPeriods={classPeriods}
            />
          ))}
        {/* </Menu> */}
      </div>
    );
  }
}

export default TrackerMenu;