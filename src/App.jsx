import React, { Component } from 'react';
import { Nav } from './components/nav/nav-bar';
import { Menu } from './components/menu/menu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav></Nav>
        <main className="main">
          <Menu></Menu>
        </main>
      </>
    );
  }
}

export default App;
