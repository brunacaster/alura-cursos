import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor';
import './index.css';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

ReactDOM.render(
  (<BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/autor" component={AutorBox} />
      <Route path="/livro" />
    </div>
  </BrowserRouter>),
  document.getElementById('root')
);
