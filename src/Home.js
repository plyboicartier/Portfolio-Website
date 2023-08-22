import Footer from './Footer.js'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Home = () => {
    
  return (
    <div className="home">
        <Helmet>
            <title>Carter Glynn</title>
            <meta
                name="description"
                content="Carter Glynn's engineering portfolio showcases his expertise in software and hardware development. Explore his projects and accomplishments, and learn how to get in contact with him here!"
            />
            <meta name="keywords" content="software, development, computer, engineer, engineering, code, coding, hardware, carter glynn, portfolio, resume" />
        </Helmet>
        <div className="intro">
            <div className="page-top">
                <img src={'/icons/glynnlogo118px.png'} alt="Site Logo" className="logo" />
                <h1 className="top-text">
                    Carter Glynn
                </h1>
            </div>
            <div className="page-bottom">
                <div className="left col">
                    <Link to="/projects" className="button large-card projects column">
                        <div className="large-card-text projects">
                            Projects
                        </div>
                        <div className="carousel-ani large-ani" aria-hidden="true">
                            <p>Projects&nbsp;</p>
                            <p>Projects&nbsp;</p>
                            <p>Projects&nbsp;</p>
                            <p>Projects&nbsp;</p>
                            <p>Projects&nbsp;</p>
                            <p>Projects&nbsp;</p>
                        </div>
                    </Link>
                </div>
                <div className="mid col">
                    <Link to="/contact" className="button medium-card contact column">
                        <div className="carousel-ani med-ani" aria-hidden="true">
                            <p>Contact&nbsp;</p>
                            <p>Contact&nbsp;</p>
                            <p>Contact&nbsp;</p>
                            <p>Contact&nbsp;</p>
                            <p>Contact&nbsp;</p>
                            <p>Contact&nbsp;</p>
                        </div>
                        <div className="medium-card-text contact">
                            Contact
                        </div>
                    </Link>
                    <Link to="/about" className="button medium-card about column">
                        <div className="carousel-ani med-ani" aria-hidden="true">
                            <p>About&nbsp;</p>
                            <p>About&nbsp;</p>
                            <p>About&nbsp;</p>
                            <p>About&nbsp;</p>
                            <p>About&nbsp;</p>
                            <p>About&nbsp;</p>
                        </div>
                        <div className="medium-card-text about">
                            About
                        </div>
                    </Link>
                </div>
                <div className="right col">
                    <a href="https://www.github.com/carter-glynn/" className="button small-card gh-logo">
                        <img src={'/icons/github-mark-white.png'} alt="GitHub Logo" className="small-logo" />
                        <div className="small-card-text">
                            GitHub
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/carter-glynn/" className="button small-card li-logo">
                        <img src={'/icons/linkedin-icon-18-256.png'} alt="LinkedIn Logo" className="small-logo" />
                        <div className="small-card-text">
                            LinkedIn
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
 
export default Home;