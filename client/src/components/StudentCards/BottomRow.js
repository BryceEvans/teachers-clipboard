import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class BottomRow extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.icons = [
      { name: 'user' },
      { name: 'exchange' },
      { name: 'eye' },
      { name: 'question' }
    ]
  }
  render() { 
    return ( 
      <div>
        {this.icons.map((icon, ind) => (
          <Icon name={icon.name} />
        ))}
      </div>
    );
  }
}

export default BottomRow;