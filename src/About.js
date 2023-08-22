import { useState, useEffect } from "react";
import './About.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Helmet } from "react-helmet";

const About = () => {
  
    return (
      <div>
        <Helmet>
          <title>About - Carter Glynn</title>
          <meta
            name="description"
            content="Carter Glynn's engineering portfolio showcases his expertise in software and hardware development. Learn more about his background and skills in various technologies here!"
          />
          <meta name="keywords" content="software, development, computer, engineer, engineering, hardware, carter glynn, portfolio, about me, about, technologies" />
        </Helmet>
        <Navbar />
        <div className="center column top-wrap">
          <div>
            <h1 className="title">About Me</h1>
            <div className="subtitle">Hi! My name is Carter Glynn. I am a recent graduate from the Computer Engineering Technology program at Conestoga College.</div>
            <div className="subtitle">I'm excited to continue my education attending evening and weekend classes at McMaster University for their Bachelor of Technology (Software Engineering) degree program.</div>
            <div className="subtitle">My professional experience includes leveraging both my software and hardware skills to create electronics products for commercial use, and teaching other post-secondary students in Computer Science, Electronics, and Mathematics.</div>
            <div className="subtitle">I have a passion for learning and expanding my horizons, and I'd cherish the opportunity to be on the cutting-edge of technology.</div>
          </div>
          <div className="techs">
            The following are a list of technologies I've worked with:
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
        <Footer />
      </div>
    );
  };
    
  export default About;