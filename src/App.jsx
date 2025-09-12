import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import WhatsAppButton from "./components/WhatsAppButton";
import About from './components/About';
import Contact from './components/Contact';
import Destination from './components/Destination';
import DestinationDetails from './pages/DestinationDetails';

const App = () => {


  return (
    <div>
     <Navbar />
    
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='/about' element={<About/>} />        
        <Route path='/contact' element={<Contact/>} />        
        <Route path='/destination' element={<Destination/>} />
        <Route path='/destination/:id' element={<DestinationDetails/>} />

      </Routes>
     </div>
     <Footer />
     {/* 🟢 Botón WhatsApp flotante */}
      <WhatsAppButton />
    </div>
  )
}

export default App
