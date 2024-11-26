import React from 'react'

export default function Home () {
  return (
    <div className='bg-homeColor Home-component'>
        <div className='container'>
             <div className='Home-section text-center flex flex-col text-white'>
           <div className='mx-auto mb-4'>
           <img src='https://routeegy.github.io/startFramework/assets/images/avataaars.svg' className='text-center'/>
           </div>
            <h2 className='mb-4 text-4xl font-bold'>START FRAMEWORK</h2>
            <div className='star-icon flex items-start justify-center mb-4'>
                <div className='line me-4 bg-white'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-4 bg-white'></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
         </div>
        </div>
    </div>
  )
}
