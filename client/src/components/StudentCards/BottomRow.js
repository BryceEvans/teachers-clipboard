import React, { Component } from 'react';
import { Icon, Label } from 'semantic-ui-react';

class BottomRow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,

      countItems: {
        exchange: 0,
        eye: 0,
        phone: 0
      }
    }
    this.icons = [
      { name: 'user' },
      { name: 'exchange' },
      { name: 'eye' },
      { name: 'phone' }
      // { name: 'question' }
    ]
  }

  clickHandler = (e) => {
    // alert("Item clicked!");
    this.setState({ count: this.state.count + 1 })
  }

  render() { 
    return ( 
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {this.icons.map((icon, ind) => (
          <div style={{display: "flex", flexDirection: "column"}}>
            <Icon name={icon.name} onClick={this.clickHandler} style={{cursor:'pointer'}}/>
            { this.state.count > 0 ? <Label circular color='orange' size='mini'>{this.state.count}</Label> : null }
          </div>
        ))}
      </div>
    );
  }
}

export default BottomRow;