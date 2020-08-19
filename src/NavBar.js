import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import React,{useState} from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink} from 'reactstrap';
import {Link} from "react-router-dom";


export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Nav className="mr-auto icons">
                    <NavItem>
                        <NavLink href="https://github.com/andresgr20"><GitHubIcon/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/andres-garcia-rodriguez-ba02b863"><LinkedInIcon/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:andresgr2094@gmail.com"><EmailIcon/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.instagram.com/andresgr20/"><InstagramIcon/></NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>              
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/education" >Education</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/experience">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={require("./assets/resume.pdf")} download="Resume" className="text-dark">Resume</NavLink>
                        </NavItem>
                    </ul>
                    </Collapse>
                </Nav>
            </Navbar>
        </header>
    );
}