import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './work.css';

const Work = () => {
    return (
        <div className="work-container">
            <div className="work">
                <div className="work-left">
                    <h1 className="work-left-header">Additional tools in my tool belt:</h1>
                    <ul className="work-left-list">
                        <div className="work-left-list-items">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">HTML, CSS, Javascript, Sass</li>
                        </div>
                        <div className="work-left-list-items2">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">Responsive Design</li>
                        </div>
                        <div className="work-left-list-items">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">Bootstrap4, Styled Components</li>
                        </div>
                        <div className="work-left-list-items2">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">Version Control System - Git</li>
                        </div>
                        <div className="work-left-list-items">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">RESTfull APIs with ExpressJS</li>
                        </div>
                        <div className="work-left-list-items2">
                            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
                            <li className="work-left-list-item">ContextAPI, Redux, React Router</li>
                        </div>
                    </ul>
                </div>
                <img src={require('./work.png')} alt="laptop" className="laptop" />
            </div>
        </div >
    );
};

export default Work;