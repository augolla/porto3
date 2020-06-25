import React from 'react'
import './NavBar.css'
import $ from 'jquery'
import Icon from './icons8-circuit2-96.png'
import {Link,animateScroll as scroll} from 'react-scroll';

function NavBar() {
  return(
      <nav className='NavBar navbar navbar-expand-sm shadow shadow-lg fixed-top'>
        <a href='#' className='navbar-brand'><img src={Icon} style={{width:'30px'}}/></a>
        <div className='navbar-toggler ' data-toggle='collapse' data-target="#everything2">
          {/*<div><FiMinus/></div>
          <div><FiMinus/></div>
          <div><FiMinus/></div>*/}
          <span className='icon-bar icon-bar-1' id='icon-bar-1'>|</span>
          <span className='icon-bar icon-bar-2' id='icon-bar-2'>|</span>
          <span className='icon-bar icon-bar-3' id='icon-bar-3'>|</span>
        </div>

        <div className='collapse navbar-collapse justify-content-end mb-4' id='everything2'>
          <nav className='navbar-nav'>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="home" className='nav-item active nav-link ' smooth={true} >Home</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="about" className='nav-item active nav-link ' smooth={true} >About</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="projects" className='nav-item active nav-link ' smooth={true} >Works/Projects</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="contact" className='nav-item active nav-link ' smooth={true} >Contacts</Link>
          </nav>
        </div>
      </nav>
  )
}

export default NavBar
