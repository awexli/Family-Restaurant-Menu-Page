import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBarMenu extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    category: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active, category, handleClick } = this.props;
    const activeClass = 'navbar-menu is-active';
    const defaultClass = 'navbar-menu';

    return (
      <div id="nav-menu" className={active ? activeClass : defaultClass}>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              Menu
            </a>
            <div className="navbar-dropdown is-boxed is-right">
              {category.map((cat, ndx) => (
                <a
                  key={ndx}
                  href={cat.url}
                  className="navbar-item"
                  onClick={handleClick}
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarMenu;
