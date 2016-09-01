'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Page not about me!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
