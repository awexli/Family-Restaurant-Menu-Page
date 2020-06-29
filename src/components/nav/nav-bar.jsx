import React, { Component } from 'react';
import NavBarBurger from './nav-bar-burger';
import NavBarMenu from './nav-bar-menu';
import { MenuCategoryService } from '../menu-category-service';

import { Logo } from '../../assets';
import '../scss/nav.scss';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { active } = this.state;
    const category = MenuCategoryService.CategoryLocation();
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <Logo></Logo>
          </a>
          <NavBarBurger active={active} handleClick={this.toggleActiveClass} />
        </div>
        <NavBarMenu
          category={category}
          active={active}
          handleClick={this.toggleActiveClass}
        />
      </nav>
    );
  }

  toggleActiveClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
}
