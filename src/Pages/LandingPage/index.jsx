import React from 'react'
import './intro.scss'
import Creative from 'src/assets/creative.png';
import Creative2 from 'src/assets/creative2.png'
import Creative3 from 'src/assets/creative3.png'

const IntroPage = () => {
  return (
    <>
      <div>
        <div>
            <a href="#">LOGO</a>
        </div>
        <ul className='list'>
            <li>About us</li>
            <li>About us</li>
            <li>About us</li>
        </ul> 
      </div>

      <div className='intro'>
        <div className="intro__left d-flex">
            <div className="intro__left-box"> 
            <div className="about text-center">  
                <h2>About Company</h2>
                </div>
            <img src={Creative} alt="man with the laptop" className='img1'/>
            <img src={Creative2} alt="man with the laptop" className='img2' />
            </div>
            <div className="intro__left-box2">
            <img src={Creative3} alt="man with the laptop" className='img3'/>
            </div>
        </div>
        <div className="intro-right">
            <h2>Welcome To Company Name </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolore fuga officiis soluta cupiditate magni repudiandae accusantium omnis eligendi deserunt beatae suscipit, repellat cum reiciendis atque. Praesentium iure adipisci dolorum.</p>
        </div>
      </div>
    </>
  )
}

export default IntroPage
