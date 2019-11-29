import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

// the main class of the Public Pixel Gallery App
class PPGApp extends Component {

  componentDidMount() {
    // firebase connected successfully!
    const dbRef = firebase.database().ref();
    
  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>public pixel gallery</h1>
            <button className="make-pixel-art">make pixel art</button>
        </header>
        <main>
          <ul className="wrapper">
            <li>
              <h2>title of piece</h2>
              <div className="art-container">
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
                <div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div><div className="pixel"></div>
              </div>
              <h3>pen name of creator</h3>
            </li>

  
          </ul> {/* /.wrapper */}
        </main>
        <footer>
          <h4>copyright lewis brignell 2019</h4>
        </footer>
      </div>
    );
  } // render
  
} // PPGApp

export default PPGApp;
