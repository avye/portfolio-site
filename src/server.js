'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import Mailgun from 'mailgun-js';

const authInfo = {};

// import authInfoLocal from './authInfo';
// authInfo.user = authInfoLocal.user
// authInfo.mailgunApiKey = authInfoLocal.mailgunApiKey
// authInfo.mailgunDomain = authInfoLocal.mailgunDomain

// Handle the deployed version authorization information
authInfo.user = process.env.user
authInfo.mailgunApiKey = process.env.mailgunApiKey
authInfo.mailgunDomain = process.env.mailgunDomain

const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));

const mailgun = Mailgun({apiKey: authInfo.mailgunApiKey, domain: authInfo.mailgunDomain})


// Want this to be handled different as it is the contact form submission
app.get('/contactSubmit', (req, res) => {
  const data = {
    from: 'Contact Request <me@samples.mailgun.org>',
    to: authInfo.user,
    subject: 'New contact request from ' + req.query.contactName + ' at ' + req.query.contactCompany,
    text: 'Email me at ' + req.query.contactEmail + '\n' + 'I am interested in: ' + req.query.contactDescription
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      res.end('Message Error')
    } else {
      res.end('Message Sent');
    }
  });
})

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      return res.render('index', { markup });
    }
  );
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log('Server is running!');
});
