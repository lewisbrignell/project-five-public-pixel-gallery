import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

// the main class of the Public Pixel Gallery App
class PPGApp extends Component {

  componentDidMount() {
    // firebase connected successfully!
    const dbRef = firebase.database().ref();
    
  }

  // displaySection1 = (event) => {
  //   const element = document.getElementById("section1");
  //   element.style.top = "-130px";
  //   document.getElementsByTagName('html')[0].style.overflow = "hidden";
  // }

  render() {
    return (
      <div className="App">
        <header>
            <h1>public pixel gallery</h1>
            <button className="make-pixel-art" onClick={this.displaySection1}>make pixel art</button>
        </header>
        <main>
          <section id="section1" className="section1">
            <h2>make art!</h2>
          </section>

          <section className="section-2">
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
          </section>
        </main>
        <footer>
          <h4>copyright lewis brignell 2019</h4>
        </footer>
      </div>
    );
  } // render
  
} // PPGApp

export default PPGApp;
