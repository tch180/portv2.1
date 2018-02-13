import React, { Component } from "react";
import styled from "styled-components";

const ProjectSection = styled.div`


// background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));  
color: white;
  text-align: center;



  .container-fluid{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 55px;
    // background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));
  }


    .thumbnail{
      // background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));      // width: 30;
      margin:auto;
      background-color: black;

    }
    .thumbnail .caption {
      color:white;
      font-family: font-awesome;
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
                      <h6>Mern Stack </h6>
                      <h5>Project Length: 4 Days</h5>
                      <p>This was our first group project, The groups consisted of 4
                                  people. We worked in mob & pair programming.This Application
                    allows the user to post reviews to each city,<br /> it allows
                    images to be uploaded and has vaildation.</p>
                      <p><a href="https://github.com/tch180/vagabond-project-" className="btn btn-primary" role="button">Github</a> <a href="https://wdi12-vagabond-travel.herokuapp.com/" className="btn btn-success" role="button">Demo</a></p>
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
                the child will be able to turn those points in for rewards.</p>
                      <p><a href="https://github.com/tch180/bigstar-chores" className="btn btn-primary" role="button">Github</a> <a href="https://bigstar-chores.herokuapp.com/" className="btn btn-success" role="button">Demo</a></p>
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
                catering.</p>
                      <p><a href="https://github.com/tch180/Project-3" className="btn btn-primary" role="button">Github</a> <a href="https://second-chefs.herokuapp.com/" className="btn btn-success" role="button">Demo</a></p>
                    </div>
                  </div>
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
