import {projectInfo as info} from './projectInfo';
import ProjectCard from './ProjectCard';
import NavBar from './NavBar';
import React from 'react';

export default function Projects(){
    return(
        <>
        <NavBar/>
            <h2>Projects</h2>
            {info.map((item) => {
                return <ProjectCard
                    title={item.card.name}
                    date={item.card.finished}
                    description={item.card.description}
                />
            })}  
        </>
    );


}