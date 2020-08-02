import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import './NavBar.css'

export function NavBar(){
    return(
        <nav className="nav_bar">
            <ul className="external_links">
                <li>
                    <a href="https://github.com/andresgr20" alt="Github link"><GitHubIcon/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andres-garcia-rodriguez-ba02b863" alt="LinkedIn link"><LinkedInIcon/></a>
                </li>
                <li>
                    <a href="mailto:andresgr2094@gmail.com" alt="Email"><EmailIcon/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/andresgr20/"><InstagramIcon/></a>
                </li>
            </ul>           
            <ul className="internal_links">
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects & Initiatives</a>
                </li>
                <li>
                    <a href="#professional">Professional Experience</a>
                </li>
                <li>
                    <a href="#volunteer">Volunteer Experience</a>
                </li>
                <li>
                    <a href="resume.pdf">Resume</a>
                </li>
            </ul>
        </nav> 
    );
}