import React from 'react'
import Link from 'gatsby-link'
import brand from '../../assets/images/brand.png';

const MobileNavigation = () => (
  <nav className="mobile-navbar">
    <div className="mobile-navbar__header">
      <img src={brand} className="navbar__logo"/>
      <i className="fas fa-bars"></i>
    </div>
    <div className="mobile-navbar__links">
      <ul>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
	</nav>
)

export default MobileNavigation;
