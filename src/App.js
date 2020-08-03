import React from 'react';
import NavBar from './NavBar';
import './App.css';
import {cardInfo as exp} from './experience.js';
import {projectInfo as proj} from './projects.js';
import About from './About';

function App() {
  return (
    <>
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <div id="professional">
      <h2>Experience</h2>
        {/* {exp.map((item,key)=>{
          return 
        })} */}
      </div>
      <div id="volunteer">
      <h2>Volunteer Experience</h2>
      
      </div>

      <div id="projects">
      <h2>Projects and Initiatives</h2>
      </div>

    </div>
    </>
  );
}

export default App;
