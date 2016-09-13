'use strict';

import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class ProjectPreview extends React.Component {
  render() {
    return (
        <div className="container projectPreviewCard">
          <div className="row projectPreviewHeader">
            <div className="col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3 center-text">
              <h1 className="text-center">{this.props.name}</h1>
              <h4 className="text-center">{this.props.subtitle}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image2}`}/>
            </div>
            {/*<div className="col-xs-12 col-sm-10 col-md-4 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image1}`}/>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-4 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image2}`}/>
            </div>*/}
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-6 col-xs-offset-0 col-sm-offset-1 col-md-offset-3 center-text">
              <p className="text-center">{this.props.description}</p>
                <a href={`${this.props.link}`}>
                  <Button className="center-block">{this.props.button}</Button>
                </a>
            </div>
          </div>
        </div>
    );
  }
}
