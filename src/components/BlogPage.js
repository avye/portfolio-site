'use strict';

import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Blog integration coming soon!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
        <footer>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}
