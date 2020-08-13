import {projectInfo as info} from './data/projectInfo';
import ProjectCard from './ProjectCard';
import React from 'react';

export default function Projects(){
    return(
        <>
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