import React, { useContext } from 'react';
import { MyContext } from '../../api/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import './drawer.css';

const Drawer = () => {
    const context = useContext(MyContext);
    return (
        <div style={{ transform: `translateY(${context.y}%)` }} className="drawer-container">
            <Link smooth={true} className="nav-link2 projects" to="projects">Work</Link>
            <div className="arrow-div">
                <Link smooth={true} className="nav-link3" to="about">About</Link>
                <FontAwesomeIcon
                    onClick={context.actions.toggleMenu}
                    className="arrow2"
                    icon={context.menuArrow} />
            </div>
            <Link smooth={true} className="nav-link2" to="contact">Contact</Link>
        </div>
    );
};

export default Drawer;