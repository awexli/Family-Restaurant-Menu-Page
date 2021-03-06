import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MenuHeaderService } from './services/menu-header-service';
import { MenuCategoryService } from '../menu-category-service';
import { Mobile } from '../media-queries';

import { UpArrow, DownArrow } from '../../assets/index';
import { MenuArrow } from './menu-arrow';

class MenuHeader extends Component {
  static propTypes = {
    menuTitle: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const menuTitle = this.props.menuTitle;
    const menuHeaderId = MenuHeaderService.getHeaderId(menuTitle);
    const menuHeaderNum = MenuHeaderService.getHeaderNum(menuTitle);
    const category = MenuCategoryService.CategoryLocation();

    return (
      <div className="card">
        <header className="card-header menu__header" id={menuHeaderId}>
          <p className="card-header-title">{menuTitle}</p>
          <div className="menu__jump">
            {this.renderMenuDropdown(category)}
            <Mobile>{this.renderArrowButton(menuHeaderNum)}</Mobile>
          </div>
        </header>
      </div>
    );
  }

  renderMenuDropdown = (category) => {
    return (
      <div
        className={
          this.state.active ? 'dropdown is-active is-right' : 'dropdown'
        }
      >
        {this.renderMenuButton()}
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {category.map((cat, ndx) => (
              <a
                key={ndx}
                href={cat.url}
                className="dropdown-item"
                onClick={this.handleMenuClick}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  renderMenuButton = () => {
    return (
      <div className="dropdown-trigger">
        <button
          className="button is-dark menu__button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={this.handleMenuClick}
        >
          Menu
        </button>
      </div>
    );
  };
  
  renderArrowButton = (menuHeaderNum) => {
    let arrowButton;
    if (menuHeaderNum === 0) {
      arrowButton = (
        <MenuArrow
          handleJump={this.handleJumpDown(menuHeaderNum)}
          label={'Jump Down'}
          arrow={<DownArrow />}
        />
      );
    } else if (menuHeaderNum === 17) {
      arrowButton = (
        <>
          <MenuArrow
          handleJump={this.handleJumpUp(menuHeaderNum)}
          label={'Jump Up'}
          arrow={<UpArrow />}
        />
        <MenuArrow
            handleJump={"#footer"}
            label={'Jump Down'}
            arrow={<DownArrow />}
          />
        </>
      );
    } else {
      arrowButton = (
        <>
          <MenuArrow
            handleJump={this.handleJumpUp(menuHeaderNum)}
            label={'Jump Up'}
            arrow={<UpArrow />}
          />
          <MenuArrow
            handleJump={this.handleJumpDown(menuHeaderNum)}
            label={'Jump Down'}
            arrow={<DownArrow />}
          />
        </>
      );
    }
    return arrowButton;
  }

  handleJumpUp = (menuHeaderNum) => {
    return MenuHeaderService.jumpUp(menuHeaderNum);
  };

  handleJumpDown = (menuHeaderNum) => {
    return MenuHeaderService.jumpDown(menuHeaderNum);
  };

  handleMenuClick = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
}

export default MenuHeader;
