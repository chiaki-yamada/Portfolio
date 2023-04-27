import React from 'react';
import profileImg from '../imgs/profile.jpg';


const Home = () => {
  return (
    <main>
      <div className="text-container">
        <div className='main-title-container'>
          <h1>CHIAKI<br></br>YAMADA</h1>
          <p className='main-title'>A Front-End Developer</p>
          <p className='main-desc'>Hi! I’m Chiaki, a passionate front-end developer in training with a desire to start my career in the tech industry. <br></br>
          I’m excited to continue learning and growing as a front-end developer and look forward to contributing to exciting projects in the future!
          </p>
        </div>
        <div className='main-img-container'>
          <img src={profileImg} className='main-img' alt='main-img'></img>
        </div>
      </div>
    </main>

  )
}
export default Home;

