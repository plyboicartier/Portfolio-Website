import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
        <div className="intro">
            <div className="page-top">
                <img src={'/glynnlogo144px.png'} alt="Site Logo" className="logo" />
                <h1 className="top-text">
                    Carter Glynn
                </h1>
                <div className="download">
                    <a href="/carter-glynn-resume.pdf" className="download-button center" download>
                        <img src={'/download-button.png'} alt="Download Image" className="download-image" />
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="page-bottom">
                <div className="left col">
                    <Link to="/projects" className="button large-card projects">
                        <div className="large-card-text projects">
                            Projects
                        </div>
                    </Link>
                </div>
                <div className="mid col">
                    <Link to="/contact" className="button medium-card contact">
                        <div className="medium-card-text contact">
                            Contact
                        </div>
                    </Link>
                    <Link to="/about" className="button medium-card about">
                        <div className="medium-card-text about">
                            About
                        </div>
                    </Link>
                </div>
                <div className="right col">
                    <a href="https://www.github.com/plyboicartier/" className="button small-card gh-logo">
                        <img src={'/github-mark-white.png'} alt="GitHub Logo" className="small-logo" />
                        <div className="small-card-text">
                            GitHub
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/carter-glynn/" className="button small-card li-logo">
                        <img src={'/linkedin-icon-18-256.png'} alt="LinkedIn Logo" className="small-logo" />
                        <div className="small-card-text">
                            LinkedIn
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Home;