import React from 'react';
import { Segment } from 'semantic-ui-react';

import BottomRow from './BottomRow';

const StudentCard = (props) => {
    return ( 
      <Segment style={{margin: "10px"}}>
        <div style={{margin: "10px", width: "150px", textAlign: "center"}}>
          <strong>
            {props.students.firstName} {props.students.lastName}
          </strong>
        </div>
        <div>
          <BottomRow />
        </div>
      </Segment>
    );
  }

export default StudentCard;