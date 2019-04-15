import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Timeline } from 'react-twitter-widgets'

const aboutmePage = ({ data }) => {
  const post = data.allMarkdownRemark.edges[0].node
  console.log(data)
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
        <h2 className="content__heading">Skills</h2>
        <table>
          <tbody>
            <tr>
              <th>Core</th>
              <td>{post.frontmatter.core_technologies}</td>
            </tr>
            <tr>
              <th>Libraries</th>
              <td>{post.frontmatter.libraries}</td>
            </tr>
            <tr>
              <th>Database</th>
              <td>{post.frontmatter.database}</td>
            </tr>
            <tr>
              <th>Server</th>
              <td>{post.frontmatter.server_hosting}</td>
            </tr>
            <tr>
              <th>Design</th>
              <td>{post.frontmatter.design}</td>
            </tr>
            <tr>
              <th>Relevent</th>
              <td>{post.frontmatter.relevent}</td>
            </tr>
          </tbody>
        </table>
        <h2 className="content__heading">About me</h2>
        <div className="float-wrapper">
          <img
            src={post.frontmatter.picture}
            width="250px;"
            className="hero__display-picture "
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
          className="line-height"
        />

        <h2 className="content__heading">Social Media</h2>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: '_deadlocked',
          }}
          options={{
            username: '_deadlocked',
            height: '400',
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    </div>
  )
}
export const query = graphql`
  query AboutmeQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
      edges {
        node {
          id
          frontmatter {
            picture
            core_technologies
            libraries
            database
            server_hosting
            design
            relevent
          }
          html
        }
      }
    }
  }
`

export default aboutmePage
