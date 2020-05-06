import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './stack.css';

const Stack = () => {
    return (
        <div className="stack-container">
            <img src={require('./illustration.svg')} className="illustration2" />
            <div className="stack">
                <ScrollAnimation duration={2} animateIn="fadeIn">
                    <h1 className="stack-header">I specialize in the MERN stack</h1>
                    <div className="stack-images">
                        <div className="stack-images1">
                            <img id="mongo" src={require('./mongo.png')} alt="mongo" className="stack-img" />
                            <h1 className="stack-name">MongoDB</h1>
                        </div>
                        <div className="stack-images1">
                            <img src={require('./express2.png')} alt="express" className="stack-img" />
                            <h1 className="stack-name">ExpressJS</h1>
                        </div>
                        <div className="stack-images1">
                            <img id="react" src={require('./react.png')} alt="react" className="stack-img" />
                            <h1 className="stack-name">ReactJS</h1>
                        </div>
                        <div className="stack-images1">
                            <img src={require('./nodejs.png')} alt="nodejs" className="stack-img" />
                            <h1 className="stack-name">NodeJS</h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <img src={require('./illustration.svg')} className="illustration" />
        </div>
    );
};

export default Stack;