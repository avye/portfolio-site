'use strict';

import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class ProjectPreview extends React.Component {
  render() {
    return (
      // <Link to={`/project/${this.props.id}`}>
        <div className="container center-text">
          <h2 className="center-text">{this.props.name}</h2>
          <h4 className="center-text">{this.props.subtitle}</h4>
          <div>
            <img className="img-responsive img-rounded center-block" src={`img/${this.props.image}`}/>
          </div>
          <p className="center-text">{this.props.description}</p>
          {/*<LinkContainer to={`/project/${this.props.id}`}>*/}
            <Button className="center-block">View More</Button>
          {/*</LinkContainer>*/}
        </div>
      // </Link>
    );
  }
}
