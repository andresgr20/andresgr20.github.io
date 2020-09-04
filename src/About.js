import './About.css'
import React from 'react';
import profile from './assets/pic.jpg'

export default function About() {
    return (
        <>
        <div className="info">
            <div className="profile-section">
                <img id="profile" src={profile} alt="profile"></img>
            </div>
            <div className="info-section">
                <p>I am a recent graduate of the University of Waterloo with a keen interest in fintech, social innovation, and education. Some of my hobbies are reading, live music, game design, hiking, photography, and learning new languages. I am currently fluent in Spanish and English, and am slowly trying to pick up Japanese and Portuguese again. I was born and raised on a ranch, so I am hoping to one day create a bridge between tech and farming for Second World countries.     </p>
            </div>
        </div>
        </>
    );
}