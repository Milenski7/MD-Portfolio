import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact">
                <h1 className="contact-header">
                    <span className="contact-header-span">C</span>
                    <span className="contact-header-span">O</span>
                    <span className="contact-header-span">N</span>
                    <span className="contact-header-span">T</span>
                    <span className="contact-header-span">A</span>
                    <span className="contact-header-span">C</span>
                    <span className="contact-header-span">T</span>
                    &nbsp;
                    <span className="contact-header-span">ME</span>
                </h1>
                <div className="contact-data">
                    <ul className="contact-ul">
                        <li className="contact-li">email: mujleh1@gmail.com</li>
                        <li className="contact-li">facebook: Milen Donchev</li>
                        <li className="contact-li">instagram: milenskiissochill</li>
                        <li className="contact-li">
                            <FontAwesomeIcon style={{ color: `limegreen` }} icon={faMapMarkerAlt} className="map-icon" /> Varna, Bulgaria, 9000
                    </li>
                    </ul>
                    <img src={require('./contact.svg')} className="contact-svg" />
                </div>
            </div>
        </div>
    );
};

export default Contact;