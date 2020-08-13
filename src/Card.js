import React from 'react';
import './Card.css';

export default function Card(props){
    return (
        <div className="card">
            <div className="company-pic">
                <a href={props.url}>
                    <img src={require(`./assets/${props.image}`)} alt={props.company}></img>
                </a>
            </div>
            <div className="company-info">
                <p className="company">{props.company}</p>
                <p className="title">{props.title}</p>
                <p className="date">{props.date}</p>
                <p className="location">{props.location}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
