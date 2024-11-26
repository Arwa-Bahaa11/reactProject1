import { Link, NavLink } from "react-router-dom";


export default function Navbar() {

    
  return <>

   <nav className=" bg-navColor  text-white  py-10 px-10 fixed top-0 left-0 w-full z-50">
   <div className="container flex justify-between items-center font-bold" >
        <h1 className="text-3xl"><a>START FRAMEWORK</a></h1>


        <ul className="flex gap-8 items-center">
            <li>
                <NavLink to="/about" className="p-2 rounded-md" activeClassName="active">ABOUT</NavLink>
            </li>

            <li>
                <NavLink to="/portfolio" className="p-2 rounded-md" activeClassName="active">PORTFOLIO</NavLink>
            </li>

            <li>
                <NavLink to="/contact" className="p-2 rounded-md" activeClassName="active">CONTACT</NavLink>
            </li>
        </ul>
     </div>

   </nav>
  </>
    
  
}
