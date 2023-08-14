import { useState } from "react";
import './Contact.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Link } from "react-router-dom";

const Contact = () => {

    return (
      <div>
        <Navbar />
        <div className="center column top-wrap">
          <div>
            <h1 className="title">Contact Me</h1>
            <div className="subtitle">The fastest way to reach me is via the email address provided below.</div>
          </div>
          <div className="center column top-wrap">
            <a href="mailto: carter.glynn14@gmail.com" className="center column contact-colour contact-card contact-link">
              <img src={'/email-icon.png'} alt="Email Icon" className="contact-image"/>
              <div className="contact-text">carter.glynn14@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/carter-glynn/" className="center column contact-link contact-colour contact-card">
              <img src={'/linkedin-icon-18-256.png'} alt="LinkedIn Logo" className="contact-image" />
              <div className="contact-text">LinkedIn</div>
            </a>
            <a href="https://www.github.com/carter-glynn/" className="center column contact-link contact-colour contact-card">
              <img src={'/github-mark-white.png'} alt="GitHub Logo" className="contact-image" />              
              <div className="contact-text">GitHub</div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
    
  export default Contact;