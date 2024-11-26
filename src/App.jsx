import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Layout from "./components/Layout/Layout"
import "@fortawesome/fontawesome-free"
import Home from "./components/Home/Home"



function App() {
 

  return (
    
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
