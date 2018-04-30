import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import sdiLogo from '../assets/images/sdi-logo.png';
import tbsmoLogo from '../assets/images/tbsmo-logo.png';

const workPage = ({data}) => {
  
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
              Work
            </h1>
            <div className="work">
              <div className="work__header">
                <div className="work__information">
                  <img src={sdiLogo} width="60px;" className="work__logo"/>
                  <p className="work__company">
                  <b><em>SDI Global Services, LLC.</em></b>
                  <p><i>103 Carnegie Center, Princeton, NJ 08540</i></p>
                  </p>
                </div>
                <span className="work__duration">July 2017 – Present</span>
              </div>
              <b><em>Position:</em></b> Software Engineer
              <ul>
                <li>Implemented WebRTC screen sharing feature in a web-based mobile application to enable screen-sharing between Instructor laptop and Student Tablets.</li>
                <li>Refactored the code base of previously implemented MEAN stack application to make it more reliable, user-friendly and scalable for network communication. </li>
                <li>Built a responsive Web application for Field Support Engineers and Technical writers to view, edit and manage their information online. The application was built using NodeJS, MongoDB and Apostrophe CMS Framework. </li>
                <li>Gained practical experience of server-side concepts such as Nginx reverse proxy, LetsEncrypt SSL, Application Deployment Automation and Database Backup etc.  </li>
              </ul>
            </div>
            <div className="work">
              <div className="work__header">
                <div className="work__information">
                  <img src={tbsmoLogo} width="80px;" className="work__logo"/>
                  <p className="work__company">
                    <b><em>Today’s Business</em></b>
                    <p><i>39 US-46 Unit 801, Pine Brook, NJ 07058, # (973)-575-1600</i></p>
                  </p>
                </div>
                <span className="work__duration">Aug 2016 – Dec 2016</span>
              </div>
              <b><em>Position:</em></b> Digital Development Intern
              <ul>
                <li>Converted Web Mockup design (PSD) into fully functional, responsive and cross-browser compatible website using HTML5 Semantic markup, CSS3 and Vanilla JavaScript.</li>
                <li>Learned to utilize Modern Front-end development tools such as Sass, Gulp and Command Line Terminal into my daily workflow.</li>
                <li>Assisted team members with Project Management, SEO Guidelines and website deployment in production.   </li>
              </ul>
            </div>
            <h2 className="content__heading">
              Education
            </h2>   
            <h2 className="content__heading">
              Certification
            </h2>
            <h2 className="content__heading">
              Online Courses
            </h2>        
          </div>
      </div>)

}

export default workPage
