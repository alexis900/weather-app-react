import React, { Component } from 'react';
import './App.css';

import './sass/App.scss'

import TopSection from './Components/Top/index'
import BottomSection from './Components/Bottom/index'


class App extends Component {
  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section"><TopSection /></div>
          <div className="top-section"><BottomSection /></div>
        </div>
      </div>
    )
  }
}

export default App;
