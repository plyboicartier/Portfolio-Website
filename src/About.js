import { useState } from "react";
import './About.css'
import Navbar from './Navbar.js'
import { Link } from "react-router-dom";

const About = () => {
    
    return (
      <div>
        <Navbar />
        <div className="center column top-wrap">
          <div>
            <h1 className="title">About Me</h1>
            <div className="subtitle">Hi! My name is Carter Glynn. I am a recent graduate from the Computer Engineering Technology program at Conestoga College.</div>
            <div className="subtitle">I plan to continue my education attending evening and weekend classes at McMaster University for their Bachelor of Technology (Software Engineering) degree program.</div>
            <div className="subtitle">I am seeking an employer who I can help with my skills and experience and who, in turn, can help me grow in both my career, and as a person.</div>
          </div>
          <div className="techs">
            <div className="center row">
              <div className="techs-card column">
                <div className="card-title">General Languages</div>
                <div className="center techs-group">
                  <div className="center column list-gap">
                    <img src={'/technologies/cpp.svg'} alt="C++ Logo" className="tech-logo"/>
                    <img src={'/technologies/matlab.png'} alt="MATLAB Logo" className="tech-logo"/>
                    <img src={'/technologies/c-sharp.svg'} alt="C# Logo" className="tech-logo"/>
                    <img src={'/technologies/python.svg'} alt="Python Logo" className="tech-logo"/>
                  </div>
                  <div className="center column list-gap">
                    <div>C/C++</div>
                    <div>MATLAB</div>
                    <div>C#</div>
                    <div>Python</div>
                  </div>
                </div>
              </div>
              <div className="techs-card column">
                <div className="card-title">Web Dev</div>
                <div className="center techs-group">
                  <div className="center column list-gap">
                    <img src={'/technologies/html-css.png'} alt="HTML and CSS Logo" className="tech-logo"/>
                    <img src={'/technologies/sqlite.svg'} alt="SQLite Logo" className="tech-logo"/>
                    <img src={'/technologies/php.svg'} alt="PHP Logo" className="tech-logo"/>
                    <img src={'/technologies/javascript.png'} alt="JavaScript Logo" className="tech-logo"/>
                    <img src={'/technologies/react.svg'} alt="React Logo" className="tech-logo"/>
                  </div>
                  <div className="center column list-gap">
                    <div>HTML/CSS</div>
                    <div>SQL</div>
                    <div>PHP</div>
                    <div>JavaScript</div>
                    <div>React</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center row">
              <div className="techs-card column">
                <div className="card-title">Hardware</div>
                <div className="center techs-group">
                  <div className="center column list-gap">
                    <div>Circuit Analysis & Design</div>
                    <div>Electronic Simulation Tools</div>
                    <div>Component Soldering</div>
                    <div>Electronics Testing & Troubleshooting</div>
                  </div>
                </div>
              </div>
              <div className="techs-card column">
                <div className="card-title">Other Technologies</div>
                <div className="center techs-group">
                  <div className="center column list-gap">
                    <img src={'/technologies/assembly.png'} alt="Assembly Logo" className="tech-logo"/>
                    <img src={'/technologies/c-lang.svg'} alt="C Language Logo" className="tech-logo"/>
                    <img src={'/technologies/dotnet.svg'} alt=".NET Logo" className="tech-logo"/>
                    <img src={'/technologies/vhdl.png'} alt="VHDL Logo" className="tech-logo"/>
                    <img src={'/technologies/arduino.png'} alt="Arduino Logo" className="tech-logo"/>
                  </div>
                  <div className="center column list-gap">
                    <div>6502 Assembly</div>
                    <div>Embedded C</div>
                    <div>WinForms</div>
                    <div>VHDL</div>
                    <div>Arduino</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
    
  export default About;