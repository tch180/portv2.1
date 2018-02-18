import React, { Component } from 'react';
import styled from "styled-components";





const Carouseldiv=styled.div`

padding-bottom: 25px;
padding-top: 25px;
padding-right: 10px;
padding-left: 10px;
background-color: black;

.style{
  background-color: black;
}


`
class carousel extends Component {

  
  
  
  
    render() {
        return (

            <div>


<Carouseldiv>
              
                <div id="projectcarousel" className="carousel slide" data-ride="carousel" data-interval="5000"  data-pause="hover"  >
 {/* <!-- Indicators --> */}
  <ol className="carousel-indicators">
    <li data-target="#projectcarousel" data-slide-to="0" className="active"></li>
    <li data-target="#projectcarousel" data-slide-to="1"></li>
    <li data-target="#projectcarousel" data-slide-to="2"></li>
    <li data-target="#projectcarousel" data-slide-to="3"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div className="carousel-inner" role="listbox">
    <div className="item">
      <img src="https://i.imgur.com/NCTOjV4.jpg" alt="Cutting Board"/>
      <div className="carousel-caption">
        {/* <h1>Best Chef</h1>  */}
      </div>
    </div>
    <div className="item active">
      <img src="https://i.imgur.com/vbBa1ps.png" alt="..."/>
      <div className="carousel-caption">
       <h4> BigStar Chores</h4>
      </div>
    </div>
    <div className="item">
      <img src="https://i.imgur.com/JOX4Qyr.png" alt="..."/>
      <div className="carousel-caption">
       <h4> 2nd Chef</h4>
      </div>
    </div>
    <div className="item">
      <img src="https://i.imgur.com/a4m9H96.png" alt="..."/>
      <div className="carousel-caption">
       <h4> VagaBond travel </h4>
      </div>
    </div>
  </div>

  {/* <!-- Controls --> */}
  <a className="left carousel-control" href="#projectcarousel" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#projectcarousel" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</Carouseldiv>
            </div>
        );
    }
}

export default carousel;