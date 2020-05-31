import React, { Component } from 'react';
import { Nav } from './components/nav/nav-bar';
import { Category } from './components/menu/category';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav></Nav>
        <main className="main">
          <Category></Category>
        </main>
      </>
    );
  }
}

export default App;
