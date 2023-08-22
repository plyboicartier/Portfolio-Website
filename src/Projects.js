import { useEffect, useState } from "react";
import './Projects.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Projects = () => {
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/carter-glynn/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <a key={item.id} target="_blank" href={item.svn_url} className="proj-card column">
              <img src={picLink(item)} alt="Thumbnail Image" className="pic"/>
              <div className="card-text-wrap column">
                <div className="card-text">
                  {item.name.replace(/-/g, ' ')}
                </div>
                <div className="card-desc">
                  {item.description}
                </div>
                <div className="lang">
                  {displayLang(item.language)}
                </div>
              </div>
            </a>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function displayLang(language) {
    if (language === null) {
      language = "Multiple Languages";
    }
    return language;
  }

  function picLink(item) {
    return "https://raw.githubusercontent.com/carter-glynn/"+ item.name + "/main/Thumbnail.png"
  }

  useEffect(() => {
    repoDataURL();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Projects - Carter Glynn</title>
        <meta
          name="description"
          content="Explore Carter Glynn's diverse engineering portfolio. Comprising of both software and hardware projects, discover an innovative and successful composition of his works!"
        />
        <meta name="keywords" content="software, development, computer, engineer, engineering, code, coding, hardware, carter glynn, portfolio, projects" />
      </Helmet>
      <Navbar />
      <div className="center column top-wrap">
        <div>
          <h1 className="title">Projects</h1>
        </div>
        <div className="center proj-card-wrap">
          {repoData}
        </div>
      </div>
      <Footer />
    </div>
  );
};
  
export default Projects;