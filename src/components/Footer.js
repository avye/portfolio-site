'use strict';

import React from 'react';
import { Link } from 'react-router';


export default class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-2 col-xs-offset-0 col-sm-offset-0 col-md-offset-0">
            <p>Copyright {new Date().getFullYear()} &copy;</p>
          </div>
          <div className="col-xs-2 col-sm-1 col-md-1 col-xs-offset-0 col-sm-offset-4 col-md-offset-6">
            <a href="https://www.linkedin.com/in/andrewvye" target="LinkedIn">
              <img src="/img/LinkedIn.svg" className="img-responsive center-block" />
            </a>
          </div>
          <div className="col-xs-2 col-sm-1 col-md-1">
            <a href="https://github.com/avye" target="GitHub">
              <img src="/img/GitHub.svg" className="img-responsive center-block" />
            </a>
          </div>
          <div className="col-xs-2 col-sm-1 col-md-1">
            <Link to="contact">
              <img src="/img/SpeechBubble.svg" className="img-responsive center-block" />
            </Link>
          </div>
          <div className="col-xs-2 col-sm-1 col-md-1">
            <a href="https://medium.com/@a.vye" target="Medium">
              <img src="/img/MediumLogo.svg" className="img-responsive center-block" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
