'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 center-text">
            <h1 className="text-center"><b><big><big>Page not found.</big></big></b></h1>
            <hr className="verticalLine"></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-6 col-xs-offset-0 col-sm-offset-1 col-md-offset-3 center-text">
            <Link style={{'text-decoration': 'none'}} to='/'>
              <button className="btn btn-default btn-lg center-block">GO HOME</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
