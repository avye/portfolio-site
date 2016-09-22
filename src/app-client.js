'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

// Utilize ReactDOM to render our virtual DOM
window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
