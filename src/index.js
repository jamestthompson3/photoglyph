import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import * as firebase from "firebase";
import App from './App'
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
var config = {
  apiKey:"AIzaSyDwqEk05W6nrGAlb8XNynq4dhatVr6U330",
  authDomain:"photoglyph-b4155.firebaseapp.com",
  databaseURL: "https://photoglyph-b4155.firebaseio.com",
  storageBucket:"gs://photoglyph-b4155.appspot.com"
};
firebase.initializeApp(config);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
