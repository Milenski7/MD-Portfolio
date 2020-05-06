import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './about.css';

const About = () => {
    return (
        <div id="about" className="about-container">
            <ScrollAnimation duration={1} className="about" animateIn="slideInLeft">
                <img src={require('./me.JPG')} alt="milen-donchev" className="about-img" />
                <div className="about-text-container">
                    <h1 className="about-header">Who is this guy?</h1>
                    <p className="about-p">I am a young passionate man, who taught himself how to code at the age of 23.
                    That's right! I am a self-taught web developer. I found the passion for programming arguably late into my life,
                    but better late than never, right? I put high emphasis on creating dynamic and modern
                    web apps, with clean user-friendly interfaces and fast loading speed. I am a very passionate, full of
                     energy, hardworking guy and if I'm passionate about something, you better believe I'm going to get it done.</p>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default About;