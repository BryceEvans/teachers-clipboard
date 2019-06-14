import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
// import Paper from '@material-ui/core/Paper';

import SortButtons from '../SortButtons/SortButtons';
import AlternatingSortButtons from '../SortButtons/AlternatingSortButtons';

class SeatingCharSort extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <Segment style={{display: "flex", justifyContent: "space-evenly", padding: "20px"}}>
        <SortButtons />
        <AlternatingSortButtons />
        <Button color="teal">Attendance Report</Button>
      </Segment>
    );
  }
}

export default SeatingCharSort;