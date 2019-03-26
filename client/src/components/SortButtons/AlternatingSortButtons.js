import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

class AlternatingSortButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }

    this.options = [
      { key: 1, text: 'First Name', value: 1 },
      { key: 2, text: 'Last Name', value: 2 },
      { key: 3, text: 'Student ID', value: 3 },
      { key: 4, text: 'Reading Level', value: 4 },
      { key: 5, text: 'Benchmark Score', value: 5 },
      { key: 6, text: 'RISE Score', value: 6 },
      { key: 7, text: 'Current Grade', value: 7 },
    ]
  }

  render() { 
    return ( 
      <Button.Group color="green">
        <Button>Sort Students By ALTERNATING...</Button>
        <Dropdown 
          as={Button}
          className='icon'
          floating
          options={this.options}
          trigger={<React.Fragment />}
        />
      </Button.Group>
    );
  }
}

export default AlternatingSortButtons;