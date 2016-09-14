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
          <div className="col-xs-8 col-sm-6 col-md-4 col-xs-offset-2 col-sm-offset-3 col-md-offset-4  center-text">
            <img src="/img/me.jpg" className="img-responsive img-circle center-block"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-6 col-xs-offset-0 col-sm-offset-1 col-md-offset-3 center-text">
            <h1 className="text-center"><strong>Welcome!</strong></h1>
            <h4 className="text-center">I'm a full stack software engineer.</h4>
            <h4 className="text-center">I enjoy playing in both mobile and web environments.</h4>
            <Button className="center-block" onClick={() => this.onWorkButtonClick()}>CHECK OUT WORK</Button>
            <hr className="verticalLine"></hr>
            {/*<div class="verticalLine"></div>*/}
            {/*<img src="" className="img-responsive center-block"/>*/}
          </div>
        </div>

      </div>
    );
  }
}
