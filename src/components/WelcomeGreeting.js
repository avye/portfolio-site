'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class WelcomeGreeting extends React.Component {
  onWorkButtonClick() {
    scroller.scrollTo('ScrollToPortfolio', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -40
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-md-4 col-md-offset-4 col-xs-offset-4 center-text">
            <img src="/img/me.jpg" className="img-responsive img-circle center-block"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 center-text">
            <h2 className="lead text-center">Welcome!</h2>
            <p className="text-center">I'm a full stack software engineer.</p>
            <p className="text-center">I enjoy playing in both mobile and web environments</p>
            <Button className="center-block" onClick={() => this.onWorkButtonClick()}>Check out Work</Button>
          </div>
        </div>

      </div>
    );
  }
}
