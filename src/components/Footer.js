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
      <Navbar staticBottom>
        <Navbar.Header>
          <Navbar.Brand>
            <p>Copyright 2016 Andrew Vye</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{ pathname: 'contact' }}>
            <NavItem eventKey={3}><Button>Contact</Button></NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://www.linkedin.com/in/andrewvye"><img src="/img/LinkedIn-25.png"></img></NavItem>
          <NavItem eventKey={2} href="https://github.com/avye"><img src="/img/GitHub-25.png"></img></NavItem>
        </Nav>
      </Navbar>
    );
  }
}
//
// <a href="https://www.linkedin.com/in/andrewvye">LinkedIn</a>
// <a href="https://github.com/avye">GitHub</a>
