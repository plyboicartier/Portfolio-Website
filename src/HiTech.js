import { useState, useEffect } from "react";
import './HiTech.css'
import { Helmet } from "react-helmet";
import HiTechNav from './HiTechNav.js'

const HiTech = () => {
  
    return (
      <div className="ht-demo">
        <Helmet>
          <title>HiTech Demo</title>
          <meta
            name="description"
            content="Hi-Tech Concrete cutting is a leading provider for all concrete scanning, x-ray, cutting and coring throughout Ontario. We pride ourselves in providing highest quality service in a safe manner, on time and on budget. With the background, knowledge and support of more than 30 years experience from our Owner Dan St.Onge there is no job that we cannot quote or complete."
          />
          <meta name="keywords" content="concrete, construction, ontario" />
        </Helmet>
        
        <HiTechNav></HiTechNav>

        <div className="main">
            
            <div className="landing">
                <img src="/hitech/ht-scenic-removed.jpg" alt="scenic pic of hitech truck" />
                <div className="land-desc">
                    <h1>EVERYTHING CONCRETE</h1>
                    <p>filler description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, porro.</p>
                </div>
            </div>

            <div className="metrics">
                <div className="m1">
                    <h3>40+</h3>
                    <p>metric description</p>
                </div>
                <div className="m2">
                    <h3>22K</h3>
                    <p>metric description</p>
                </div>
                <div className="m3">
                    <h3>1.5M</h3>
                    <p>metric description</p>
                </div>
            </div>

            <div className="choose-us">
                <div className="choose-header">
                    <h2>Why Choose Us?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi eveniet ipsam quibusdam fugit dolores?</p>   
                </div>
                <div className="center row reasons-top">
                    <div className="column reason">
                        <img src="/hitech/testimg.png" alt="r1 img" />
                        <div className="reason-desc">reason 1 description</div>
                    </div>
                    <div className="column reason">
                        <img src="/hitech/testimg.png" alt="r2 img" />
                        <div className="reason-desc">reason 2 description</div>
                    </div>
                </div>
                <div className="center row  reasons-bot">
                    <div className="column reason">
                        <img src="/hitech/testimg.png" alt="r3 img" />
                        <div className="reason-desc">reason 3 description</div>
                    </div>
                    <div className="column reason">
                        <img src="/hitech/testimg.png" alt="r4 img" />
                        <div className="reason-desc">reason 4 description</div>
                    </div>
                </div> 
            </div>

            <div className="carousel center column">
                <div className="carousel-header">
                    <h2>Photo Gallery</h2>
                    <p>idk how to do this so heres placeholder img</p>
                </div>
                <img src="/hitech/ht-scanvan.jpg" alt="scanvan" />
            </div>

            <div className="reviews">
                <div className="reviews-header">
                    <h2>Reviews</h2>
                </div>
                <div className="center row review-group">
                    <div className="review">
                        <div>review description 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos, ea ab explicabo beatae repellendus voluptatibus dolorem, veritatis voluptatem molestias repellat numquam deleniti officia odit, quos porro? Facere, accusantium recusandae.</div>
                        <div className="reviewer">
                            <div>Tracy Johnson</div>
                            <div>August 23, 2023</div>
                        </div>
                    </div>
                    <div className="review">
                        <div>review description 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis unde voluptatum porro voluptate tenetur odio autem. Temporibus natus debitis asperiores vitae et libero aspernatur, laboriosam quasi consectetur delectus beatae tenetur ad iure voluptatem ex cupiditate dignissimos quos provident nemo?</div>
                        <div className="reviewer">
                            <div>Robert Bowen</div>
                            <div>July 15, 2021</div>
                        </div>
                    </div>
                    <div className="review">
                        <div>review description 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum dolores, consequatur similique quis asperiores accusantium facilis nisi natus nihil.</div>
                        <div className="reviewer">
                            <div>Michael Robins</div>
                            <div>September 6, 2022</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center row questions">
                <div>
                    <h2>Questions about what we do?</h2>
                    <p>Get in contact with us</p>
                </div>
                <div><a href="">contact us</a></div>
            </div>

        </div>

        <footer className="center row bottom-footer">
            <div>Copyright &copy; 2023 HI-TECH Concrete Cutting, Inc.</div>
            <div>
                <img src="/hitech/facebook.png" alt="Facebook Link" />
                <img src="/hitech/instagram.png" alt="Instagram Link" />
            </div>
            
        </footer>
      </div>
    );
  };
    
  export default HiTech;