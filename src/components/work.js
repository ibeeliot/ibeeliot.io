import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import '../work.css';

class Work extends Component {
  constructor({ props }) {
    super();
    let state = {};
  }
  render() {
    return (
      <div>
        <h1 className="heading">
          <Fade bottom cascade>
            Work
          </Fade>
        </h1>
        <div className="work-content">
          {data.projects.map(project => (
            <Project
              key={project.id}
              className="work-modal"
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
