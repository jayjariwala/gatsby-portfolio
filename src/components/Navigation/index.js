import React from 'react';
import Link from 'gatsby-link';
import path from 'path';
import { Follow } from 'react-twitter-widgets'
import brand from '../../assets/images/brand.png';

console.log(brand);
const Navigation = () => (
  <nav className='navbar'>
    <div className="navbar__content-wrapper">
      <img src={brand} className="navbar__brandlogo" width='60px'/>
      <p className="navbar__name">Jay</p>
      <p className="navbar__surname">Jariwala</p>
      <ul className="navbar__links">
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Tips & tricks</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Coding Logs</a></li>
      </ul>  
      <Follow username="_deadlocked"/>
    </div>
	</nav>
)

export default Navigation
