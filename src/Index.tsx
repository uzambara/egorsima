import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { globalHistory } from './Routing';
import { Router } from 'react-router';

render(
  <Router history={globalHistory}>
    <App />
  </Router>,
  document.getElementById('app'),
);
