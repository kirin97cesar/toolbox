import "babel-polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import { FilesApp } from './FilesApp';


ReactDOM.render(
  <FilesApp />,
  document.getElementById('app')
);

module.hot.accept();
