import React from "react";
import Helmet from 'react-helmet';
var ReactDisqusThread = require('react-disqus-thread');

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(data);
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusThread
          shortname="jayjariwala"
          identifier={post.fields.slug}
          title={post.frontmatter.title}
        />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
    	  slug
    	}
      html
      frontmatter {
        title
      }
    }
  }
`;