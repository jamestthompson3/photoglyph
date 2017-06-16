import React from 'react';
import * as firebase from 'firebase';

const Check = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      console.log("logged in")
    }
    else {
      console.log("not logged in")
    }
  });
}
export default Check
