'use strict';

import React from 'react';
import { Link } from 'react-router';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class Footer extends React.Component {
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
          <div className="col-xs-2 col-sm-2 col-md-2 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            <p>Copyright {new Date().getFullYear()} &copy;</p>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-xs-offset-7 col-sm-offset-7 col-md-offset-7">
            <a href="https://www.linkedin.com/in/andrewvye">
              <img src="/img/LinkedIn-25.png" className="img-responsive center-block" />
            </a>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1">
            <a href="https://github.com/avye">
              <img src="/img/GitHub-25.png" className="img-responsive center-block" />
            </a>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1">
            <Link to="contact">
              <img src="/img/Message-25.png" className="img-responsive center-block" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
