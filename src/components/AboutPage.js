'use strict';

import React from 'react';
import { Link } from 'react-router';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

export default class AboutPage extends React.Component {
  render() {
    const axisValues = [
      'JavaScript',
      'React'
    ]
    return (
      <div className="container aboutPageContainer">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2 text-center">
            <h1 className="text-center"><big><b>Hello.</b></big></h1>
            <h4>I have hiked the Pacific Crest Trail, I have traveled throughout the world, and I have found what I love doing.  I hope to share that with you.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            <VictoryChart height={250}>
              <VictoryAxis
                tickValues={[
                  "Redux",
                  "React",
                  "Angular",
                  "React Native",
                  "Node",
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "Socket.IO",
                  "UI/UX",
                  "Webpack/Grunt",
                ]}
                style={{
                  tickLabels: {
                    fontSize: 6
                  }
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: {stroke: "transparent"},
                  ticks: {stroke: "transparent"},
                  tickLabels: {
                    fontSize: 6
                  }
                }}
                tickValues={[
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                  "Expert"
                ]}
              />
              <VictoryBar
                data={[
                  {x: 1, y: 3},
                  {x: 2, y: 4},
                  {x: 3, y: 3},
                  {x: 4, y: 3},
                  {x: 5, y: 4},
                  {x: 6, y: 2},
                  {x: 7, y: 3},
                  {x: 8, y: 2},
                  {x: 9, y: 2},
                  {x: 10, y: 3},
                  {x: 11, y: 2}
                ]}
                style={{
                  data: {
                  fill: (data) => data.y === 4 ?
                    "rgb(36,204,173)" : data.y === 3 ?
                    "rgb(28,163,138)" : data.y === 2 ?
                    "rgb(21,122,103)" : "rgb(14,81,69)"
                  }
                }}
                />
            </VictoryChart>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2 text-center">
            <h4>I have worked with many of the popular front-end MVC frameworks such as React and Angular to create highly functional applications. Combining back-end tools such as Node.js/Express and databases such as MongoDB/SQL I can create a full-stack web application. Whether it is a responsive Single Page App or even an iOS/Android mobile application, you can know that I will do everything to ensure your vision is wonderfully created.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 center-text">
            <hr className="verticalLine"></hr>
            <h1 className="text-center"><b><big><big><big><big>Let's talk.</big></big></big></big></b></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-6 col-xs-offset-0 col-sm-offset-1 col-md-offset-3 center-text">
            <Link to='contact'>
              <button className="btn btn-default btn-lg center-block">CONTACT ME</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
