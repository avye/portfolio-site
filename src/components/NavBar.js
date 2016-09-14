'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MediaQuery from 'react-responsive';

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
          <h4>AV</h4>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <MediaQuery query='(min-device-width: 1224px)'>
    <Nav pullRight>
      <NavDropdown eventKey={1} title={
        <span><img src="/img/Menu-25.png"></img></span>
       } id="basic-nav-dropdown" noCaret>
        <LinkContainer to={{ pathname: '/', query: { work: 'work' } }}>
          <MenuItem eventKey={1.1} onClick={() => this.onWorkButtonClick()}>Work</MenuItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: 'blog' }}>
          <MenuItem eventKey={1.2}>Blog</MenuItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: 'about' }}>
          <MenuItem eventKey={1.3}>About</MenuItem>
        </LinkContainer>
        <MenuItem divider />
        <LinkContainer to={{ pathname: 'contact' }}>
          <MenuItem eventKey={1.3} >Contact</MenuItem>
        </LinkContainer>
      </NavDropdown>
      </Nav>
    </MediaQuery>
    {/*For phones/tablets*/}
    <MediaQuery query='(max-device-width: 1224px)'>
    <Navbar.Collapse>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: { work: 'work' } }}>
        <NavItem eventKey={1.1} onClick={() => this.onWorkButtonClick()}>Work</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: 'blog' }}>
        <NavItem eventKey={1.2}>Blog</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: 'about' }}>
        <NavItem eventKey={1.3}>About</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: 'contact' }}>
        <NavItem eventKey={1.3} >Contact</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </MediaQuery>
  </Navbar>
    );
  }
}
