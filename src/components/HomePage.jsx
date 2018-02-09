import React, { Component } from "react";
import Carousel from "./carousel";
import Contactme from "./contactme";
import Projects from "./projects";
import ReactDOM from "react-dom";
import About from "./about";

import styled from "styled-components";

let Time = new Date().toLocaleString();

const ProjectSection1Div = styled.div`
  img {
    display: flex;
  }
`;
const AboutmeDiv = styled.div`
background: rgb(56, 89,114);
color: white;
  font-size: 18px;
`;

const NavbarDiv = styled.div`

a:link {
  text-decoration:none;
  font-weight: bold;
  
}
a:visted {
  text:decoration:none;
  font-weight:bold;
  color: #f0f;

}
a:hover {
  text-decoration:underline;
  font-weight:bold;
  // color: #fff;
}
a:active {
  text-decoration: underline;
  font-weight: underline;
  color:white;
}
  
  a.navbar-brand {
   
    background-image: url("https://i.imgur.com/2hK7jsVt.jpg");

  }

  .navbar {
    background: rgb(56, 89,114);
    color:white;
    // background-image: url(https://i.imgur.com/xVhHp95.jpg);

    
  }

  ul {
    text-align: right;
    display: flex;
    justify-content: space-evenly;
    text-decoration-color: white;
    color: floralwhite;
  }

  h1 {
    color: white;

  }
 
h4 {
    
  white-space: nowrap;
  animation: type 15s steps(180, end);
  overflow: hidden;
  width: 60em;

  

}

@keyframes type{

   from {width: 0;}
   
}

`;

class HomePage extends Component {
  render() {
    return (
      <div>
        {/* ///////////////
        //Navbar
        /////////////// */}
        <div>
          <NavbarDiv>
            <div className="Navbar">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header ">
                    {/* <img src="" alt="BrandLogo" /> */}
                    <a className="navbar-brand" href="/HomePage" />
                  </div>
                  <h1>Tory Redner </h1>
                  <h6>{Time}</h6>
                  <ul>
                    <a href="#projects">
                      <ol>Projects</ol>{" "}
                    </a>
                    <ol>Resume</ol>
                    <a href="#about">
                      {" "}
                      <ol>About </ol>
                    </a>
                  </ul>
                  <h4>
                    "The average person puts only 25% of his energy into his
                    work.<br />
                    The world takes off its hat to those who put in more than
                    50% of their capacity,and<br />
                    stands on its head for those few and far between souls who
                    devote 100%. —Andrew Carnegie"
                  </h4>
                </div>
              </nav>
            </div>
            <h1 />
          </NavbarDiv>
        </div>

        {/* ///////////////
//Projects 
/////////////// */}

        <section className="carousel">
          <Carousel />
        </section>

        <section>
          <div>
            <a name="projects" />
            <ProjectSection1Div>
              <Projects />
            </ProjectSection1Div>
          </div>
        </section>

        {/* ///////////////
//About 
/////////////// */}
        <a name="about" />
        <div className="aboutme">
          <AboutmeDiv>
            <About />
          </AboutmeDiv>
        </div>

        <i className="fab fa-js" />
        <i className="fab fa-github" />
        <i className="fab fa-react" />
      </div>
    );
  }
}

export default HomePage;
