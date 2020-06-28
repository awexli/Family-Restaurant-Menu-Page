import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuHeaderService } from './services/menu-header-service';
import { UpArrow, DownArrow } from '../../assets/index';

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

    return (
      <>
        <div className="menu__header" id={menuHeaderId}>
          <p className="menu__title">{menuTitle}</p>
          <div className="menu__jump">
            <button
              className="menu__button"
              aria-label="Menu"
              onClick={this.handleOverlayMenu}
            >
              menu
            </button>
            <button className="menu__button" aria-label="Jump Up">
              <a href={this.handleJumpUp(menuHeaderNum)}>
                <UpArrow></UpArrow>
              </a>
            </button>
            <button className="menu__button" aria-label="Jump Down">
              <a href={this.handleJumpDown(menuHeaderNum)}>
                <DownArrow></DownArrow>
              </a>
            </button>
          </div>
        </div>
      </>
    );
  }

  handleJumpUp = (menuHeaderNum) => {
    return MenuHeaderService.jumpUp(menuHeaderNum);
  };

  handleJumpDown = (menuHeaderNum) => {
    return MenuHeaderService.jumpDown(menuHeaderNum);
  };
}

export default MenuHeader;
