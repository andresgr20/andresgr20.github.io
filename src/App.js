import React from 'react';
import './App.css';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import NavBar from './NavBar';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route  path="/" exact component={About}/>
          <Route  path="/education" exact component={Education}/>
          <Route  path="/experience" exact component={Experience}/>  
          <Route  path="/projects" exact component={Projects}/>          
        </Switch>
      </div>
  );
}

export default App;
