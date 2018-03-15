import React, { Component } from 'react';

import './Header.css'

class Header extends Component {
  render() {
    return <header className="Header">
        <nav className="Header-nav">
          <div className="Header-nav-item">Home</div>
          <div className="Header-nav-item">Earth</div>
          <div className="Header-nav-item">Neo</div>
          <div className="Header-nav-item">Mars</div>
        </nav>
      </header>;
  }
}

export default Header;