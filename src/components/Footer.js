'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class NavBar extends React.Component {
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
          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
            {/*<div className="text-center">*/}
              <a href="https://www.linkedin.com/in/andrewvye">
                <img src="/img/LinkedIn-25.png" className="" />
              </a>
              <a href="https://github.com/avye">
                <img src="/img/GitHub-25.png" className="" />
              </a>
              <Link to="contact">
                <img src="/img/Message-25.png" className="" />
              </Link>
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
//
// <a href="https://www.linkedin.com/in/andrewvye">LinkedIn</a>
// <a href="https://github.com/avye">GitHub</a>
