import React, { useState } from 'react'

export default function Contact() {

  let [name,setName]=useState("")
  let[age,setAge]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")

  return (
    <div>
      <div className='contact-component'>
        <div className="container">
        <div className='pt-6'>
         <h2 className='text-4xl font-bold text-center mb-4 text-navColor'>CONTACT SECTION</h2>
          <div className='star-icon flex items-start justify-center mb-4 text-navColor'>
                <div className='line me-4 bg-navColor'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-4 bg-navColor'></div>
            </div>
         </div>

      <div className='form-section mx-auto'>
      <form className="mt-12 p-4 ">

<div className="relative z-0 w-full mb-5 group">
<input
type="text"
name="floating_first_name"
id="floating_first_name"
className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"
placeholder="userName"
required=""
onChange={(e)=>{
setName(e.target.value)
}}
/>

{name ?  <label
htmlFor="floating_first_name"
className=" text-[#1abc9c] peer-focus:font-medium absolute text-lg  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-homeColor peer-focus:dark:text-homeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
userName
</label> : ""}

</div>

<div className="relative z-0 w-full mb-5 group">
<input
type="text"
name="floating_age"
id="floating_age"
className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer"
placeholder="userAge"
required=""
onChange={(e)=>{
setAge(e.target.value)
}}
/>
{age ?  <label
htmlFor="floating_age"
className=" text-[#1abc9c] peer-focus:font-medium absolute text-lg dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-homeColor peer-focus:dark:text-homeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
userAge
</label> : ""}
</div>
<div className="relative z-0 w-full mb-5 group">
<input
type="email"
name="floating_email"
id="floating_email"
className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer"
placeholder="userEmail"
required=""
onChange={(e)=>{
setEmail(e.target.value)
}}
/>
{email ?  <label
htmlFor="floating_email"
className=" text-[#1abc9c] peer-focus:font-medium absolute text-lg dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-homeColor peer-focus:dark:text-homeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
userEmail
</label> : ""}
</div>
<div className="relative z-0 w-full mb-5 group">
<input
type="password"
name="floating_password"
id="floating_password"
className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer"
placeholder="userPassword"
required=""
onChange={(e)=>{
setPassword(e.target.value)
}}
/>
{password ?  <label
htmlFor="floating_password"
className="text-[#1abc9c] peer-focus:font-medium absolute text-lg dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-homeColor peer-focus:dark:text-h4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
Password
</label> : ""}
</div>





<button
type="submit"
className="text-white bg-homeColor hover:bg-homeColor focus:ring-4 focus:outline-none focus:ring-homeColor font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-homeColor dark:hover:bg-homeColor dark:focus:ring-homeColor"
>
Send Message
</button>
</form>
      </div>

        </div>
      </div>
    </div>
  )
}
