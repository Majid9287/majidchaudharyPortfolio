import React from 'react'
import {useState} from 'react';
import { Link } from 'react-scroll'
import { useRef } from "react";
import Lottie from "lottie-react";
import Animation from "../lotties/home.json";

export default function Navbr() {

  {/* sidemenu button. */}
  const [sidemenu, setsidemenu] = useState(false);
  const openmenu=()=>{
    setsidemenu(true);
  }
  const closemenu=()=>{
    setsidemenu(false);
  }

  {/* eyes balls. */}
  const eyeBallsRef = useRef([]);
  
  document.onmousemove = (e) => {
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    eyeBallsRef.current.forEach((item, idx) => {
      item.style.left = x;
      item.style.top = y;
      item.style.transform = `translate(-${x},-${y})`;
    });
  };

  return (
    <div id='header'>
      <nav>
      <div className="eyebrow left"></div>
    <div className="eyebrow right"></div>
      <section className="move-area">
      <div className='.contain'>
      <div className='eye' >
      <div className='bal'  ref={(ref) => (eyeBallsRef.current[0] = ref)} ></div>
        </div>
     <div className='eye' >
      <div className='bal'  ref={(ref) => (eyeBallsRef.current[1] = ref)} ></div>
       </div>
      </div>
      </section>


        <ul  id='sidemenu'  style={{
           right: sidemenu ?  "0":"-260px" ,
        }}>
          {/* smooth" scrolling effect. */}
          <li><Link  to="header" spy={true} smooth={true} offset={-100} duration={500} onClick={closemenu}>HOME</Link></li>
          <li><Link  to="about" spy={true} smooth={true} offset={-60} duration={500} onClick={closemenu}>ABOUT</Link></li>
          <li><Link to="services" spy={true} smooth={true} offset={-50} duration={500} onClick={closemenu}>SERVICES</Link></li>
          <li><Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={closemenu}>PORTFOLIA</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-60} duration={500} onClick={closemenu}>CONTACT</Link></li>
          <i className="fa-solid fa-xmark" onClick={closemenu}></i>
          
        </ul>
        <i className="fa-solid fa-bars" onClick={openmenu}></i>
      </nav>
    <div className='container'>
       <div className='intro'>
      <div  className='header-text' >
        
        <p>Software Engineer</p>
        <h1 >Hi, I'm <span>Majid</span><br/> I build things for the web.</h1>
      </div>
      <div className='header-img'>
      <div className="img"> <Lottie animationData={Animation} loop={true} /></div>
      </div>
      </div>
    </div>


  </div>
  )
}
