import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import styled from "styled-components";


const WelcomepageDiv = styled.div`
background: linear-gradient(rgb(56,89,114), rgb(0, 0, 0));
color: blue:
text-align: center;
height: 100vh;

h2, h1 {
    text-align: center;
    color: blue;
}

`

let Time = new Date().toLocaleString();


class landingPage extends Component {





    
    render() {
        return (
            
<WelcomepageDiv>

            <div>
                <h2>Hello and Welcome to my Portfolio Thanks for Stopping By!!!</h2>
                <h1>The time is </h1>
            </div>
            </WelcomepageDiv>

        );
    }
}

export default landingPage;