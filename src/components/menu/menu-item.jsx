import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../js/menu-modal';

class MenuItem extends Component {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menuItems = this.props.menuItems;

    return (
      <>
        {menuItems.map((item, index) => (
          <div key={index} className="menu__item">
            <div className="menu__item-num">
              <h3>{item.number}</h3>
            </div>
            <div className="menu__description">
              <p>{item.english}</p>
              <p>{item.chinese}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MenuItem;
