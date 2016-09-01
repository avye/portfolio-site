'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <p>AV</p>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title={
            <span><img src="/img/Menu-25.png"></img></span>
           } id="basic-nav-dropdown" noCaret>
            <LinkContainer to={{ pathname: '/', query: { work: 'work' } }}>
              <MenuItem eventKey={1.1}>Work</MenuItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: 'blog' }}>
              <MenuItem eventKey={1.2}>Blog</MenuItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: 'about' }}>
              <MenuItem eventKey={1.3}>About</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <LinkContainer to={{ pathname: 'contact' }}>
              <MenuItem eventKey={1.3} onClick={() => this.onWorkButtonClick()}>Contact</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
