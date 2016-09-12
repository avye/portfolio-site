'use strict';

import React from 'react';
import { Link } from 'react-router';
import { VictoryPie } from 'victory';
import skillsData from '../data/skillsData';

export default class AboutPage extends React.Component {
  render() {
    const axisValues = [
      'JavaScript',
      'React'
    ]
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2 text-center">
            <h2>About Me</h2>
            <h4>I can build whatever you want.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Front-End Development</strong></h4>
            <VictoryPie
              data={skillsData.frontend}
            />
            <p></p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Full Stack Development</strong></h4>
            <VictoryPie
              data={skillsData.backend}
            />
            <p>TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Best Practices</strong></h4>
            <VictoryPie
              data={skillsData.general}
            />
            <p>Every application is different and I take the time to fully understand your needs. From there, I can utilize industry best practices such as Test Driven Development and Continuous Integration to ensure that you have a robust product that leaves your users satisfied. Whether it is a responsive Single Page App or even a mobile application, you can know that I will do ensure your vision is wonderfully created.</p>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">

          </div>
        </div>
      </div>
    );
  }
}
