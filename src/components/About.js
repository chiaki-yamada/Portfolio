import React from 'react'
import htmlIcon from '../imgs/html.svg'
import cssIcon from '../imgs/css.svg'
import javascriptIcon from '../imgs/javascript.svg'
import reactIcon from '../imgs/react.svg'
import bootstrapIcon from '../imgs/bootstrap.svg'
import figmaIcon from '../imgs/figma.svg'
import wordpressIcon from '../imgs/wordpress.svg'
import photoshopIcon from '../imgs/photoshop.svg'

function About() {
  return (
    <main>
      <h1 className='title'>ABOUT</h1>

      <div className="about-container">
        <h2>Konnichiwa!</h2>
        <p>Hi I’m Chiaki, a passionate front-end developer in training with a desire to start my career in the tech industry. While I don’t have direct experience in front-end development, I have gained valuable skills through working with a developer to create a new website for the organization where I was previously working for. I managed the project, helped design, created content, and maintained the site.</p>
        <p>I obtained a <a href='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/71780354' target="_blank" rel="noreferrer">Front End Web Development Techdegree Certificate</a> from online course, treehouse.</p>
        <p>I’m excited to continue learning and growing as a front-end developer and look forward to contributing to exciting projects in the future!</p>
      </div>

      <div className="skills-container">
        <h2>Skills</h2>
        <ul>
          <li>Proficient with HTML, CSS, JavaScript, React, Bootstrap</li>
          <li>Creating responsive design and mobile-first websites</li>
          <li>Building applications using API</li>
          <li>Utilizing AI tool such as GitHub Copilot </li>
          <li>Proficient with WordPress to manege website</li>
          <li>Designing mockups and wireframes with Figma</li>
        </ul>
        <div className='skills-icon'>
          <img src={htmlIcon} className='icon' alt='html-icon'></img>
          <img src={cssIcon} className='icon' alt='css-icon'></img>
          <img src={javascriptIcon} className='icon' alt='javascript-icon'></img>
          <img src={reactIcon} className='icon' alt='react-icon'></img>
          <img src={bootstrapIcon} className='icon' alt='bootstrap-icon'></img>
          <img src={wordpressIcon} className='icon' alt='wordpress-icon'></img>
          <img src={figmaIcon} className='icon' alt='figma-icon'></img>
          <img src={photoshopIcon} className='icon' alt='photoshop-icon'></img>
          
        </div>
      </div>

      <div className="work-container">
        <h2>Experience</h2>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Communications Coordinator</h3>
            <p>Vancouver Japanese Language School and Japanese Hall, Vancouver, Canada<br></br>2022 Jun- 2023 Mar</p>
          </div>
          <div className='work-desc'>
            <p>In charge of creating a new website for the organization with a professional web developer, managing the site using WordPress, creating posters social media posts, posters, and monthly e-newsletter.</p>
          </div>
        </div>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Translator/Administrator</h3>
            <p>Vancouver Japanese Language School and Japanese Hall, Vancouver, Canada<br></br>2021 Apr- 2022 May</p>
          </div>
          <div className='work-desc'>
            <p>In charge of translating documents, letters, website, articles for social media from English to Japanese and vice versa, managing registrations, and responding email and calls.</p>
          </div>
        </div>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Public Servant -Public School Administration</h3>
            <p>Yamatsuri Junior High School, Fukushima, Japan<pr></pr>2009 Apr - 2013 Mar</p>
            <p>Tominari Elementary School, Fukushima, Japan<pr></pr>2013 Apr - 2018 Mar</p>
          </div>
          <div className='work-desc'>
            <p>In charge of wide range of duties for public schools. Fully responsible for financial accounting and budget management.</p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default About