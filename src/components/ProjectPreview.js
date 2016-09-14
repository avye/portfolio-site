'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ProjectPreview extends React.Component {
  render() {
    return (
        <div className="container projectPreviewCard">
          <div className="row projectPreviewHeader">
            <div className="col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3 center-text">
              <h1 className="text-center"><b>{this.props.name}</b></h1>
              <h4 className="text-center">{this.props.subtitle}</h4>
            </div>
          </div>
          <div className="row">
            {this.props.name === "followthru" ?
              <div className="col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3">
                <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image2}`}/>
              </div>
              :
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
                <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image2}`}/>
              </div>
            }

            {/*<div className="col-xs-12 col-sm-10 col-md-4 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image1}`}/>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-4 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
              <img className="img-responsive img-rounded projectPreviewImage" src={`img/${this.props.image2}`}/>
            </div>*/}
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-6 col-xs-offset-0 col-sm-offset-1 col-md-offset-3 center-text">
              <p className="text-center"><i>Built with {this.props.technologies}</i></p>
              <h4 className="text-center">{this.props.description}</h4>
                <a href={`${this.props.link}`}>
                  <button className="btn btn-default center-block">{this.props.button}</button>
                </a>
            </div>
          </div>
          {/*Adding in the contact callout here in order to maintain symmetry of the centering*/}
          {this.props.name === "Trex Racer" ?
            <div>
              <div className="row projectPreviewCallout">
                <div className="col-xs-12 col-sm-12 col-md-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 center-text">
                  <h1 className="text-center"><b><big><big><big>Let's talk.</big></big></big></b></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-4 col-md-2 col-xs-offset-3 col-sm-offset-4 col-md-offset-5 center-text">
                  <Link to='contact'>
                    <button className="btn btn-default btn-lg center-block">CONTACT ME</button>
                  </Link>
                </div>
              </div>
            </div>
            :
            null
          }
        </div>
    );
  }
}
