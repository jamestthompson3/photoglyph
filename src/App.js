import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoDetail from './components/photo_detail';
import PhotoList from './containers/photo_list';
class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: []
    };
    }
  render(){
    return (
      <div>
        <PhotoDetail />
        <PhotoList />
      </div>
    );
  }
}

export default App;
