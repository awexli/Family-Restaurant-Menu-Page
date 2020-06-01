import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuHeader extends Component {
  static propTypes = {
    menuTitle: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menuTitle = this.props.menuTitle;
    return (
      <div className="menu__header">
        <p>{menuTitle}</p>
        <div className="menu__jump">
          <p>up</p>
          <p>down</p>
        </div>
      </div>
    );
  }
}

export default MenuHeader;
