import './About.css'
import React from 'react';
import profile from './assets/pic.jpg'

export default function About() {
    return (
        <>
        <div className="row">
            <div className="profile-section">
                <img id="profile" src={profile} alt="profile"></img>
            </div>
            <div className="info-section">
                <p>I am a recent Waterloo university graduate with a keen interest in fintech, social innovation, and education. Some of my hobbies are reading, live music, game design, hiking, photography, and learning new languages. I am currently fluent in Spanish and English, and slowly trying to pick up Japanese and Portuguese again. I was born and raised in a ranch and later moved to one day merge tech and farming.     </p>
            </div>
        </div>
        </>
    );
}