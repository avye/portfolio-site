'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <div>{this.props.children}</div>
        <footer className="footerContainer">
          <Footer />
        </footer>
      </div>
    );
  }
}
