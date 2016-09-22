'use strict';

import React from 'react';
import ProjectPreview from './ProjectPreview';
import WelcomeGreeting from './WelcomeGreeting';
import projects from '../data/projects';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class IndexPage extends React.Component {
  componentDidMount() {
    // If the id is work that means they have clicked on the work button
    // So we will automatically scroll them to the work section
    const id = this.props.location.query.work;
    if (id === "work") {
      scroller.scrollTo('ScrollToPortfolio', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -40
      })
    }
  }

  render() {
    return (
      <div className="container welcomeGreetingSpacing">
        <div className="container">
          <WelcomeGreeting/>
        </div>
        <Element name="ScrollToPortfolio">
          <div className="container">
            {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
          </div>
        </Element>
      </div>
    );
  }
}
