import React from 'react';
import profileImg from '../imgs/profile.jpg';


const Home = () => {
  return (
      <main>
        <div className="text-container">
          <h1>CHIAKI<br></br>YAMADA</h1>
          <p className='main-title'>A Front-End Developer</p>
          <p className='main-desc'>Hi! I’m Chiaki, a passionate front-end developer in training with a desire to start my career in the tech industry. <br></br>
            I’m proficient in HTML, CSS, JavaScript, React, and Bootstrap and have experience with Figma for creating wireframes. <br></br>
          </p>
        </div>
        <img src={profileImg} className='main-img' alt='main-img'></img>
      </main>

  )
}
export default Home;

