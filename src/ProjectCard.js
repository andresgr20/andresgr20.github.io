import React from 'react';
import './Card.css'

export default function ProjectCard(props){
    return (
        <div className="card">
            <div className="project-info">
                <p className="title">{props.title}</p>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
