import './About.css'
import React from 'react';
import profile from './pic.jpg'
import NavBar from './NavBar';

export default function About() {
    return (
        <>
        <NavBar/>
        <div className="row">
            <div className="profile-section">
                <img id="profile" src={profile} alt="profile"></img>
            </div>
            <div className="info-section">
                <p>I am a recent Waterloo university graduate with a keen interest in fintech, social innovation, and education. Some hobbies are reading, live music, game design, hiking, photography, and learning new languages.
    </p>
            </div>
        </div>
        </>
    );
}