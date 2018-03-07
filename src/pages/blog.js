import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const BlogPage = ({data}) => {
  console.log(data);
  return (
    <div className="blog-navigation">
      <Helmet
      title="Jay Jariwala | Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
      <h1 className="blog-navigation__heading">
        Blog <span>{data.allMarkdownRemark.totalCount} Posts</span>
      </h1>
      <p>Welcome to my blog! I love to write ✏️ and explain the topic in best possible way. checkout some of my recent Articles below. Feel free to leave comment/feedback or suggestion. Thank You 😇</p>
      <div className="columns">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
          <div className="column">
            <div className="card">
            <img src={node.frontmatter.thumbnail}/>
              <div className="card__container">
                <h4>{node.frontmatter.title}{" "}</h4> 
                <span>{node.frontmatter.date}</span>
              </div>
            </div>
            </div>
          </Link>
        </div>
      ))}
      </div>
      <h4 className="blog-navigation__total-count"></h4>
      
    </div>
  )
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter : { frontmatter:{ type : { eq : "blog" }}}
    ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              thumbnail
              type
            }
            fields {
              slug
            }
            excerpt
          }
      }
    }
  }
`

export default BlogPage

