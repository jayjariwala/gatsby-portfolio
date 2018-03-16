import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const logsPage = ({data}) => {
  const post = data.allMarkdownRemark.edges[0].node;
  return (
  <div>
    <Helmet
      title="Jay Jariwala | Coding logs"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
      <div className="content">
        <h1 className="content__heading">Daily Logs</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
    )
  
}

export default logsPage

export const query = graphql`
  query logsQuery {
    allMarkdownRemark ( filter : { frontmatter : { type : { eq : "logs" }}}) {
      edges {
        node {
          id
           html
        }
      }
    }
  }
`
