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
            <h2>I can build whatever you want.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
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
          <div className="col-xs-12 col-sm-12 col-md-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 text-center">
            <h4><strong>Best Practices</strong></h4>
            <VictoryPie
              data={skillsData.general}
            />
            <p>Every application is different and I take the time to fully understand your needs. From there, I can utilize industry best practices such as Test Driven Development and Continuous Integration to ensure that you have a robust product that leaves your users satisfied.</p>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">

          </div>
        </div>
      </div>
    );
  }
}
