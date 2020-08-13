import Card from './Card';
import React from 'react';
import {experienceInfo as edu} from './data/experienceInfo';
import {certInfo as cert } from './data/certifications';
import ProjectCard from './ProjectCard';

export default function Education(){

    return(
    <>
        <h2>Education</h2>
        <Card 
            company={edu[12].card.company}
            title={edu[12].card.position}
            image={edu[12].card.image}
            location={edu[12].card.location}
            date={edu[12].card.duration}
            description={edu[12].card.description}
            />
    
        <h2>Certifations</h2>
        {cert.map((item) => {
                return <ProjectCard
                    title={item.card.name}
                    date={item.card.finished}
                    description={item.card.description}
                />
            })}  
    </>
    );
}