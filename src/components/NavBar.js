'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { applyContainerQuery } from 'react-container-query';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    };
  }

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
          <Navbar.Toggle>
            <img src="/img/Menu.svg"></img>
          </Navbar.Toggle>
        </Navbar.Header>
    {this.props.containerQuery.widthLargerThan1195 ?
      <Nav pullRight>
        <NavDropdown eventKey={1} title={
          <span><img src="/img/Menu.svg"></img></span>
         } id="basic-nav-dropdown" noCaret>
          <LinkContainer to={{ pathname: '/', query: { work: 'work' } }}>
            <MenuItem eventKey={1.1} onClick={() => this.onWorkButtonClick()}>Work</MenuItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: 'about' }}>
            <MenuItem eventKey={1.3}>About</MenuItem>
          </LinkContainer>
          <MenuItem divider />
          <LinkContainer to={{ pathname: 'contact' }}>
            <MenuItem eventKey={1.3} ><p className=""><b>CONTACT</b></p></MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    :
    // {/*For phones/tablets*/}
      <Navbar.Collapse className="pull-right">
        <Nav pullRight>
        <LinkContainer to={{ pathname: '/', query: { work: 'work' } }}>
          <NavItem eventKey={1.1} onClick={ () => this.onWorkButtonClick() }>Work</NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: 'about' }}>
          <NavItem eventKey={1.3}>About</NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: 'contact' }}>
          <NavItem eventKey={1.3}><p className=""><b>CONTACT</b></p></NavItem>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    }
  </Navbar>
    );
  }
}

const query = {
  'widthLargerThan1195': {
    minWidth: 1195,
  }
};

const NavBarComponent = applyContainerQuery(NavBar, query);
export default NavBarComponent;
