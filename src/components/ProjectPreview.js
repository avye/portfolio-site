'use strict';

import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class ProjectPreview extends React.Component {
  render() {
    return (
        <div className="container center-text center-block">
          <div className="row center-block center-text">
            <div className="col-xs-6 col-md-6 center-block center-text">
              <h1 className="center-text">{this.props.name}</h1>
              <h4 className="center-text">{this.props.subtitle}</h4>
            </div>
          </div>
          <div className="row center-block">
            <div className="col-xs-10 col-md-10 center-block">
              <img className="img-responsive img-rounded center-block" src={`img/${this.props.image}`}/>
            </div>
          </div>
          <div className="row center-block">
            <div className="col-xs-6 col-md-6">
              <p className="center-text">{this.props.description}</p>
              {/*<LinkContainer to={`/project/${this.props.id}`}>*/}
                <Button className="center-block">View More</Button>
              {/*</LinkContainer>*/}
            </div>
          </div>
        </div>
    );
  }
}
