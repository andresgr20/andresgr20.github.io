import Card from './Card';
import React from 'react';
import {experienceInfo as edu} from './data/experienceInfo';
import {certInfo as cert } from './data/certifications';
import ProjectCard from './ProjectCard';
import './Projects.css'
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
                        awards={item.card.awards}
                        url={item.card.url}
                        />
                })}

        <h2>Certifications</h2>
        <div className="project">
        {cert.map((item) => {
                return <ProjectCard
                    title={item.info.name}
                    date={item.info.finished}
                    url={item.info.url}
                    urldescription={item.info.urldescription}
                />
            })}  
        </div>

    </>
    );
}