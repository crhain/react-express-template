
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

//add axios to global for testing - uncomment to use
// import axios from 'axios';
// window.axios = axios;

//create redux store
//  arg1 is a reducer, 
//  arg 2 is default state
//  arg3 applies middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);

// registerServiceWorker();
