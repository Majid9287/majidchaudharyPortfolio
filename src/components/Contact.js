import React, { useState, useRef } from "react";
import pdf from "./images/my-cv.pdf";
import { Link } from 'react-scroll'
import work1 from "./images/papa.jpg";
import work2 from "./images/work-2.png";
import work3 from "./images/work-3.png";
import Lottie from "lottie-react";
import Animation from "../lotties/love.json";
export default function Contact() {
  const closeLightbox = () => {
    this.state.open = true;
  };
  {
    /* sending information to googlsheet */
  }
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzYq1FyBAmcQ2woWVjbFdpjGJSbGhjWdzMbPR5_DHX2hUrJADclGEDsr_Qmz7vLfBgHNQ/exec";
  const [loading, setLoading] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Loading.....");
    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading("Sent successfully");
      })
      .catch((err) => setLoading("something went wrong"));
  };
  const [isOpen,setisOpen]=useState(false);
  const handleShowDialog=()=>{
    setisOpen(current => !current)
  }
  return (
    <div id="contact">
     
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-regular fa-envelope"></i>abdulmajid9287@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>+923019287569
            </p>
            <div className="social-icons">
              <a target="_blanck" href="https://wa.link/5nlokc">
               
                <i className="fa-brands fa-whatsapp" style={{ color: 'green' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.linkedin.com/in/a-majid-25915620b/"
              >
                <i className="fa-brands fa-linkedin" style={{ color: 'blue' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.facebook.com/profile.php?id=100018596804353"
              >
            
                <i className="fa-brands fa-facebook" style={{ color: 'blue' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.instagram.com/majidchaudhry9287/"
              >
              
                <i className="fa-brands fa-instagram" style={{ color: 'red' }}></i>
              </a>
            </div>
            <a href={pdf} download className="btn btn2">
             
              Download Cv
            </a>
          </div>
          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Your Name*"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email*"
                required
              />
              <textarea
                type="text"
                name="Messag"
                rows="6"
                placeholder="Your Message*"
              ></textarea>

              <button type="submit" className="btn btn2">
               
                Submit
              </button>
            </form>
            <span id="msg">{loading}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
        


        <div className="footer">
   <div className="content">
     <div className="left box"><br />
     <div className="topic">Our Services</div>
       <div> <Link to="services" spy={true} smooth={true} offset={-50} duration={500} >Web development</Link> </div><br />
       <div> <Link to="services" spy={true} smooth={true} offset={-50} duration={500} >Web design</Link> </div><br />
       <div> <Link to="services" spy={true} smooth={true} offset={-50} duration={500} >Web development support</Link> </div>
       <br />
       <div> <Link to="services" spy={true} smooth={true} offset={-50} duration={500} >Web development and maintenance</Link> </div><br />
       <div> <Link to="services" spy={true} smooth={true} offset={-50} duration={500} >Web hosting</Link> </div>
      
      
     </div>
     <div className="middle box">
     <div className="topic">
     <div className="loveimg"> <Lottie className="love" animationData={Animation} loop={true} /></div>
     </div>
      <div className="special-list">
        <div className="sepcialtop">
          <div className="special special1 ">
          
        <img
          className="small"
          src={work1}
          
        />
      
      </div>
      <div className="special special1">
          
          <img
            className="small"
            src={work1}
            
          />
        
        </div>
          <div className="special">
            <img src={work2} />
          </div>
         
        </div>
     </div>
     </div>

     <div className="right box"><br />
     <div className="topic">Our Vision</div>
    
<p>To become a prime performer, in providing quality Web, Print and Software
   solutions in the competitive global market place.</p>
       <div id="Subscribe" className="topic">Subscribe us</div>
       <div className="social-icons">
              <a target="_blanck" href="https://wa.link/5nlokc">
               
                <i className="fa-brands fa-whatsapp" style={{ color: 'green' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.linkedin.com/in/a-majid-25915620b/"
              >
                <i className="fa-brands fa-linkedin" style={{ color: 'blue' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.facebook.com/profile.php?id=100018596804353"
              >
            
                <i className="fa-brands fa-facebook" style={{ color: 'blue' }}></i>
              </a>
              <a
                target="_blanck"
                href="https://www.instagram.com/majidchaudhry9287/"
              >
              
                <i className="fa-brands fa-instagram"style={{ color: 'red' }}></i>
              </a>
            </div>
       
     </div>
   </div>
   </div>
      
        </div>
      </div>
    </div>


  );
}
