import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers'
import PhotoDetail from './components/photo_detail';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Login from './components/login';
import * as firebase from "firebase";


const createStoreWithMiddleware = applyMiddleware()(createStore);
var config = {
  apiKey:"AIzaSyDwqEk05W6nrGAlb8XNynq4dhatVr6U330",
  authDomain:"photoglyph-b4155.firebaseapp.com",
  databaseURL: "https://photoglyph-b4155.firebaseio.com",
  storageBucket:"gs://photoglyph-b4155.appspot.com"
};
firebase.initializeApp(config);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Route path="/" component={Login}/>
      {/* <Route path="/profiles/:id" component={Profile}/>
      <Route path="/profiles/:id/:photo" component={PhotoDetail}/> */}
      </div>
  </BrowserRouter>
</Provider>,
   document.getElementById('root'));
registerServiceWorker();
