import React from 'react'
import Link from 'gatsby-link'
import brand from '../../assets/images/brand.png';

class MobileNavigation extends React.Component
{
  state = {
    navToggle: false
  }

  toggleNavbar = () =>
  {
    this.setState((prevState) => ({navToggle : !prevState.navToggle}));
  }
  
  render()
  {
    const mobileNav = 'mobile-navbar__links ' + (this.state.navToggle === true ? 'mobile-navbar__links--show' : '');
    return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar__header">
        <img src={brand} className="navbar__logo"/>
        <i className="fas fa-bars" onClick={this.toggleNavbar} ></i>
      </div>
      <div className={mobileNav}>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
	  </nav>
    );
  }
}

export default MobileNavigation;