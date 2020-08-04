import React from 'react';
import './App.css';
import About from './About';
import { useRoutes } from "react-router-dom"
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';


function App() {
  let element = useRoutes([
    { path: "/", element: <About /> },
    { path: "education", element: <Education /> },
    { path: "experience", element: <Experience /> },
    { path: "projects", element: <Projects /> },
  ]);
  return element;
    // {/* <div className="App">
    //   <NavBar></NavBar>
    //   <About></About>
    //   <div id="professional">
    //   <h2>Experience</h2>
    //     {exp.map((item,key)=>{
    //       if(item.card.type==="professional"){
    //         return <Card 
    //         url={item.card.url}
    //         company={item.card.company}
    //         title={item.card.position}
    //         date={item.card.duration}
    //         description={item.card.description}
    //         ></Card>
    //       }
    //     })}
    //   </div>
    //   <div id="volunteer">
    //   <h2>Volunteer Experience</h2>
    //   {exp.map((item)=>{
    //       if(item.card.type==="volunteer"){
    //         return <Card 
    //         url={item.card.url}
    //         company={item.card.company}
    //         title={item.card.position}
    //         date={item.card.duration}
    //         description={item.card.description}
    //         ></Card>
    //       }
    //     })}
    //   </div>

    //   <div id="projects">
    //   <h2>Projects & Initiatives</h2>
    //   {proj.map((item)=>{
    //     return <ProjectCard
    //     title={item.card.name}
    //     date={item.card.finished}
    //     description={item.card.description}
    //     ></ProjectCard>
    //   })}
    //   </div>

    //   <div id="education">
    //   <h2>Education</h2>
    //   <Card 
    //         url={uwlogo}
    //         company={"University of Waterloo"}
    //         title={"Bachelor in Computer Science"}
    //         date={"Sept 2012 - Apr 2020 "}
    //         description={"Business Option, International Studies Minor,Legal Studies Minor"}
    //         ></Card>
    //   </div>
    // </div>*/}
}

export default App;
