import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavMenu extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active } = this.props;
    const category = [
      { name: 'House Special (特色菜)', url: "#" },
      { name: 'All-Day Takeout (全日外賣)', url: "#" },
      { name: 'Appetizers (餐前小食)', url: "#" },
      { name: 'Soup (湯羹類)', url: "#" },
      { name: 'Seafood (海鮮類)', url: "#" },
      { name: 'Chicken & Duck & Frog (雞鴨田雞類)', url: "#" },
      { name: 'Beef & Lamb (牛羊類)', url: "#" },
      { name: 'Pork (豬肉類)', url: "#" },
      { name: 'Clay Pot (煲仔類)', url: "#" },
      { name: 'Mu Shu (木須類)', url: "#" },
      { name: 'Lettuce Wraps (生菜包)', url: "#" },
      { name: 'Vegetables (健康素菜類)', url: "#" },
      { name: 'Chow Mein & Fun (粉麵類)', url: "#" },
      { name: 'Fried Rice (炒飯類)', url: "#" },
      { name: 'Congee (粥類)', url: "#" },
      { name: 'Crab (蟹)', url: "#" },
      { name: 'Lobster (龍蝦)', url: "#" },
      { name: 'Rice Plates & Soup (午餐碟飯送例湯)', url: "#" },
    ];
    
    return (
      <div className={active ? 'nav__overlay active' : 'nav__overlay'}>
        <div className="nav__menu">
          <ul className="nav__menu-list">
            {category.map((cat, index) => (
              <li key={index} className="nav__menu-item">
                <a href={cat.url} className="nav__menu-link">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavMenu;
