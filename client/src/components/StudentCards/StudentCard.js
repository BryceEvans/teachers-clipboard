import React from 'react';
// import { Segment } from 'semantic-ui-react';
import Paper from '@material-ui/core/Paper';

import BottomRow from './BottomRow';

const StudentCard = (props) => {
    return ( 
      <Paper style={{margin: "10px", backgroundColor: "#ECEDEE", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{margin: "20px", width: "80px", textAlign: "center"}}>
          {/* <strong> */}
            {props.students.firstName} {props.students.lastName}
          {/* </strong> */}
        </div>
        <BottomRow />
      </Paper>
    );
  }

export default StudentCard;