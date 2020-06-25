import React from 'react';
import {FiPlay} from 'react-icons/fi'
import './About.css'
import SkillCard from './SkillCard'
import Code from '../Icons/Code'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'


function About() {
  return(
    <div className='About ' >
      <div className='container About-me'>
        <h3 className='Title'>About Me</h3>
        <h5>Hello,My name is Austine Ogola</h5>
        <p>I am a full-stack developer,UI/UX designer and Data Scientist based in Nairobi</p>
        <p>I enjoy designing and developing software,especially web-based applications.I build systems from scratch to deployment.I also like working on AI/M.L projects</p>
        <p>Feel free to checkout some of my work on my WORK PAGE</p>
        <p>Have a project,idea or problem you'd like to discuss?Feel free to contact me.</p>
      </div>
      <div className='container What-I-do'>
        <h3 className='Title'>What I do</h3>
        <div className='row'>
          <div className='col-6'>
            <div className='d-flex justify-content-center'><Webdesign/></div>
            <div className='d-flex justify-content-center'><h5>Full-Stack-Development</h5></div>
            <div className='tools'>
              <p>
                Javascript(ES6) | Python | React | Django | GraphQl |
                Node/Express | JQuery | Bootstrap | MongoDB | MySQL | HTML/CSS
              </p>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex justify-content-center'><AiBrain/></div>
            <div className='d-flex justify-content-center'><h5>Artificial Intelligence</h5></div>
            <div className='tools'>
              <p>Python | Tensorflow | OpenCV | Pandas | Numpy | Scipy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
