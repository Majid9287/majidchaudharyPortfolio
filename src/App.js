import React from 'react'
import './App.css';
import Navbr from './components/Navbr';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Particles from './components/Particles/Karticles';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Particles className="vip"/>
     <Navbr/> 
     <About/>
     <Services/>
     <Portfolio/>
     <Contact />
     
    </>
  );
}

export default App;
