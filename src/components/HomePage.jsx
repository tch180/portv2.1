import React, { Component } from "react";
import Carousel from "./carousel";
// import Contactme from "./contactme";
import Projects from "./projects";
// import ReactDOM from "react-dom";
import About from "./about";

import styled from "styled-components";

let Time = new Date().toLocaleString();

const ToTopButton = styled.div`

    // display: none;
    position: fixed; 
    bottom: 20px; 
    right: 30px; 
    // z-index: 99; 
    // border: none;
    // outline: none;
    // color: white; 
    // cursor: pointer; 
    padding: 15px; 
    border-radius: 10px; 
    font-size: 18px; 

    background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));



`
const HomePageStlye = styled.div`
background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));



`

const NavbarDiv = styled.div`
font-family: font-awesome;
font-size: 25px;
background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));
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
constructor(){
  super();
  this.state= {
    intervalId: 0
  };
}

// scrollStep() {
//   if (window.pageYOffset === 0) {
//       clearInterval(this.state.intervalId);
//   }
//   window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
// };

// scrollToTop() {
//   let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
//   this.setState({ intervalId: intervalId });
// }

   backToTopButton = async () => {
     try {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
  }
  window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
       console.log("Clicked button");

    } catch (error) {
       console.log(error);
      
     }
   }


  render() {
    
    
    return (
      <div>

     {/* ///////////////
        //Navbar
        /////////////// */}
        <HomePageStlye>
        <div>
          <NavbarDiv>
            <div className="Navbar">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header ">
                    {/* <img src="" alt="BrandLogo" /> */}
                    {/* <a className="navbar-brand" href="/HomePage" /> */}
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
        <ToTopButton>
        <button className="ToTopButton  " onClick={this.backToTopButton}  ><i className="fas fa-angle-double-up"></i></button> 
        </ToTopButton>
        </HomePageStlye>
      </div>
    );
  }
}

export default HomePage;
