import React from 'react';
import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/login_constants';

class AuthService {
  login(username, password) {
    return when(request({
      url: 'http://localhost:3000/sessions/create'
    }))
  }
}
