import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav className="navbar">
    <div className="navbar__container">
      <img className="js-brand navbar__logo" width="65px"/>
      <div className="navbar__name-container">
        <p>Jay</p>
        <p>Jariwala</p>
      </div>
      <ul className="navbar__nav-items">
        <li><a href="">Projects</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">About</a></li>
        <p className="navbar__twitter-follow">
          <a href="https://twitter.com/_deadlocked?ref_src=twsrc%5Etfw" className="twitter-follow-button">Follow @_deadlocked</a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </p>
        <div className="quote-ticker">
          <button className="button">I <i className="fas fa-heart"></i> Quotes</button>
          <div className="quote-ticker__wrapper">
            <i className="fas fa-quote-left"></i>
            <span className="quote-ticker__quote">
            Don't cry because it's over, smile because it happened.
            </span>
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      </ul>
    </div>
	</nav>
)

export default Navigation
