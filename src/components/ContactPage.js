'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Page not about contacting me!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
