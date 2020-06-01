import React, { Component } from 'react';
import MenuBody from './menu-body';
import '../../scss/menu.scss';
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
        <MenuBody menu={menu}></MenuBody>
      </div>
    );
  }
}
