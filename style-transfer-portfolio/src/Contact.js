import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Contact.css'

function Contact() {
  return (
    <div class="contactSection">
      <a href="mailto:raymond31670@hotmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a href="https://github.com/RaymondDashWu"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/raymonddashwu/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    
    // "TODO Contact page explaining how to get in contact with me"
  );
}

export default Contact;
