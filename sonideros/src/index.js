import React from 'react'; //this is the painter that render what we have on our componets
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {robots} from './Robots';

ReactDOM.render(
<CardList robots={robots} />
  , document.getElementById('chingon'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
