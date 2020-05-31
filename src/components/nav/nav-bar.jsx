import React, { Component } from 'react';
import { Logo } from '../../assets';
import BurgerButton from './burger-button';
import NavOverlay from './nav-overlay';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <nav className="nav">
        <Logo></Logo>
        <BurgerButton
          active={this.state.active}
          toggleActiveClass={this.toggleActiveClass}
        />
        <NavOverlay active={this.state.active} />
      </nav>
    );
  }

  toggleActiveClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
}
