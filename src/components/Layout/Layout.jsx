import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import EndFooter from "../endFooter/endFooter"


export default function Layout() {
  return <>

  <Navbar/>

  <Outlet></Outlet>

  

  <Footer/>
  <EndFooter/>
  </>
    
  
}
