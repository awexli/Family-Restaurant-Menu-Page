import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BurgerButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    toggleActiveClass: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active, toggleActiveClass } = this.props;

    return (
      <button
        onClick={toggleActiveClass}
        className="nav__btn"
        type="button"
        aria-label="menu"
      >
        <span className={active ? 'nav__burger active' : 'nav__burger'}></span>
      </button>
    );
  }
}

export default BurgerButton;
