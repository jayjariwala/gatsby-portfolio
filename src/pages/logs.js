import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const logsPage = () => (
  <div>
    <Helmet
      title="Jay Jariwala | Coding logs"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
  </div>
)

export default logsPage
