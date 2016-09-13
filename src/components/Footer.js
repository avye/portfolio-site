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
          <div className="col-xs-2 col-sm-2 col-md-2 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            <p>Copyright 2016</p>
          </div>
          {/*<div className="col-xs-2 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-3 col-md-offset-3">
            <LinkContainer to={{ pathname: 'contact' }}>
              <Button className="center-block">Contact</Button>
            </LinkContainer>
          </div>*/}
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
//
// <a href="https://www.linkedin.com/in/andrewvye">LinkedIn</a>
// <a href="https://github.com/avye">GitHub</a>
