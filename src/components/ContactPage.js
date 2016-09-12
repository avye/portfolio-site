'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class ContactPage extends React.Component {
  contactFormSubmit(event) {
    event.preventDefault();
    var test = ReactDOM.findDOMNode(contactName);
    console.log('the test ', test);
    console.log('heres the e ', event);
    console.log('the refs ', this);
    var message = {
      contactName: 'test',
      contactCompany: 'test2'
    }
    axios.post('/contactSubmit', message)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-xs-offset-0 col-sm-offset-1 col-md-offset-2">
            <h2>Let's talk!</h2>
            <form onSubmit={this.contactFormSubmit.bind(this)}>
              <FormGroup
                bsSize="large"
                controlId="contactName"
              >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="What's your name?"
                  ref="contactName"
                />
              </FormGroup>
              <FormGroup
                bsSize="large"
                controlId="contactCompany"
              >
                <ControlLabel>Company</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Who do you work for?"
                />
              </FormGroup>
              <FormGroup
                bsSize="large"
                controlId="contactEmail"
              >
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="How can I reach you?"
                />
              </FormGroup>
              <FormGroup
                bsSize="large"
                controlId="contactDescription"
              >
                <ControlLabel>How can I help?</ControlLabel>
                <FormControl
                  type="text"
                  componentClass="textarea"
                  placeholder="What can I do for you?"
                />
              </FormGroup>
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
