import React from 'react'
import workImg from '../imgs/work.jpg'

function Works() {
  return (
    <main>
      <h1 className='title'>WORKS</h1>
      <p>Here are some my works in web design and front-end development focusing on user-friendly design.</p>

      <div className='works-container'>
        <div className='work'>
          <img src={workImg} className='work-img' alt='work-img'></img>
          <h3 className='work-title'>School Website</h3>
          <p className='work-desc'>I helped designing and created contents focusing on having a well-structured and mobile-friendly website that is easy to navigate.</p>
          <a href='https://vjls-jh.com/' className='btn'>See the site</a>
        </div>

        <div className='work'>
          <img src={workImg} className='work-img' alt='work-img'></img>
          <h3 className='work-title'>Photo Gallery</h3>
          <p className='work-desc'>It features a user-friendly interface with dynamic image loading, providing an engaging browsing experience for visitors.</p>
          <a href='https://chiaki-yamada.github.io/Interactive-Photo-Gallery/' className='btn'>See the site</a>
        </div>

        <div className='work'>
          <img src={workImg} className='work-img' alt='work-img'></img>
          <h3 className='work-title'>Employee Directory</h3>
          <p className='work-desc'>Using JavaScript, I created an employee directory by communicating with a third-party API to grab data and display it on a web page.</p>
          <a href='https://chiaki-yamada.github.io/employee-directory/' className='btn'>See the site</a>
        </div>


      </div>
    </main>
  )
}

export default Works