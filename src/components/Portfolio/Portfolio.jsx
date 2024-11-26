import React from 'react'

export default function Portfolio () {
  return (
    <>
    <div>
      <div className="portfolio-component">
        <div className="container">

          <div className="content flex flex-col">
            <h2 className='text-4xl text-center font-bold text-navColor mb-4'>PORTFOLIO COMPONENT</h2>
            <div className='star-icon flex items-start justify-center mb-4 text-navColor'>
                <div className='line me-4 bg-navColor'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-4 bg-navColor'></div>
            </div>
          </div>

          <div className='cards'>
            <div className="container">
             <div className='flex flex-wrap gap-10'>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/poert1.png' className='rounded-md w-full'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/port2.png' className='rounded-md'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/port3.png' className='rounded-md'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/poert1.png' className='rounded-md'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/port2.png' className='rounded-md'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

              <div className='w-[30%] relative cursor-pointer'>
              <img src='https://routeegy.github.io/startFramework/assets/images/port3.png' className='rounded-md'/>
              <div className='layer absolute bg-layerColor w-full h-full inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-700'>
              <i className="fa-solid fa-plus text-8xl text-white"></i>
              </div>
              </div>

             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
