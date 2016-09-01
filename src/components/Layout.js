'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import Button from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <div>{this.props.children}</div>
        <footer>
        <a href="https://www.linkedin.com/in/andrewvye">LinkedIn</a>
        <a href="https://github.com/avye">GitHub</a>

        </footer>
      </div>
    );
  }
}
