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
        <main>
          <div className="wrapper">
            <article>
              <h2>title of piece</h2>
              <div className="art-container"></div>
              <h3>pen name of creator</h3>
              <p>date and time</p>
            </article>
            <article>
              <h2>title of piece</h2>
              <div className="art-container"></div>
              <h3>pen name of creator</h3>
              <p>date and time</p>
            </article>
            <article>
              <h2>title of piece</h2>
              <div className="art-container"></div>
              <h3>pen name of creator</h3>
              <p>date and time</p>
            </article>
            <article>
              <h2>title of piece</h2>
              <div className="art-container"></div>
              <h3>pen name of creator</h3>
              <p>date and time</p>
            </article>
            <article>
              <h2>title of piece</h2>
              <div className="art-container"></div>
              <h3>pen name of creator</h3>
              <p>date and time</p>
            </article>
          </div> {/* /.wrapper */}
        </main>
        <footer>
          <h4>copyright lewis brignell 2019</h4>
        </footer>
      </div>
    );
  } // render
  
} // PPGApp

export default PPGApp;
