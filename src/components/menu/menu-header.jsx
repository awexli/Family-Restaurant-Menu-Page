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
              className="menu__button button is-dark"
              aria-label="Menu"
              onClick={this.handleOverlayMenu}
            >
              Menu
            </button>

            <a
              className="menu__button button is-dark "
              href={this.handleJumpUp(menuHeaderNum)}
              aria-label="Jump Up"
            >
              <UpArrow></UpArrow>
            </a>
            <a
              className="menu__button button is-dark"
              href={this.handleJumpDown(menuHeaderNum)}
              aria-label="Jump Down"
            >
              <DownArrow></DownArrow>
            </a>
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
