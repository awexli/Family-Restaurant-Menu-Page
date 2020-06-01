import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu-item';
import MenuHeader from './menu-header';

class MenuBody extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menu = this.props.menu;
    return (
      <>
        {menu.map((category, index) => (
          <div key={index} className="menu__category">
            <MenuHeader menuTitle={category.name}></MenuHeader>
            <MenuItem menuItems={category.data}></MenuItem>
          </div>
        ))}
      </>
    );
  }
}

export default MenuBody;
