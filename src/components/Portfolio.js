import React from "react";
import work1 from "./images/work-1.jpeg";
import work2 from "./images/work-2.png";
import work3 from "./images/WORK-3.jpeg";
import Lottie from "lottie-react";
import Animation from "../lotties/work.json";
export default function portfolio() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="service-title">My Work</h1>
        <div className="service_img">
          <div className="img">
            {" "}
            <Lottie animationData={Animation} loop={true} />
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src={work1} />
            <div className="layer">
              <h3>ElectronicGame website</h3>
              <p>
                We have gotten a big gaming company as customer. The company is
                called ElectricGames and wants to be a new platform for games
                from different platforms (Xbox, Playstation, Nintendo Switch).
              </p>
             
              <a    target="_blanck" href="https://github.com/Majid9287?tab=repositories" >
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={work2} />
            <div className="layer">
              <h3>E-Commerce websit</h3>
              <p>
              E-commerce website built with Next.js is a web-based platform that allows businesses to sell products and services online.
              </p>
              <a    target="_blanck" href="https://github.com/Majid9287?tab=repositories">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={work3} />
            <div className="layer">
              <h3>Portfolio website</h3>
              <p>
              Portfolio website which express personality, experience, and capabilities
              </p>
              <a    target="_blanck" href="https://github.com/Majid9287?tab=repositories">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
