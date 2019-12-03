import React, { Component } from 'react';
import firebase from './firebase.js';
import Section1 from './Section1.js';
import './App.css';


// the main class of the Public Pixel Gallery App
class PPGApp extends Component {
  
  // state holds data pulled from firebase;
  // an array of pixel art objects
  constructor() {
    super();
    this.state = {
      pixelArtArray: [],
    }
  }

  // when make art button is clicked, creation section is displayed
  displaySection1 = (event) => {
    const element = document.getElementById("section1");
    element.style.left = "0";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  }

  // data is pulled from firebase and passed to state
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (data) => {
      let artArray = [];
      
      for (let artPiece in data.val()) {
        artArray.push(data.val()[artPiece]);
      }
      
      this.setState({
        pixelArtArray: artArray,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>public pixel gallery</h1>
          <button className="makePixelArt" onClick={this.displaySection1}>make pixel art</button>
        </header>

        <main>
          {/* this is the pixel art creation section */}
          <Section1 />

          {/* this is where all created pixel art (firebase data) is displayed */}
          <section className="section2">
            <ul className="wrapper gallery">
              {
                this.state.pixelArtArray.map( (artItem) => {
                  return(
                    <li>
                      <h2>{artItem.name}</h2>
                      <div className="artContainer">
                        {
                          artItem.colourArray.map((colour) => {
                            return (
                              <div style={{background: colour}}></div>
                            )
                          })
                        }
                      </div>   
                      <h3>{artItem.maker}</h3>
                    </li>
                  )
                })
              }   
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
