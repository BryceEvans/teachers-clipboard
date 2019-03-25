import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Period = (props) => {
    return ( 
      <Menu.Item>
        <Link to={'/dashboard/tracker/exampleclass'}>
          <strong>{props.classPeriods.class}:</strong> {props.classPeriods.name}
        </Link>
      </Menu.Item>
    );
  }

export default Period;