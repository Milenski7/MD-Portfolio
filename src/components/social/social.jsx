import React, { useContext } from 'react';
import { MyContext } from '../../api/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './social.css';

const Social = () => {
    const context = useContext(MyContext);
    return (
        <div style={{ transform: `translateX(${context.x}%)` }} className="social-container">
            <a href="https://www.facebook.com/milen.donchev.33" target="_blank"><FontAwesomeIcon className="facebook" icon={faFacebook} /></a>
            <div className="social-arrow">
                <a href="https://www.instagram.com/milenskiissochill/" target="_blank"><FontAwesomeIcon className="instagram" icon={faInstagram} /></a>
                <FontAwesomeIcon onClick={context.actions.toggleSocial} className="arrow" icon={context.arrow} />
            </div>
            <a href="https://www.linkedin.com/in/milen-donchev-124203199/" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>
        </div>
    );
};

export default Social;
