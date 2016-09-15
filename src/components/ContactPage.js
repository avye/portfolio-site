'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
  }

  contactFormSubmit(event) {
    event.preventDefault();
    const message = {
      contactName: this.refs.contactFormName.value,
      contactCompany: this.refs.contactCompany.value,
      contactEmail: this.refs.contactEmail.value,
      contactDescription: this.refs.contactDescription.value
    }
    axios.get('/contactSubmit', {
      params: message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container contactPageContainer">
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-md-10 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
            <h2>Let's talk!</h2>
          </div>
        </div>
          <form onSubmit={this.contactFormSubmit.bind(this)} class="form-horizontal">
            <div className="form-group">
              <label for="contactName" className="col-xs-10 col-sm-10 col-md-10 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 control-label">Name</label>
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
                <input type="text" className="inputForm input-lg form-control" id="contactName" placeholder="What's your name?" ref='contactFormName'></input>
              </div>
            </div>
            <div className="form-group">
              <label for="contactCompany" className="col-xs-10 col-sm-10 col-md-10 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 control-label">Company</label>
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
                <input type="text" className=" inputForm form-control input-lg" id="contactCompany" placeholder="Who do you work for?" ref='contactCompany'></input>
              </div>
            </div>
            <div className="form-group">
              <label for="contactEmail" className="col-xs-10 col-sm-10 col-md-10 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 control-label">Email</label>
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
                <input type="email" className="inputForm input-lg form-control" id="contactEmail" placeholder="How can I reach you?" ref='contactEmail'></input>
              </div>
            </div>
            <div className="form-group">
              <label for="contactDescription" className="col-xs-10 col-sm-10 col-md-10 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 control-label">Description</label>
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
                <textarea className="inputForm input-lg form-control" id="contactDescription" placeholder="How can I help?" ref='contactDescription'></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}
