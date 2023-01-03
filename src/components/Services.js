import React from "react";

import Lottie from "lottie-react";
import Animation from "../lotties/servi.json";
export default function Services() {
  
  const hangeStyles = (click) => {
    let element = document.getElementById(click)
    element.style.display= 'block';
}
  return (
    <div id="services">
      <div className="container">
        <h1 className="service-title">My Service</h1>
        <div className="service_img">
      <div className="img"> <Lottie animationData={Animation} loop={true} /></div>
        </div>
        <div className="services-list">
          <div onClick={ ()=>hangeStyles("more")}>
            <i className="fa-solid fa-code"></i>
            <h2>Web development</h2>
            <p>
            I can help with your web development needs. I have experience
              working with various technologies such as bootstrap, tailwind,
              react.js, next.js, node.js, PHP, and C#. I believe that I can
              develop a website that meets your needs and exceeds your
              expectations.<span id="more">
              Please let me know if you are interested in
              discussing your project further. I am happy to provide more
              information and a quote for my services.
              </span>
            </p>
            
          </div>
          <div onClick={ ()=>hangeStyles("more1")}>
            <i className="fa-solid fa-object-ungroup"></i>
            <h2>Web designe</h2>
            <p>
            I will provide our best services in UI UX Websites and apps
              designing. I will create an elegant and attractive website. I
              have 1 years of experience as an expert graphic designer. I can
              build professional website of photography, E-commerce,
              Education and shopping, etc.<span id="more1">
              Please let me know if you are interested in
              discussing your project further. I am happy to provide more
              information and a quote for my services.
              </span>
            </p>
          
          </div>
          <div onClick={ ()=>hangeStyles("more2")}>
            <i className="fa-solid fa-laptop-code"></i>
            <h2>Web development support and maintenance</h2>
            <p>
              
            I am pleased to offer my website maintenance services to ensure that your website is always running smoothly and effectively. My maintenance plan includes regular updates to ensure your website is running on the latest software and security patches, as well as troubleshooting and fixing any issues that may arise.
             <span id="more2">My maintenance plan includes regular updates to ensure your website is running on the latest software and security patches, as well as troubleshooting and fixing any issues that may arise.
              
              </span>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}


                  