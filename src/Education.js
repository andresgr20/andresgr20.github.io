import Card from './Card';
import React from 'react';
import {experienceInfo as edu} from './data/experienceInfo';
import {certInfo as cert } from './data/certifications';
import ProjectCard from './ProjectCard';

export default function Education(){

    return(
    <>
        <h2>Education</h2>
        {edu.filter(item => item.card.type === 'school').map((item)=>{
                        return <Card 
                        image={item.card.image}
                        company={item.card.company}
                        title={item.card.position}
                        date={item.card.duration}
                        location={item.card.location}
                        description={item.card.description}
                        />
                })}

        <h2>Certifations</h2>
        {cert.map((item) => {
                return <ProjectCard
                    title={item.info.name}
                    date={item.info.date}
                    link={item.info.download}
                />
            })}  
    </>
    );
}