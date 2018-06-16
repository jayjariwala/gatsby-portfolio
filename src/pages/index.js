import React from 'react';
import Link from 'gatsby-link';
import profile_picture from '../assets/images/display-picture.png';
import resume from '../assets/rawfiles/jayjariwala_resume.pdf';

const IndexPage = () => (
  <div className="hero">
    <div className="hero__overlay"/>
    <section className="hero__content wrapper" >
      <div className="hero__introduction ">
        <h1 className="hero__intro-heading" > Hi, I'm Jay Jariwala</h1>
				<p className="hero__intro-subheading">Software Engineer</p>
				<p className="hero__intro-paragraph">I build Full-stack Web applications with emphasis of writing clean and maintainable code. I have good command over JavaScript language and It's libraries. When not coding I enjoy outdoors 🚞 and 📸 photography. I am currently open for Full-time positions.</p>
				<a href="mailto:jay.jariwala@hotmail.com?Subject=Hello" target="_top"><button className="button button--white button--round">Get in Touch</button></a>
				<a href={resume} target="__blank"><button className="button button--green button--round"><i className="fas fa-cloud-download-alt"></i> Resume</button></a>
				<div className="social">
					<a href="https://twitter.com/_deadlocked" target="__blank"><i className="fab fa-twitter"></i></a>
					<a href="https://github.com/jayjariwala" target="__blank"><i className="fab fa-github"></i></a>
					<a href="https://www.linkedin.com/in/jay-jariwala/" target="__blank"><i className="fab fa-linkedin"></i></a>
					<a href="https://www.facebook.com/jay.jariwala.5" target="__blank"><i className="fab fa-facebook"></i></a>
				</div>
      </div>
      <div className="hero__display-image-container">
        <img src={profile_picture} className="hero__display-picture" />
      </div>
    </section>
  </div>
)

export default IndexPage
