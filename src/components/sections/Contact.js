import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section name="contact" id="contact" className="text-center">
      <div className="social_links">
        <div className="social_link">
          <FontAwesomeIcon size="3x" icon={faEnvelope} />
          <img src="../../../" alt="" />
          <p>Gmail</p>
          <a href="mailto:rabbanidvir@gmail.com">rabbanidvir@gmail.com</a>
        </div>
        <div className="social_link">
          <FontAwesomeIcon size="3x" icon={faLinkedinIn} />
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/dvir-rabbani/">linkedin.com/in/dvir-rabbani/</a>
        </div>
        <div className="social_link">
          <FontAwesomeIcon size="3x" icon={faGithub} />
          <p>Github</p>
          <a href="https://github.com/GreenNeptune">github.com/GreenNeptune</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;