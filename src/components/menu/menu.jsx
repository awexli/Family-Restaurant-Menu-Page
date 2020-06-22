import React, { Component } from 'react';
import MenuItem from './menu-item';
import MenuHeader from './menu-header';
import './styles/menu.scss';
import MenuModal from '../../js/menu-modal';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    // api structure
    const menuNames = MenuModal.getMenuNames();
    const menu = [];

    menuNames.forEach((name) => {
      const category = MenuModal.getMenu(name);
      menu.push(category);
    });

    this.setState({ menu: menu })
  }

  render() {
    const { menu } = this.state;

    return (
      <div className="menu">
        {menu.map((category, index) => (
          <div className="menu__category" key={index} >
            <MenuHeader menuTitle={category.name}></MenuHeader>
            <MenuItem menuItems={category.data}></MenuItem>
          </div>
        ))}
      </div>
    );
  }
}
