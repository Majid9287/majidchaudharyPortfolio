import React from "react";
import user from "./images/user.jpg";
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
            <img src={user} />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
            Hello, I am a professional Software Engineer with experience in front-end web development using React.js, Tailwind, and Bootstrap, as well as backend development using Express.js with Node.js and PHP. I also have experience in C#. I  have worked on various projects using these technologies. I am responsible for developing and maintaining Project using these tools.
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
                  <br />React Js/Next Js/Node Js/Express Js
                </li>
                <li>
                  <span>Training at UCP</span>
                  <br />Tailwind/BootStrap/CSS/HTML
                </li>
                <li>
                  <span>Training at UCP</span>
                  <br />PHP/C#
                </li>
                <li>
                  <span> Training at Radix Solution</span>
                  <br />MongoDB/MYSQL
                </li>
              </ul>
            </div>
            <div className="tab-contents " id="experience">
              <ul>
                <li>
                  <span>2022-current</span>
                  <br /> In Next Js, React Js, Node Js and Express Js Working in Radix Solution
                </li>
                <li>
                  <span>2022-current</span>
                  <br />In MySQL and MongoDB Working in Radix Solution
                </li>
                <li>
                  <span>2022-current</span>
                  <br />In PHP and C# Working in Radix Solution
                </li>
                <li>
                  <span>2021-2022</span>
                  <br /> In Javascript, Tailwind, Bootstrap, Css and HTML Working as Freelancer
                </li>
              
                <li>
                  <span>2020-2022</span>
                  <br />In C++ and C Working as Freelancer
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
                  <br /> React Js/ Next Js  course  
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

