import React, { Component } from 'react';
import '../../scss/menu.scss';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        <div className="menu__header">
          <h2>Menu Title</h2>
          <div className="menu__jump">
            <p>up</p>
            <p>down</p>
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__item-num">
            <h3>S23</h3>
          </div>
          <div className="menu__description">
            <p>Salt & Baked Chicken</p>
            <p>客家鹽焗雞</p>
            <p>$14.95(半 Half) $28.00(Whole)</p>
          </div>
        </div>
      </div>
    );
  }
}
