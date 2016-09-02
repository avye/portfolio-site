'use strict';

import React from 'react';
import { Link } from 'react-router';
import { VictoryBar } from 'victory';
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
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
            <h2>Andrew Vye</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
            <VictoryBar
              horizontal={true}
              data={skillsData}
            />
          </div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">

          </div>
        </div>
      </div>
    );
  }
}
