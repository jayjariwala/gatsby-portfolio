import React from 'react';
import Link from 'gatsby-link';
import profile_picture from '../assets/images/display-picture.png';

const IndexPage = () => (
  <div className="hero">
    <div className="hero__overlay"/>
    <section className="hero__content wrapper" >
      <div className="hero__introduction ">
        <h1 className="hero__intro-heading">Hi, I'm Jay Jariwala</h1>
				<p className="hero__intro-subheading">Software Engineer</p>
				<p className="hero__intro-paragraph">I build Full-stack Web applications with emphasis of writing clean and maintainable code. Hobbies are reading 📖 , coffee ☕ and 🤓 coding. I am currently open for Full-time positions.</p>
				<button className="button button--white button--round">Get in Touch</button>
				<button className="button button--green button--round"><i className="fas fa-cloud-download-alt"></i> Resume</button>
				<div className="social">
					<i className="fab fa-twitter"></i>
					<i className="fab fa-github"></i>
					<i className="fab fa-linkedin"></i>
					<i className="fab fa-medium"></i>
				</div>
      </div>
      <div className="hero__display-image-container">
        <img src={profile_picture} className="hero__display-picture" />
      </div>
    </section>
  </div>
)

export default IndexPage
