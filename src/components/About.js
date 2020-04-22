import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              About
            </Fade>
          </h1>
          <Fade bottom>
            <p>{data.abouttext}</p>
          </Fade>
          <Fade bottom>
            <a href="https://reactype.io/#download">reactype.io</a>
          </Fade>
          <Fade bottom>
            <p>{data.abouttextpersonal}</p>
          </Fade>
        </div>
        {data.ShowAboutImage ? (
          <img
            className="profile-pic"
            src={data.aboutImage}
            alt="blk-whte-profile"
          ></img>
        ) : null}
      </div>
    );
  }
}

export default About;
