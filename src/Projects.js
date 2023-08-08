import { useEffect, useState } from "react";
import './Projects.css'
import Navbar from './Navbar.js'
import { Link } from "react-router-dom";

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
    return "https://raw.githubusercontent.com/carter-glynn/"+ item.name + "/main/TTT-SS.png"
  }

  useEffect(() => {
    repoDataURL();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="center column top-wrap">
        <div>
          <h1 className="title">Projects</h1>
        </div>
        <div className="center proj-card-wrap">
          {repoData}
        </div>
      </div>
    </div>
  );
};
  
export default Projects;