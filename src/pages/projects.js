import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Projects from '../components/Projects';

const ProjectPage = ({data}) => (
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
          <Projects projects={data}/>
      </div>
  </div>
)

export default ProjectPage

export const query = graphql`
  query projectsQuery {
    allMarkdownRemark ( filter : { frontmatter : { type : { eq : "project" }}}) {
      edges {
        node {
          id
           frontmatter {
             title
             thumbnail
             technology
             type
             github
             website
           }
           html
        }
      }
    }
  }
`
