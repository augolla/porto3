import React from 'react';
import './Project.css'
import ProjectItem from './ProjectItem'


function Projects() {
  return(
    <div className='Projects container' >
      <h3>A &nbsp;Few Things I've Built</h3>
      <div className='row p-0'>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <div className='col-12 col-md-4 d-flex justify-content-center pt-5'>
          <p><a>Check Out More Projects</a></p>
        </div>
      </div>
    </div>
  )
}

export default Projects
