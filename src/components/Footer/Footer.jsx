import React from 'react'

export default function Footer() {
  return (
    <div className='bg-navColor h-80 p-16'>
        <div className='container mx-auto text-white flex items-center justify-between footer'>
            <div className='p-6  w-96'>
                <h3 className='text-2xl text-white text-center font-bold'>LOCATION</h3>
                <p className='text-white text-center mb-4'>2215 John Daniel Drive</p>
                <p className='text-white text-center'>Clark, MO 65243</p>
            </div>

            <div className='p-6 w-96'>
                <h3 className=' text-2xl text-center font-bold mb-3'>AROUND THE WEB</h3>
                <div className='text-center flex justify-center gap-3'>
                <i className="fa-brands fa-facebook  text-lg border-2 rounded-3xl h-10 w-10 p-1"></i>
                <i className="fa-brands fa-twitter  text-lg border-2 rounded-3xl h-10 w-10 p-1"></i>
                <i className="fa-brands fa-linkedin  text-lg border-2 rounded-3xl h-10 w-10 p-1"></i>
                <i className="fa-solid fa-globe  text-lg border-2 rounded-3xl h-10 w-10 p-1"></i>
                </div>
            </div>

            <div className='p-6 w-96'>
                <h3 className=' text-2xl text-center font-bold'>ABOUT FREELANCER</h3>
                <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
         
       

        
    </div>

    
  )
}
