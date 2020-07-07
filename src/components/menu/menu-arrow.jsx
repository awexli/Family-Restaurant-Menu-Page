import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MenuArrow extends Component {
  static propTypes = {
    arrow: PropTypes.element.isRequired,
    handleJump: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a
        href={this.props.handleJump}
        className="menu__button button is-dark"
        aria-label={this.props.label}
      >
        {this.props.arrow}
      </a>
    );
  }
}

export default MenuArrow;
