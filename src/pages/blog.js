import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const BlogPage = ({data}) => {
  return (
    <div className="content">
      <Helmet
      title="Jay Jariwala | Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
      <h1 className="content__heading">
        Blog <span className="content__post card__subtitle">({data.allMarkdownRemark.totalCount} Posts)</span>
      </h1>
      <p> I would love to write something in here when I have enough motivation. Please check back 🔜
      </p>
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
                <h4 className="card__title">{node.frontmatter.title}{" "}</h4> 
                <span className="card__subtitle">{node.frontmatter.date}</span>
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

