import React, { Component } from 'react';

import { Segment } from 'semantic-ui-react';

import TrackerMenu from './TrackerMenu';
import SeatingChart from '../SeatingChart/SeatingChart';
// import SeatingChartSort from '../SeatingChart/SeatingChartSort';

class Tracker extends Component {
  state = {  }
  render() { 
    return ( 
      <Segment>
        <TrackerMenu />
        <SeatingChart />
        {/* <SeatingChartSort /> */}
      </Segment>
    );
  }
}

export default Tracker;