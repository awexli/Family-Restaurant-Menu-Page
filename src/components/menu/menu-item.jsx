import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logo, dishMap } from '../../assets';

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
      <div className="menu__item-container">
        {menuItems.map((item, index) => (
          <div key={index} className="menu__item">
            {this.handleImageContainer(item, dishMap)}
            <ul className="menu__description">
              <li>{item.english}</li>
              <li>{item.chinese}</li>
              <li>{item.price}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  handleImageContainer = (item, dishMap) => {
    if (dishMap[item.number]) {
      return (
        <div className="menu__image-container">
          {this.handleDishImages(item.number, dishMap)}
          <div className="menu__item-num">{item.number}</div>
        </div>
      );
    }

    // work in progress
    return (
      <div className="menu__image-none">
        <div className="menu__item-num-center">{item.number}</div>
      </div>
    );
  };

  handleDishImages = (itemNumber, dishMap) => {
    if (dishMap[itemNumber]) {
      return dishMap[itemNumber];
    }
    // return <Logo></Logo>;
  };
}

export default MenuItem;
