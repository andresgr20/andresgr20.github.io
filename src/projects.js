import {projectInfo as info} from './data/projectInfo';
import ProjectCard from './ProjectCard';
import React from 'react';
import './Projects.css'

export default function Projects(){
    return(
        <>
            <h2>Projects</h2>
            <div className="project">
            {info.map((item) => {
                return <ProjectCard
                    title={item.card.name}
                    date={item.card.finished}
                    description={item.card.description}
                />
            })}  
            </div>

        </>
    );


}