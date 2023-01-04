import React from "react";
import user from "./images/user.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function About() {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");
  const handleChange = (idname) => {
    const div = document.getElementById(idname);
    for (var i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active-tab");
    }
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }

    if (idname === "skills") {
      document.getElementById("ski").classList.add("active-link");
    } else if (idname === "education") {
      document.getElementById("edu").classList.add("active-link");
    } else {
      document.getElementById("exp").classList.add("active-link");
    }

    div.classList.add("active-tab");
  };
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={user} />
            </AnimationOnScroll>
          </div>

          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>

            <p>
              Hello, I am a professional Software Engineer. I have a degree in
              BSSE and have been working in the software industry for 1 years. I
              specialize in React.Js,Next.Js Tailwind,Bootstrap, Laravel, PHP,
              Node.js and have experience working on a wide range of software
              projects. I am always seeking new challenges and opportunities to
              learn and grow as a software engineer.
            </p>
            <div className="tab-titles">
              <p
                className="tab-links active-link"
                id="ski"
                onClick={() => handleChange("skills")}
              >
                Skills
              </p>
              <p
                className="tab-links "
                id="exp"
                onClick={() => handleChange("experience")}
              >
                Experience
              </p>
              <p
                className="tab-links "
                id="edu"
                onClick={() => handleChange("education")}
              >
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>Training at Radix Solution</span>
                  <br />
                  React Js/Next Js/Node Js/Express Js
                </li>
                <li>
                  <span>Training at UCP</span>
                  <br />
                  Tailwind/BootStrap/CSS/HTML
                </li>
                <li>
                  <span>Training at UCP</span>
                  <br />
                  PHP/Laravel
                </li>
                <li>
                  <span> Training at Radix Solution</span>
                  <br />
                  MongoDB/MYSQL
                </li>
              </ul>
            </div>
            <div className="tab-contents " id="experience">
              <ul>
                <li>
                  <span>2022-current</span>
                  <br /> In Next Js, React Js, Node Js and Express Js Working in
                  Radix Solution
                </li>
                <li>
                  <span>2022-current</span>
                  <br />
                  In MySQL and MongoDB Working in Radix Solution
                </li>
                <li>
                  <span>2022-current</span>
                  <br />
                  In PHP and C# Working in Radix Solution
                </li>
                <li>
                  <span>2021-2022</span>
                  <br /> In Javascript, Tailwind, Bootstrap, Css and HTML
                  Working as Freelancer
                </li>

                <li>
                  <span>2020-2022</span>
                  <br />
                  In C++ and C Working as Freelancer
                </li>
              </ul>
            </div>
            <div className="tab-contents " id="education">
              <ul>
                <li>
                  <span>University of Centeral Punjab / 2020</span>
                  <br /> Software Engineering
                </li>
                <li>
                  <span>Radix Solution / 2022</span>
                  <br /> React Js/ Next Js course
                </li>
                <li>
                  <span>W3 Schools / 2022</span>
                  <br /> Node Js/ Express Js course
                </li>
                <li>
                  <span>Radix Solution / 2022</span>
                  <br /> C# course
                </li>
                <li>
                  <span>W3 Schools / 2021</span>
                  <br /> JavaScript course
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
