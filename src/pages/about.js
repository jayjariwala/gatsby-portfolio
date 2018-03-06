import React from 'react';
import Link from 'gatsby-link';
import profile_picture from '../assets/images/display-picture.png';
import Helmet from 'react-helmet';

const BlogPage = () => (
  <div>
    <Helmet
      title="Jay Jariwala | About me"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]} />
  Hi! This is a About page.
  </div>
)

export default BlogPage
