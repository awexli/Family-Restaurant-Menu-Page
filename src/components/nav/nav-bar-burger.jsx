import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBarBurger extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active, handleClick } = this.props;
    const activeClass = 'navbar-burger burger is-active';
    const defaultClass = 'navbar-burger burger';
    return (
      <div
        className={active ? activeClass : defaultClass}
        aria-label="menu"
        aria-expanded="false"
        data-target="nav-menu"
        onClick={handleClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    );
  }
}

export default NavBarBurger;
