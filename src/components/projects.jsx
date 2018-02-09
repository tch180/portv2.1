import React, { Component, Link } from "react";
import styled from "styled-components";

const ProjectSection = styled.div`
  img {
    width: 728px;
    height: 528px;
    // object-fit: cover;
    
  }


  background: rgb(56, 89,114);
  color: white;
`;

const Project1Section = styled.div`
margin-top: 70px;

background: rgb(56, 89,114);
color: white;

img{
  float:left;
  clear: left;

}


.clearfix {
  overflow: auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.element {
  @include clearfix;
}


p {
  
    color: white;
  font-size: 20px;
  margin: 10px 0 0 10px;
  // white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 5s steps(180, end);
  
  
}

@keyframes type{
  from {width: 0;}
}



Projectdescription {
  float: right;
}
`;

const Project2Section = styled.div`
background: rgb(56, 89,114);
  color: white;
// text-align: -webkit-center;

img {
  float: right;
  clear:right;
}

p {
    color: white;
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 5s steps(180, end);
}

@keyframes type{
  from {width: 0;}
}

Projectdescription {
  float:left;
}
`


const Project3Section = styled.div`
background: rgb(56, 89,114);
  color: white;

img {
  float:left;
}

p {
    color: white;
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 5s steps(180, end);
}

@keyframes type{
  from {width: 0;}
}

Projectdescription {
  float: right;
}
`;






class projects extends Component {






  render() {
    return (
      <div>
        <ProjectSection>
          <div>



         
            <Project1Section>
              <section className="projects1">
            
                <img
                  src="https://i.imgur.com/a4m9H96.png"
                  alt="Vagabond Travel Project"/>
                  
                <div className="Projectdescription">
                  <p>Vagabond Travel - Group Project</p>
                  <h6>Mern Stack </h6>
                  <h5>Project Length: 4 days</h5>
                  <h5>
                    This was our first group project, The groups consisted of 4
                    people. We worked in mob & pair programming.This Application
                    allows the user to post reviews to each city,<br/> it allows
                    images to be uploaded and has vaildation.
                  </h5>
                  <h4>Github: https://github.com/tch180/vagabond-project</h4>
                </div>
              </section>
            </Project1Section>
          

            <Project2Section>
            <div className="Projectdescription">
            <img src="https://i.imgur.com/vbBa1ps.png" alt="BigStar Chores"  />
              <p>BigStar Chores </p>
              <h6>React On Rails </h6>
              <h5>Project Length: 7 days</h5>
              <h5>
                One of my favorite projects, This allows parents to add children
                and Assign chores that are equated an point value.<br/> In version 2
                the child will be able to turn those points in for rewards.
              </h5>
              <h4>Github: https://github.com/tch180/bigstar-chores</h4>
           </div>
        </Project2Section>

        <Project3Section>
        <div className="Projectdescription">
        <img src="https://i.imgur.com/YlQD5vN.png?1" alt="2nd Chef " />
              <p>2nd Chef</p>
              <h6>Stack: React on Rails </h6>
              <h5>Project Length: 6 days</h5>
              <h5>
                Imagine if you always had a chef on call, to cook for you you
                when ever you wanted. birthdays partys Small - Medium size
                catering.
              </h5>
              <h4>Github: https://github.com/tch180/-BestChef-Project2</h4>
            </div>
</Project3Section>




          </div>
        </ProjectSection>
      </div>
    );
  }
}

export default projects;
