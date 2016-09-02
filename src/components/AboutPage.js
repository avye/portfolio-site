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
            <h4>Front-End Development</h4>
            <VictoryPie
              data={skillsData.frontend}
            />
            <p></p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4>Full Stack Development</h4>
            <VictoryPie
              data={skillsData.backend}
            />
            <p>TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4>Best Practices</h4>
            <VictoryPie
              data={skillsData.general}
            />
            <p>TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT </p>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">

          </div>
        </div>
      </div>
    );
  }
}
