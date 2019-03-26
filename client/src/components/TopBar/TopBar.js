import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      active: 'home'
    }

    this.links = [
      { url: `/dashboard`, name: 'home', icon: 'home' },
      { url: `/dashboard/tracker`, name: 'tracker', icon: 'clipboard outline' },
      { url: `/dashboard/students`, name: 'students', icon: 'address book' },
      { url: `/dashboard/reports`, name: 'reports', icon: 'clipboard list' },
      { url: `/dashboard/settings`, name: 'settings', icon: 'setting' },
    ]

    this.handleItemClick = (e) => {
      this.setState({ active: e.target.innerHTML })
  }
}

  render() {

    // const { active } = this.state

    return (
      <Menu secondary>
        {this.links.map((link, index) => (
          <Link key={index} to={link.url}>
            {/* <Icon name={link.icon} /> */}
            <Menu.Item
            name={link.name}
            onClick={this.handleItemClick}
            as='a'
            />
          </Link>
        ))}
      </Menu>
    )
  }
}