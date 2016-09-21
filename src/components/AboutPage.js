'use strict';

import React from 'react';
import { Link } from 'react-router';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import { applyContainerQuery } from 'react-container-query';

class AboutPage extends React.Component {
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
            <h4>I have hiked the entire Pacific Crest Trail, I have traveled throughout the world, and I have found what I love doing.  I hope to share that with you.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            {this.props.containerQuery.widthLargerThan1000 ?
              <VictoryChart
                height={200}
                padding={{
                  top: 20,
                  bottom: 20,
                  left: 70,
                  right: 30
                }}
              >
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
                    axis: {stroke: "transparent"},
                    tickLabels: {
                      fontSize: 7
                    }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: {stroke: "transparent"},
                    ticks: {stroke: "transparent"},
                    tickLabels: {
                      fontSize: 7
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
                      "rgb(225,206,148)" : data.y === 3 ?
                      "rgb(202,185,133)" : data.y === 2 ?
                      "rgb(180,164,118)" : "rgb(157,144,103)"
                    }
                  }}
                  />
              </VictoryChart>

            :

            <div>
            <VictoryChart
              height={250}
              padding={{
                top: 20,
                bottom: 30,
                left: 75,
                right: 40
              }}
            >
              <VictoryAxis
                tickValues={[
                  "Redux",
                  "React",
                  "Angular",
                  "React Native",
                  "Node"
                ]}
                style={{
                  axis: {stroke: "transparent"},
                  tickLabels: {
                    fontSize: 12
                  }
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: {stroke: "transparent"},
                  ticks: {stroke: "transparent"},
                  tickLabels: {
                    fontSize: 12
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
                  {x: 5, y: 4}
                ]}
                style={{
                  data: {
                  fill: (data) => data.y === 4 ?
                    "rgb(225,206,148)" : data.y === 3 ?
                    "rgb(202,185,133)" : data.y === 2 ?
                    "rgb(180,164,118)" : "rgb(157,144,103)"
                  }
                }}
                />
            </VictoryChart>

            <VictoryChart
              height={250}
              padding={{
                top: 20,
                bottom: 30,
                left: 75,
                right: 40
              }}
            >
              <VictoryAxis
                tickValues={[
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "Socket.IO",
                  "UI/UX",
                  "Webpack/Grunt"
                ]}
                style={{
                  axis: {stroke: "transparent"},
                  tickLabels: {
                    fontSize: 12
                  }
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: {stroke: "transparent"},
                  ticks: {stroke: "transparent"},
                  tickLabels: {
                    fontSize: 12
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
                  {x: 1, y: 2},
                  {x: 2, y: 3},
                  {x: 3, y: 2},
                  {x: 4, y: 2},
                  {x: 5, y: 3},
                  {x: 6, y: 2}
                ]}
                style={{
                  data: {
                  fill: (data) => data.y === 4 ?
                    "rgb(225,206,148)" : data.y === 3 ?
                    "rgb(202,185,133)" : data.y === 2 ?
                    "rgb(180,164,118)" : "rgb(157,144,103)"
                  }
                }}
                />
            </VictoryChart>
            </div>
            }
          </div>
        </div>
        <div className="row aboutPageSpacing">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2 text-center">
            <h4>I have worked with many popular front-end JavaScript frameworks such as React and Angular to create highly functional applications. Combining back-end tools such as Node/Express and databases such as MongoDB/PostgreSQL I am comfortable across the full-stack. Whether it is a responsive Single Page App or even an iOS/Android mobile application, you can trust that I will do everything to ensure your vision is wonderfully created.</h4>
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
            <Link style={{'text-decoration': 'none'}} to='contact'>
              <button className="btn btn-default btn-lg center-block hvr-pop">CONTACT ME</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const query = {
  'widthLargerThan1000': {
    minWidth: 1000,
  }
};

const AboutPageComponent = applyContainerQuery(AboutPage, query);
export default AboutPageComponent;
