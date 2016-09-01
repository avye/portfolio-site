'use strict';

import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class ProjectPreview extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 center-text">
              <h1 className="">{this.props.name}</h1>
              <h4 className="">{this.props.subtitle}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-md-4 col-md-offset-1 col-xs-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image}`}/>
            </div>
            <div className="col-xs-10 col-md-4 col-md-offset-2 col-xs-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image}`}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 center-text">
              <p className="">{this.props.description}</p>
              {/*<LinkContainer to={`/project/${this.props.id}`}>*/}
                <Button className="">View More</Button>
              {/*</LinkContainer>*/}
            </div>
          </div>
        </div>
    );
  }
}
