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
      // { name: 'question' }
    ]
  }

  clickHandler = (e) => {
    alert("Item clicked!");
  }

  render() { 
    return ( 
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {this.icons.map((icon, ind) => (
          <Icon name={icon.name} onClick={this.clickHandler} style={{cursor:'pointer'}}/>
        ))}
      </div>
    );
  }
}

export default BottomRow;