import { useEffect, useState } from "react";
import './Projects.css'
import Navbar from './Navbar.js'
import { Link } from "react-router-dom";

const Projects = () => {
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/plyboicartier/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <a target="_blank" href={item.svn_url} className="proj-card">
              <div className="card-text-wrap column">
                <div className="card-text">
                  {item.name.replace(/-/g, ' ')}
                </div>
                <div className="card-desc">
                  {item.description}
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