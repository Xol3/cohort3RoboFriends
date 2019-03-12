//this is the link that is rendering app to the html
import React from 'react'; //this is the painter that render what we have on our componets
import ReactDOM from 'react-dom'; //where you are acturally rendering react . example react native(mobile devices), vr
import './index.css'; // import css
import App from './App'; //import the main app component
import 'tachyons'; //importin a css simple library (abreveations for css implimented in HTML)
import * as serviceWorker from './serviceWorker'; // ignore it as it comes with create react app
//takes arguments first what to render , then where to render
ReactDOM.render(
<App />
  , document.getElementById('chingon'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // ignore it as it comes with create react app
