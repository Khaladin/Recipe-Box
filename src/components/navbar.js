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
          <a className='navbar-brand brand-name' href='/'>Recipe Box</a>
          <button
            aria-expanded='false'
            className='navbar-toggle collapsed justify-content-end menu__button'
            onClick={this._onToggleNav}
            type='button'
          >
          <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'>Menu</span>

          </button>
        </div>
        <div
          className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
        >
          <ul className='nav navbar-nav navbar-right'>
            <li className="menu__button__item-1">
              <a>About</a>
            </li>
            <li className="menu__button__item-2">
              <a>Login</a>
            </li>
            <li className="menu__button__item-3">
              <a>Sign-up</a>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default NavBar;
