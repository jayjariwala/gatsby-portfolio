import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
require('prismjs/themes/prism-solarizedlight.css')
import Navigation from '../components/Navigation'
import MobileNavigation from '../components/MobileNavigation'
import '../assets/scss/styles.scss'
import 'animate.css'
import favicon from '../assets/images/brand.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jay Jariwala | Web Developer - Portfolio"
      meta={[
        { name: 'description', content: 'I am a full stack web developer located in New Jersey, USA.' },
        { name: 'keywords', content: 'Full-Stack Web developer, Javascript, Software Engineer, available for job, Web development, portfolio' },
      ]}
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div className="layout">
      <div className="layout__navigation">
        <Navigation />
        <MobileNavigation />
      </div>
      <div className="layout__content">{children()}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
