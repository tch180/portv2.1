import React, { Component } from "react";
import styled from "styled-components";

const ProjectSection = styled.div`


// background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));  
color: white;
  text-align: center;
  font-family: font-awesome;



  .container-fluid{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 55px;
    // background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));
  }


    .thumbnail{
      // background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));      
      // width: 30;
      margin:auto;
      background-color: black;
      margin-top:30px;

    }
    .thumbnail .caption {
      color:white;
      font-family: font-awesome;
  }
 #projectDesc{
   
    justify-content: space-between;
    display: flex;
    margin-bottom: 25px;
   

 }
  
`;







class projects extends Component {






  render() {
    return (
      <div>
          <div>

        <ProjectSection>
        <div className="container-fluid">




              <div className="row">
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/a4m9H96.png" alt="..." />
                    <div className="caption">
                      <h3>Vagabond Travel - Group Project</h3>
                      <h6>MERN Stack </h6>
                      <h5>Project Length: 4 Days</h5>
                      <p>This was our first group project, The groups consisted of 4
                                  people. We worked in mob & pair programming.This Application
                    allows the user to post reviews to each city,<br /> it allows
                    images to be uploaded and has vaildation.</p>
                  
                    
                      <p><a href="https://github.com/tch180/vagabond-project-" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer" >Github</a> <a href="https://wdi12-vagabond-travel.herokuapp.com/" className="btn btn-success" role="button" target="_blank" rel="noopener noreferrer" >Demo</a></p>
                    </div>
                  </div>
                </div>
              
            


           
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/vbBa1ps.png" alt="..." />
                    <div className="caption">
                      <h3>BigStar Chores</h3>
                      <h6>React On Rails </h6>
                      <h5>Project Length: 7 Days</h5>
                      <p> One of my favorite projects, This allows parents to add children
                and Assign chores that are equated an point value. In version 2
                the child will be able to turn those points in for rewards.   
                 </p>
                

                   
                      <p><a href="https://github.com/tch180/bigstar-chores" target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">Github</a> <a href="https://bigstar-chores.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
                </div>
          
          

          
          

            
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/JOX4Qyr.png" alt="..." />
                    <div className="caption">
                      <h3>2nd Chef</h3>
                      <h6>MERN Stack </h6>
                      <h5>Project Length: 6 days</h5>
                      <p>  Imagine if you always had a chef on call, to cook for you you
                when ever you wanted. birthdays partys Small - Medium size
                catering.  </p>

               
                      <p><a href="https://github.com/tch180/Project-3" target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">Github</a> <a href="https://second-chefs.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
                </div>



          </div>

          



        </div>
        <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/64GXK88.png" alt="..." />
                    <div className="caption">
                      <h3>Midway Injury Clinic</h3>
                      <h6>HTML, CSS, JS </h6>
                      <h5>Client</h5>
                      <p>Basic website for a Injury clinic. </p>
                  
                    
                      <p><a href="https://www.midwayinjuryclinic.com" target="_blank" rel="noopener noreferrer"  className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
                </div>



       <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/w5qsdes.jpg?1" alt="..." />
                    <div className="caption">
                      <h3>Best Chef </h3>
                      <h6>MEN Stack </h6>
                      <h5>Project Length: 5 days</h5>
                      <p>Recipe Management program. allows users to add new recipes, and view current recipes.  </p>
                  
                    
                      <p><a href="https://github.com/tch180/-BestChef-Project2" target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">Github</a> <a href="https://warm-plateau-58242.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="thumbnail">
                    <img src="https://i.imgur.com/Gi8zlBP.png" alt="..." />
                    <div className="caption">
                      <h3>StarTrek Jeopardy </h3>
                      <h6> HTML5, CSS3, JavaScript,JQuery</h6>
                      <h5>Project Length: 5 days</h5>
                      <p>A StarTrek based Jeopardy game. </p>
                  
                    
                      <p><a href="https://github.com/tch180/project1" target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">Github</a> <a href="http://typist-barometers-60255.bitballoon.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
                </div>
        </ProjectSection>

          </div>
      </div>
    );
  }
}

export default projects;
