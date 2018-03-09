import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const aboutmePage = ({data}) => {
  const post = data.allMarkdownRemark;
  console.log(post);
  return (
      <div>
        <Helmet
          title="Jay Jariwala | about"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          />
          <div className="content">
            <h1 className="content__heading">
              Skills
            </h1>
            <table>
            <tr>
              <th>Core</th>
              <td></td>
            </tr>
            <tr>
              <th>libraries</th>
              <td></td>
            </tr>
            <tr>
              <th>database</th>
              <td></td>
            </tr>
            <tr>
              <th>Server</th>
              <td></td>
            </tr>
            <tr>
              <th>Design</th>
              <td></td>
            </tr>
            </table>
          </div>
      </div>
  )

}
export const query = graphql`
  query AboutmeQuery {
    allMarkdownRemark ( filter : { frontmatter : { type : { eq : "about" }}}) {
      edges {
        node {
          id
           frontmatter {
             core_technologies
             libraries
             database
             server_hosting
             design
             cutting_edge
           }
        }
      }
    }
  }
`

export default aboutmePage
