import React, { Component } from "react";
import Carousel from "./carousel";
// import Contactme from "./contactme";
import Projects from "./projects";
// import ReactDOM from "react-dom";
import About from "./about";

import styled from "styled-components";

let Time = new Date().toLocaleString();

const BackToTopButton = styled.div`
  #backtotop {
    // display: none; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: red; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
  }
  #backtotop:hover {
    background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));

  }

`


const NavbarDiv = styled.div`
font-family: font-awesome;
font-size: 25px;

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
}
a:active {
  text-decoration: underline;
  font-weight: underline;
  color:white;
}
  
  a.navbar-brand {
   

  }

  .navbar {
    background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));
    color:white;

    
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





  BackToTopButton() {
   console.log("Clicked button")
  }


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
                      <ol>Projects</ol>
                    </a>
                    <ol>Resume</ol>
                    <a href="#about">
                      
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
            {/* <ProjectSection1Div> */}
              <Projects />
            {/* </ProjectSection1Div> */}
          </div>
        </section>

{/* ///////////////
//About 
/////////////// */}
        <a name="about" />
        <div className="aboutme">
            <About />
        </div>

        <i className="fab fa-js" />
        <i className="fab fa-github" />
        <i className="fab fa-react" />
<BackToTopButton>
        <button  onClick={BackToTopButton}></button>
        </BackToTopButton>
      </div>
    );
  }
}

export default HomePage;
