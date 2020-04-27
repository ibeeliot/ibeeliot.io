import React from 'react';

const style = {
  article: {
    display: 'block',
    border: '2px solid #ffffffd9',
    margin: '1rem 2rem',
    zIndex: '30',
    color: 'rgb(40, 55, 78)',
    height: '6rem',
    padding: '1rem 3rem 8rem 3rem',
    width: '80vw',
    borderRadius: '5px',
    fontSize: '2em',
    lineHeight: '2em',
    height: '80vh',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    top: '-19em',
    left: '-62rem',
    transition: 'all 500ms ease-in-out',
    textAlign: 'justify'
  }
};

const Biography = props => {
  const { setExpanded, expanded } = props;
  return (
    <a onClick={setExpanded} style={style.article} className="bio-page">
      <div>
        <h1 style={{ paddingBottom: '1rem', paddingTop: '0.5rem' }}>
          a bit about me
        </h1>
        <p style={{ paddingBottom: '1rem' }}>
          I'm a software engineer specializing in Javascript and its front end
          frameworks. I love building full stack applications delivering great
          user experiences.
        </p>
        <p style={{ paddingBottom: '1rem' }}>
          My most recent work, ReacType aims to ramp up React development time
          with quickly made components. We created a desktop application in
          order to have any user be able to download and get going right away.
          We used Typescript with React Redux, Electron, Node, Express, and some
          testing suites like Jest and Ezyme for a holistic approach to the tech
          stack ecosystem. I care deeply about the end user experience as deeply
          as how efficient the code is that runs that experience.{' '}
        </p>
        <p style={{ paddingBottom: '1rem' }}>
          A recent talk I gave was on website optimization because I wanted to
          share what good, optimized websites look like under the hood from the
          code perspective.`
        </p>
      </div>
      <div></div>
    </a>
  );
};

export default Biography;
