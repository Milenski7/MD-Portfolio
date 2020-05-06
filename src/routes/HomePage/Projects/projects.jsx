import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import './projects.css';

const Projects = () => {
    return (
        <div id="projects" className="cards-container">
            <h1 className="projects-header">My Current Portfolio</h1>
            <ScrollAnimation offset={80} animateIn="zoomIn" className="cards">
                <div className="flip-cards">
                    <div className="flip-card">
                        <a target="_blank" href="https://md-photography.herokuapp.com/" className="card-h1">Milen Donchev Photography</a>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={require('./card1.jpg')} alt="coffee-and-code-blog" className="card-img" />
                            </div>
                            <div className="flip-card-back">
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Register, Login</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Custom messages</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Pagination</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Styles - plain CSS</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Category Sorting</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Modals</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Likes and comments</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Comment delete</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon2" />Responsive Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <a target="_blank" href="https://coffee-and-code-m.herokuapp.com/" className="card-h1">Coffee and Code Blog</a>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={require('./card2.jpg')} alt="coffee-and-code-blog" className="card-img" />
                            </div>
                            <div className="flip-card-back">
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Register, Login</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Custom messages</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Exclusive admin actions</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />DB generated posts</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Pagination</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Post likes</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Admin photo upload</p>
                                <p className="card-li">
                                    <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />Responsive Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default Projects;