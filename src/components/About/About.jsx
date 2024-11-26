import React from 'react'

export default function About() {
  return (
    <div>
      <div className='about-component bg-homeColor'>
        <div className='container text-white'>
         <div className='pt-6'>
         <h2 className='text-4xl font-bold text-center mb-4'>ABOUT COMPONENT</h2>
          <div className='star-icon flex items-start justify-center mb-4'>
                <div className='line me-4 bg-white'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-4 bg-white'></div>
            </div>
         </div>

           <div className="container">
           <div className='flex items-center justify-center gap-8'>
              <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}
