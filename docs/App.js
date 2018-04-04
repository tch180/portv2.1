import React, { Component } from 'react';
import { HashRouter,  Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
// import contactme from './components/contactme';
import about from './components/about';

class App extends Component {





  render() {
    return (
      <div>
        <HashRouter>        
         <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/HomePage' component={HomePage}/>
            {/* <Route exact path='/contact' component={contactme}/> */}
            <Route exact path='/about' component={about}/>
         </Switch>
        </HashRouter>
   </div>
    );
  }
}

export default App;
