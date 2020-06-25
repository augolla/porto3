import React from  'react'

function ProjectItem() {
  // src='https://source.unsplash.com/featured?dog'
  return(
    <div className='ProjectItem col-12 col-md-4 p-2 mb-1 border' style={{Height:'400px'}}>
      <div>
        <img style={{width:'100%',height:'100%'}}/>
      </div>
      <div className='overlay' style={{background:'#1D4652'}}>
      </div>
    </div>
  )
}

export default ProjectItem
