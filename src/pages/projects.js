import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Projects from '../components/Projects';

const ProjectPage = () => (
  <div>
     <Helmet
      title="Jay Jariwala | Projects"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
      <div className="content">
        <h1 className="content__heading">Projects</h1>
          <Projects/>
      </div>
  </div>
)

export default ProjectPage
