import React from 'react';
import logo from './logo.svg';
import NavBar from 'NavBar';
import './App.css';
import {cardInfo as exp} from 'experience';
import {projectInfo as proj} from 'projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      </header>
      <div id="about-me">

      </div>
      <div id="#professional"></div>
      <div id="#volunteer"></div>
    </div>
  );
}

export default App;
