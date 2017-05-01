/*
  All of this gets rendered in the index.html files

  Also of note:  the .gitignore file prevents any directories listed within
  from being uploaded to git
*/

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
require('./index.css');
const App = require('./components/App');


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
