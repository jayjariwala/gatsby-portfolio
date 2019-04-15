import React from 'react'
import Link from 'gatsby-link'
import brand from '../../assets/images/brand.png'

class MobileNavigation extends React.Component {
  state = {
    navToggle: false,
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ navToggle: !prevState.navToggle }))
  }

  render() {
    const mobileNav =
      'mobile-navbar__links ' +
      (this.state.navToggle === true ? 'mobile-navbar__links--show' : '')
    return (
      <nav className="mobile-navbar">
        <div className="mobile-navbar__header">
          <Link
            to="/"
            activeStyle={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <img src={brand} className="navbar__logo" />
          </Link>
          <i className="fas fa-bars" onClick={this.toggleNavbar} />
        </div>
        <div className={mobileNav}>
          <ul>
            <li>
              <Link
                to="/projects/"
                activeStyle={{
                  borderBottom: '2px solid purple',
                  color: 'black',
                }}
                onClick={this.toggleNavbar}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                activeStyle={{
                  borderBottom: '2px solid purple',
                  color: 'black',
                }}
                onClick={this.toggleNavbar}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme/"
                activeStyle={{
                  borderBottom: '2px solid purple',
                  color: 'black',
                }}
                onClick={this.toggleNavbar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work/"
                activeStyle={{
                  borderBottom: '2px solid purple',
                  color: 'black',
                }}
                onClick={this.toggleNavbar}
              >
                Work
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default MobileNavigation
