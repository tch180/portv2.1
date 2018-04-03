import React, { Component } from 'react';
import styled from "styled-components";



const Aboutme = styled.div`
margin-top:70px;

color: white;
font-size: 18px;
clear: both;


.icons{
    display: flex;
    justify-content: space-evenly;
    font-size: 35px;
}

.fa-linkedin-in {
    background: #007bb5;
   margin-right:30px;
   
    text-decoration:  none;
   
    a:link    
        /* Applies to all unvisited links */
        text-decoration:  none;
        background-color: #007bb5;
        color:            blue;
        
      a:visited 
        /* Applies to all visited links */
        text-decoration:  none;
        background-color: #007bb5;
        color:            #f0f;
        
      a:hover   
        /* Applies to links under the pointer */
        text-decoration:  underline;
        background-color: #007bb5;
        color:            #fff;
        
      a:active  
        /* Applies to activated links */
        text-decoration:  underline;
        background-color: #007bb5;
        color: white;
        
}

.fa-react{
background:black;
color:aqua; 
}
.fa-js {
    border 4px solid black;
    border-radius: 5px;
    color: #89d32a;
}



h4  {
    text-align: center;
    font-size: 48px;
    color:darkslategrey;
}
h5 {
    font-size: 18px;
    text-align: center;
}
img {
    display: block;
    border: 5px solid #36556e; 
    border-radius: 15px;
}
.page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eee;
    padding-top: 30px;
}
.modal-content {
    
    color:black;
    background:grey; 
    font-family: font-awesome;
    text-align:center;
}

button{
    margin-left:30px;
}

`;



class AboutMe extends Component {



    
    render() {




        return (
            <div>
            <div>
            <Aboutme>


              
                
                {/* <h4>Tory Redner</h4>
                <h5>Web Developer</h5> */}
                

                <div className="page-header">
                <img src="https://i.imgur.com/ItnSLBas.jpg" alt="pictureofme"/>
                 <h1>Tory Redner  <small>Web Developer</small></h1>
                 <h3>"Intergrity is who you are when no one is watching".</h3>
                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg"><span className="glyphicon glyphicon-modal-window" aria-hidden="true">My Story</span></button>

<div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
    
                              I grew up with a facination and love of computers, I can still remember the first computer that I had was a 386.<br/>
                 My dad would bring them home from his job broken or in desperate need of repair, It was then that I learned about the 30+ A disk that you needed to install windows 95.
                 Fast forward some years and while I still had a love of all things tech, I decided to pursue my career as a chef and Attened Johnson & Wales University. I had a passion for cooking
                 it was truly amazing to build a dish with unquie flavor profiles. The best part though was watching a person take that first bite of a dish and see the face that they made
                 I call it the "MMMMMM" moment. I threw myself into my craft honed my skills, and quickly worked my way up the ladder to Head Chef.
                 One of the many problems that I always saw, no matter where I went was that tech and restaurant and are way behind the times. So I decided to start looking into coding. Talk about a rabbit hole.
                 I got lost reading article and trying to learn the basic's, but I loved it. The challenge of it and wanting to better my understanding is what brought me to General Assembly. So I took the leap of faith and enrolled, quit my job 
                 and started tackling the pre-work. 12 weeks and 420+ hours later I had finsihed the program, there was some difficult times and so many stressful moments, the days when the material went 
                 right over my head, only to go home and knock out 3-5+ hours of homework. It was more exhausting than when I was working 12-16 hours days in a hot Crowed kitchen. I took unique approach to learning my new craft
                 I applied as much as I could from my cooking to coding. The set-up became my Mise en place (To put in place) the program my dish and the components my ingredients. Sooner then I would have though possible I was cooking with fire
                 I devoured everything that I could in my free time, watching youtube videos on ES6 and React, Listen to programming podcast on my way to class. Now my 8 year old daughter has taken a keen instrest in programming, We've even started making a game together,
                 this is what drives me and motatives me, I want to feed her mind as much as possible,
                  Like cooking I understand that my journey is only just starting, I am looking for that company that is all about 
                 growth and development. Above are some of the projects that I have worked on, either during my time at General Assembly, or on my own. If you have any question for me or would like to schedule an interview please dont hestitate to call me or shoot me an email
                    
                   </div>
  </div>
</div>
                 <div className="icons">
               <h1> <a className="linkedin" href = "https://www.linkedin.com/in/toryredner/" target="_blank" rel="noopener noreferrer"> <span> <i className="fab fa-linkedin-in"/></span></a></h1>
                <h1><a className="github" href="https://github.com/tch180" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-github" /></span></a></h1>
                <i className="fab fa-react" />
                </div>
                </div>

            
                
                
  






                  </Aboutme>
                 </div>
            </div>
        );
    }
}

export default AboutMe;