import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      active: 'Home'
    }

    this.links = [
      // these icons are Semantic UI and it's since been changed to Material UI.
      { url: `/dashboard/home`, name: 'home', icon: 'home' },
      { url: `/dashboard/tracker`, name: 'tracker', icon: 'clipboard outline' },
      { url: `/dashboard/students`, name: 'students', icon: 'address book' },
      { url: `/dashboard/reports`, name: 'reports', icon: 'clipboard list' },
      { url: `/dashboard/settings`, name: 'settings', icon: 'setting' },
    ]
  }
  
  handleItemClick = (e) => {
    this.setState({ active: e.target.innerHTML })
  }

  render() {

    const { active } = this.state

    return (
      <AppBar position="static" style={{display: "flex", flexDirection: "row", justifyContent: "flexStart"}}>
          {this.links.map((link, index) => (
            <Link key={index} to={link.url} style={{margin: "10px", color: "white"}}>
              {/* <MenuItem
                // id="simple-menu"
                // keepMounted
              > */}
                {link.name}
              {/* </MenuItem> */}
            </Link>
          ))}
      </AppBar>

    //   <Menu secondary>
    //     {this.links.map((link, index) => (
    //       <Link key={index} to={link.url}>
    //         {/* <Icon name={link.icon} /> */}
    //         <Menu.Item
    //           name={link.name}
    //           onClick={this.handleItemClick}
    //           as='a'
    //         >
    //           {/* {link.name} */}
    //         </Menu.Item>
    //       </Link>
    //     ))}
    //   </Menu>
    )
  }
}