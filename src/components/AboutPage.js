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
            <h2>Andrew Vye</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4>Front-End</h4>
            <VictoryPie
              padAngle={5}
              data={skillsData.frontend}
            />
            <p>TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4>Front-End</h4>
            <VictoryPie
              padAngle={5}
              data={skillsData.frontend}
            />
            <p>TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT TONS OF TEXT </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4>Front-End</h4>
            <VictoryPie
              padAngle={5}
              data={skillsData.frontend}
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
