import React, { Component } from 'react';
import '../../scss/category.scss';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="category">
        <div className="category__header">
          <h2>Category Title</h2>
          <div className="category__jump">
            <p>up</p>
            <p>down</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item-num">
            <h3>S23</h3>
          </div>
          <div className="category__description">
            <p>Salt & Baked Chicken</p>
            <p>客家鹽焗雞</p>
            <p>$14.95(半 Half) $28.00(Whole)</p>
          </div>
        </div>
      </div>
    );
  }
}
