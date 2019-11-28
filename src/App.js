import React, { Component } from 'react';
import './App.css';

// the main class of the Public Pixel Gallery App
class PPGApp extends Component {

  render() {
    return (
      <div className="App">
        <header>
            <h1>public pixel gallery</h1>
            <button className="make-pixel-art">make pixel art</button>
        </header>
        
      </div>
    );
  } // render
  
} // PPGApp

export default PPGApp;
