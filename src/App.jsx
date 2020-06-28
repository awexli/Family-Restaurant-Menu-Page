import React, { Component } from 'react';
import { NavBar } from './components/nav/nav-bar';
import { Menu } from './components/menu/menu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <main className="main">
          <Menu></Menu>
        </main>
      </>
    );
  }
}

export default App;
