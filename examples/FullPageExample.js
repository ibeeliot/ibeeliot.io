import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FullPage, Slide, withControls } from '../src';
import './FullPageExample.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Expanded from '../src/components/Collapse';
import { UnmountClosed } from 'react-collapse';
import Collapse from '../src/components/Collapse';
import Bio from '../src/components/Bio';
import SocialMediaCards from '../src/components/socialMedia';

const Controls = withControls(controls => {
  const {
    scrollToSlide,
    scrollNext,
    scrollPrev,
    getSlidesCount,
    getCurrentIndex
  } = controls;
  const totalSlides = getSlidesCount();
  const activeSlide = getCurrentIndex();
  const dots = [];

  const navigationString = ['Home', 'Works', 'About', 'Reach'];
  const navigationBar = [];

  for (let i = 0; i < totalSlides; i++) {
    dots.push(
      <button
        className="headerButtons"
        key={i}
        disabled={activeSlide === i}
        onClick={() => scrollToSlide(i)}
      >
        {/* {i + 1} */}
        {navigationString[i]}
      </button>
    );
  }

  for (let i = 0; i < 3; i++) {
    navigationBar.push(<div>{navigationString[i]}</div>);
  }

  return (
    <div className="headerNavigation" style={{ position: 'fixed' }}>
      <button
        className="headerSlideButtons"
        disabled={activeSlide === 0}
        onClick={scrollPrev}
      >
        ←
      </button>
      {dots}
      <button
        className="headerSlideButtons"
        disabled={activeSlide === totalSlides - 1}
        onClick={scrollNext}
      >
        →
      </button>
    </div>
  );
});

const FullPageExample = () => {
  const [expanded, setExpanded] = useState(false);
  const changeExpanded = () => {
    setExpanded(!expanded);
  };
  console.log('EXPANDDDDD', expanded);
  return (
    <div>
      {/* <div
          style={{ height: '70px', position: 'fixed', top: 0, left: 0 }}
        ></div> */}
      <FullPage offset={60} className={'my-container'} snap={true}>
        <Controls />
        <Slide
          height={`100%`}
          style={{
            background: '#4D6174',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="homePage">
            <img
              className="profile-pic"
              src="https://i.postimg.cc/9F0jg1qx/blk-whte-profile-colored.png"
            ></img>
            <h1>Eliot Nguyen</h1>
            <h1>Front End Developer</h1>
          </div>

          {/* test below. can delete */}
        </Slide>
        <h1 className="gaps"></h1>
        <Slide
          className="work-slide"
          style={{
            background: '#4D6174',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* <h1>2</h1> */}
          {/* library for react carousel */}
          <h1 className="projects-title">Projects</h1>
          <Carousel autoPlay>
            <div className="work-container">
              <img
                className="work-image"
                alt=""
                src="https://i.postimg.cc/Zqt8D70p/reac-Type-application-tree.jpg"
              />
              <div className="legend">
                <a href="https://github.com/open-source-labs/ReacType">
                  ReacType
                </a>
                <p>A dev tool for quickly creating React components</p>
              </div>
            </div>
            <div className="work-container">
              <img
                className="work-image"
                alt=""
                src="https://i.postimg.cc/4ymH3VmX/fireside-wallpaper.jpg"
              />
              <div className="legend">
                <a href="https://github.com/Fireside-App/Fireside">Fireside</a>
                <p>Plan your camping app better with a dashboard</p>
              </div>
            </div>
            <div className="work-container">
              <img
                className="work-image"
                alt=""
                border="0"
                src="https://i.postimg.cc/SKSLcZsr/jackboxtv.jpg"
              />
              <div className="legend">
                <a href="https://github.com/findgaming/find">Find</a>
                <p>Find Jackbox games with your friends or strangers</p>
              </div>
            </div>
            <div className="work-container">
              <img
                className="work-image"
                alt=""
                src="https://i.postimg.cc/W34nc9c3/Travel-Sticky.jpg"
              />
              <div className="legend">
                <a href="https://github.com/ibeeliot/TravelSticky">
                  Travel Sticky
                </a>
                <p>Write notes of your travels for other travelers</p>
              </div>
            </div>
          </Carousel>
        </Slide>
        <h1 className="gaps"></h1>
        <Slide
          style={{
            background: '#4D6174',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="aboutPage">
            <Collapse
              setExpanded={changeExpanded}
              expanded={expanded}
            ></Collapse>{' '}
            {expanded ? (
              <Bio setExpanded={changeExpanded} expanded={expanded} />
            ) : (
              <div>
                <div>
                  <img
                    className="about-pic"
                    src="https://i.postimg.cc/yNBQtYbV/about-blk-wht.png"
                  ></img>
                  <h1>
                    {/* <Typewriter
                  options={{
                    strings: ["hi, i'm eliot nguyen", 'a software engineer'],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true
                  }}
                /> */}
                    About Me
                  </h1>
                  <h1>Story & Skills</h1>
                </div>
              </div>
            )}
          </div>
        </Slide>
        <h1 className="gaps"></h1>
        <Slide
          height={`100%`}
          style={{
            background: '#4D6174',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="contactPage">
            <h1>Reach me</h1>
            <SocialMediaCards />
          </div>

          {/* test below. can delete */}
        </Slide>
      </FullPage>
    </div>
  );
};

module.exports = FullPageExample;
