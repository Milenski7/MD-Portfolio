import React from 'react';
import { Link } from 'react-scroll';
import './jumbotron.css';

const Jumbotron = () => {
    return (
        <div id="jumbotron" className="jumbotron-container">
            <div className="jumbotron">
                <div className="hi">
                    <h1 className="nav-logo2">MD</h1>
                    <h1 className="hi1">
                        Hello! I am Milen Donchev, a Full Stack Web Developer based in Varna, Bulgaria.
                </h1>
                    <p className="hi2">
                        Looking for a Javascript developer? You think it, I make it - Simple.
                </p>
                    <Link smooth={true} to="about" className="btn-a">
                        <span className="btn-span"></span>
                        <span className="btn-span"></span>
                        <span className="btn-span"></span>
                        <span className="btn-span"></span>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;