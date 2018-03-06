import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';


const ProjectPage = () => (
  <div>
     <Helmet
      title="Jay Jariwala | Projects"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
  Hi! This is a Project page.
  </div>
)

export default ProjectPage
