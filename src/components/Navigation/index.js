import React from 'react';
import Link from 'gatsby-link';
import path from 'path';
import { Follow } from 'react-twitter-widgets'
import brand from '../../assets/images/brand.png';

const Navigation = () => (
  <nav className='navbar'>
    <div className="navbar__content-wrapper">
      <Link to="/"
        activeStyle={{
          textDecoration:'none',
          color:'black'
        }}
      >
      <img src={brand} className="navbar__brandlogo" width='60px'/>
      <p className="navbar__name">Jay</p>
      <p className="navbar__surname">Jariwala</p>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link
              to="/projects/"
              activeStyle={{
                borderBottom:"2px solid purple",
                color:'black'
              }}
            >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeStyle={{
              borderBottom:"2px solid purple",
              color:'black'
            }}
          >
          Blog
          </Link>
        </li>
        <li>
          <Link
              to="/aboutme/"
              activeStyle={{
                borderBottom:"2px solid purple",
                color:'black'
              }}
            >
            About
            </Link>
        </li>
        <li>
          <Link
              to="/logs/"
              activeStyle={{
                borderBottom:"2px solid purple",
                color:'black'
              }}
            >
            Logs
          </Link>
        </li>
      </ul>  
      <Follow username="_deadlocked"/>
    </div>
	</nav>
)

export default Navigation
