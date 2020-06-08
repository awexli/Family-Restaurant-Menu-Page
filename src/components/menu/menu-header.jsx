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
    const headerId = {
      'House Special (特色菜)': { id: 'house-special', num: 0 },
      'All-Day Takeout (全日外賣) (29.95)\n\nChoose Any 3 Items (任選以下三款小菜)': {
        id: 'all-day',
        num: 1,
      },
      'Appetizers (餐前小食)': { id: 'appetizers', num: 2 },
      'Soup (湯羹類)': { id: 'soup', num: 3 },
      'Seafood (海鮮類)': { id: 'seafood', num: 4 },
      'Chicken & Duck & Frog (雞鴨田雞類)': { id: 'chicken-duck-frog', num: 5 },
      'Beef & Lamb (牛羊類)': { id: 'beef-lamb', num: 6 },
      'Pork (豬肉類)': { id: 'pork', num: 7 },
      'Clay Pot (煲仔類)': { id: 'clay-pot', num: 8 },
      'Mu Shu (木須類)': { id: 'mushu', num: 9 },
      'Lettuce Wraps (生菜包)': { id: 'lettuce-wrap', num: 10 },
      'Vegetables (健康素菜類)': { id: 'vegetables', num: 11 },
      'Chow Mein & Fun (粉麵類)': { id: 'chow-mein', num: 12 },
      'Fried Rice (炒飯類)': { id: 'fried-rice', num: 13 },
      'Congee (粥類)': { id: 'congee', num: 14 },
      'Crab (蟹) (Market Price)\n\nPlease decide on one of the following cooking methods\n(蟹有下列烹調方法可供選擇)': {
        id: 'crab',
        num: 15,
      },
      'Lobster (龍蝦) (Market Price)\n\nPlease decide on one of the following cooking methods\n(龍蝦有下列烹調方法可供選擇)': {
        id: 'lobster',
        num: 16,
      },
      'Rice Plates & Soup (午餐碟飯送例湯)': { id: 'rice-plates', num: 17 },
    };

    return (
      <div className="menu__header" id={headerId[menuTitle].id}>
        <p>{menuTitle}</p>
        <div className="menu__jump">
          <a
            href={this.handleJumpUp(headerId[menuTitle].num, headerId)}
            className="menu__button"
            aria-label="Jump Up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#FFFFFF" d="M0 4l4-4 4 4z" />
            </svg>
          </a>
          <a
            href={this.handleJumpDown(headerId[menuTitle].num, headerId)}
            className="menu__button"
            aria-label="Jump Down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#FFFFFF" d="M0 0l4 4 4-4z" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // might refactor to binary search
  handleJumpUp = (menuTitleNum, headerId) => {
    const toJump = menuTitleNum - 1;
    for (let key in headerId) {
      if (headerId[key].num === toJump) {
        return `#${headerId[key].id}`;
      }
    }
  };

  handleJumpDown = (menuTitleNum, headerId) => {
    const toJump = menuTitleNum + 1;
    for (let key in headerId) {
      if (headerId[key].num === toJump) {
        return `#${headerId[key].id}`;
      }
    }
  };
}

export default MenuHeader;
