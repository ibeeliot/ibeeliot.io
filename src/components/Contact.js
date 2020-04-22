import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import '../contact.css';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="heading">
          <Fade bottom cascade>
            Contact
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <div className="social-media">
              <a href={`mailto:${data.contactEmail}`} className="contact">
                <span>email</span>
              </a>
              <a href={data.github} className="contact">
                <span>github</span>
              </a>
              <a href={data.linkedIn} className="contact">
                <span>linkedin</span>
              </a>
            </div>
            <h1>
              <br></br>
            </h1>

            {/* <ul>
              {data.social.map((link, index) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        </Fade>

        {/* <span className="footer">
          <a href="http://www.github.com/ibeeliot">ibeeliot</a>
        </span> */}
      </div>
    );
  }
}

export default Contact;
