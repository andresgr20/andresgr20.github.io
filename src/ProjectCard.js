import React from 'react';
import './Card.css'

export default function ProjectCard(props){
    return (
        <div className="project-card">
            <div className="project-info">
                <p className="title">{props.title}</p>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
                { props.url!== ""  && 
                    <a href={props.url}><button type="button" class="btn btn-dark">{props.urldescription}</button></a>
                }
            </div>
        </div>
    );
}
