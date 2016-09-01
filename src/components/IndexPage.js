'use strict';

import React from 'react';
import ProjectPreview from './ProjectPreview';
import WelcomeGreeting from './WelcomeGreeting';
import projects from '../data/projects';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class IndexPage extends React.Component {
  componentDidMount() {
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
      <div className="container">
        <div className="container">
          <WelcomeGreeting/>
        </div>
        <Element name="ScrollToPortfolio">
          <div className="container text-center">
            {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
          </div>
        </Element>
        <div className="container text-center">
          <p className="text-center">Interested in making something together?</p>
          <LinkContainer to={{ pathname: 'contact' }}>
            <Button>Contact Me</Button>
          </LinkContainer>
        </div>

      </div>
    );
  }
}
