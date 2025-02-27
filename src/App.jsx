

import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Productdeatail from './pages/Product/Productdeatail'
import Contact from "./pages/contact/Contact"
import About from './pages/About/About'
import ScrollToTop from './components/Scrolltop'
function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/product-detail/:id" element={<Productdeatail />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
