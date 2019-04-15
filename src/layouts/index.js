import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
require('prismjs/themes/prism-solarizedlight.css')
import Navigation from '../components/Navigation'
import MobileNavigation from '../components/MobileNavigation'
import '../assets/scss/styles.scss'
import 'animate.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jay Jariwala"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
