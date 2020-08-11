import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import './NavBar.css'
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <ul className="external-links">
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
            <ul className="internal-links">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/education">Education & Certifications</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <a href={require("./resume.pdf")} download="Resume">Resume</a>
                </li>
            </ul>
        </nav> 

    );
}