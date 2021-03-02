import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-spa';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// serviceWorker.register();
atatus.config('9d2555348474414d9ea27bcd7b0381fd').install();
//atatus.notify(new Error('Test Atatus Setup'));