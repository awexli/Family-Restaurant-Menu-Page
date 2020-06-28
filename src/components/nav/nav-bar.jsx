import React, { Component } from 'react';
import { Logo } from '../../assets';

import MenuModal from '../../js/menu-modal';
import NavBarBurger from './nav-bar-burger';
import NavBarMenu from './nav-bar-menu';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { active } = this.state;
    const category = [
      { name: 'House Special (特色菜)', url: '#house-special' },
      { name: 'All-Day Takeout (全日外賣)', url: '#' },
      { name: 'Appetizers (餐前小食)', url: '#' },
      { name: 'Soup (湯羹類)', url: '#soup' },
      { name: 'Seafood (海鮮類)', url: '#' },
      { name: 'Chicken & Duck & Frog (雞鴨田雞類)', url: '#' },
      { name: 'Beef & Lamb (牛羊類)', url: '#' },
      { name: 'Pork (豬肉類)', url: '#' },
      { name: 'Clay Pot (煲仔類)', url: '#' },
      { name: 'Mu Shu (木須類)', url: '#' },
      { name: 'Lettuce Wraps (生菜包)', url: '#' },
      { name: 'Vegetables (健康素菜類)', url: '#' },
      { name: 'Chow Mein & Fun (粉麵類)', url: '#' },
      { name: 'Fried Rice (炒飯類)', url: '#' },
      { name: 'Congee (粥類)', url: '#' },
      { name: 'Crab (蟹)', url: '#' },
      { name: 'Lobster (龍蝦)', url: '#' },
      { name: 'Rice Plates & Soup (午餐碟飯送例湯)', url: '#' },
    ];
    return (
      // <nav className="nav">
      //   <Logo></Logo>
      //   <BurgerButton
      //     active={this.state.active}
      //     toggleActiveClass={this.toggleActiveClass}
      //   />
      //   <NavOverlay active={this.state.active} />
      // </nav>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <Logo></Logo>
          </a>
          <NavBarBurger 
            active={active} 
            handleClick={this.toggleActiveClass} 
          />
        </div>
        <NavBarMenu
          category={category}
          active={active}
          handleClick={this.toggleActiveClass}
        />
      </nav>
    );
  }

  toggleActiveClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
}
