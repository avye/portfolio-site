'use strict';

import React from 'react';

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
            <h1 className="text-center"><big><strong>Welcome!</strong></big></h1>
            <h4 className="text-center">As a full-stack software engineer, I strive to delight my customers with wonderful websites and mobile applications that are intuitive and a joy to use.</h4>
            <button className="btn btn-default center-block" onClick={() => this.onWorkButtonClick()}>CHECK OUT WORK</button>
            <hr className="verticalLine"></hr>
          </div>
        </div>

      </div>
    );
  }
}
