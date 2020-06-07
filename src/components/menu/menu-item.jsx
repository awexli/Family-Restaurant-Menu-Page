import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../assets';

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
            <div className="menu__image-container">
              <Logo></Logo>
              <div className="menu__item-num">{item.number}</div>
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
