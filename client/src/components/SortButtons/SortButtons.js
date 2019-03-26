import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

class SortButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }

    this.options = [
      { key: 1, text: 'Random', value: 1 },
      { key: 2, text: 'First Name', value: 2 },
      { key: 3, text: 'Last Name', value: 3 },
      { key: 4, text: 'Student ID', value: 4 },
      { key: 5, text: 'Reading Level', value: 5 },
      { key: 6, text: 'Benchmark Score', value: 6 },
      { key: 7, text: 'Rise Score', value: 7 },
      { key: 8, text: 'Current Grade', value: 8 },
    ]
  }

  render() { 
    return ( 
      <Button.Group color="blue">
        <Button>Sort Students By...</Button>
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

export default SortButtons;