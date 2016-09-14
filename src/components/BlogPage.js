'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div className="container blogPageContainer">
        <h2>Blog coming soon!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
