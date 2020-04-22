import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// const Title = styled.div`
//   background: url('http://img.talkandroid.com/uploads/2013/03/htc-sense-5-wallpaper-3.jpgz')
//     repeat;
//   background-size: 100% auto;
//   position: fixed;
//   width: 100%;
//   height: 300%;
//   top: 0;
//   left: 0;
//   z-index: -1;
// `;

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Title className="heading-background">CREATIVE</Title> */}
        <header>
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <p className="header-title">
            <Typewriter
              options={{
                strings: data.headerTagline,
                autoStart: true,
                loop: true,
                skipAddStyles: true
              }}
            />
            <button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;
