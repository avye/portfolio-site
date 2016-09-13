'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

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
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
            <h2>Let's talk!</h2>
            <form onSubmit={this.contactFormSubmit.bind(this)}>
              <div className="form-group">
                <label for="contactName">Name</label>
                <input type="text" class="form-control" id="contactName" placeholder="What's your name?" ref='contactFormName'></input>
              </div>
              <div className="form-group">
                <label for="contactCompany">Company</label>
                <input type="text" class="form-control" id="contactCompany" placeholder="Who do you work for?" ref='contactCompany'></input>
              </div>
              <div className="form-group">
                <label for="contactEmail">Email</label>
                <input type="email" class="form-control" id="contactEmail" placeholder="How can I reach you?" ref='contactEmail'></input>
              </div>
              <div className="form-group">
                <label for="contactDescription">How can I help?</label>
                <input type="text" class="form-control" id="contactDescription" placeholder="What can I do for you?" ref='contactDescription'></input>
              </div>
              <Button type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
