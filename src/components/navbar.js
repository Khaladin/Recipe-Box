import React, { Component } from 'react';

class NavBar extends Component {
  state = {
    navCollapsed: true,
  }

_onToggleNav = () => {
  this.setState({ navCollapsed: !this.state.navCollapsed })
}

  render() {
    const {navCollapsed} = this.state;
    return(
      <nav className="navbar navbar-default menu">
        <div className="navbar-header">
          <a className='navbar-brand' href='/'>Your Brand</a>
          <button
            aria-expanded='false'
            className='navbar-toggle collapsed justify-content-end menu__button'
            onClick={this._onToggleNav}
            type='button'
          >
          <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar menu__but'>Menu</span>

          </button>
        </div>
        <div
          className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a>About</a>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default NavBar;
