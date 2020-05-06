import React, { useContext } from 'react';
import { MyContext } from '../../api/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Drawer from './drawer';
import './navbar.css';

const Navbar = () => {
    const context = useContext(MyContext);
    return (
        <React.Fragment>
            <div className="navbar">
                <div style={{ backgroundColor: `${context.navColor}` }} className="nav">
                    <Link smooth={true} activeClass="link" to="jumbotron"><h1 className="nav-logo">MD</h1></Link>
                    <ul className="nav-list">
                        <Link offset={-80} smooth={true} activeClass="link" to="about"><li className="nav-link">About</li></Link>
                        <Link offset={-80} smooth={true} className="nav-link" to="projects">Work</Link>
                        <Link smooth={true} offset={-80} className="nav-link" to="contact">Contact</Link>
                        <FontAwesomeIcon icon={faBars} className="bars" />
                    </ul>
                </div>
            </div >
            <Drawer />
        </React.Fragment>
    );
};

export default Navbar;