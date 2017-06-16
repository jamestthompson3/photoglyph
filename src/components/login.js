import React, {Component} from 'react';
import ReactMixin from 'react-mixin';
import * as firebase from 'firebase';
import Check from './auth_test';

export default class Login extends Component{
  render() {
    const login_function = function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessge = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
    const logout_function = function() {
      firebase.auth().signOut().then(function() {
        console.log("success");
      }).catch(function(error) {
        console.log('error');
      });
    }
    return (
      <div>
        <h1><a onClick={login_function}>Login</a></h1>
        <h1><a onClick={Check}>Check Status</a></h1>
        <h1><a onClick={logout_function}>Logout</a></h1>

      </div>
    );
  }
 }
