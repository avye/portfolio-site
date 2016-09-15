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
            <h1>I can build whatever you want.</h1>
            <h4>I have hiked the Pacific Crest Trail, I have traveled throughout the world, and I have found what I love doing.  I hope to share that with you.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            <VictoryChart>
              <VictoryAxis
                tickValues={[
                  "React",
                  "Redux",
                  "Angular",
                  "React Native",
                  "Node",
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "Socket.IO",
                  "Webpack/Grunt",
                  "UI/UX",
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
                  {x: 1, y: 4},
                  {x: 2, y: 3},
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
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <p>Always staying current with industry trends, I have worked with many of the popular front-end MVC frameworks such as React and Angular to create highly functional applications. Additionally I have developed both RESTful applications as well as ones that utilize Websockets. Whether it is utilizing popular APIs such as Yelp to create an immersive experience, or just wanting a well designed site, I can handle it.</p>

          </div>
        </div>

          {/*<div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Front-End Development</strong></h4>
            <VictoryPie
              data={skillsData.frontend}
            />
            <p>Always staying current with industry trends, I have worked with many of the popular front-end MVC frameworks such as React and Angular to create highly functional applications. Additionally I have developed both RESTful applications as well as ones that utilize Websockets. Whether it is utilizing popular APIs such as Yelp to create an immersive experience, or just wanting a well designed site, I can handle it.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Full Stack Development</strong></h4>
            <VictoryPie
              data={skillsData.backend}
            />
            <p>Combining back-end tools such as Node.js/Express and databases such as MongoDB/SQL along with front-end frameworks such as React or Angular I can create a full-stack web application. Whether it is a responsive Single Page App or even an iOS/Android mobile application, you can know that I will do everything to ensure your vision is wonderfully created.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center center-block">
            <h4><strong>Best Practices</strong></h4>
            <VictoryPie
              data={skillsData.general}
            />
            <p>Every application is different and I take the time to fully understand your needs. From there, I can utilize industry best practices such as Test Driven Development and Continuous Integration to ensure that you have a robust product that leaves your users satisfied.</p>
          </div>*/}
      </div>
    );
  }
}
