import React, { Component } from 'react';
import firebase from './firebase.js';

class Section1 extends Component {
    constructor() {
        super();

        let buttonArray = this.generateButtons();
        let colourArray = this.generateDefaultColours();
        
        this.state = {
            buttonPixels: buttonArray,
            buttonPixelColours: colourArray,
            selectedColour: `#fff`,
            title: "",
            authour: "", 
        }
    }

    hideSection1 = (event) => {
        event.preventDefault();
        const element = document.getElementById("section1");
        element.style.left = "-100vw";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
    }

    generateButtons = () => {
        const max = 144;
        const tempArray = [];
        for (let x = 0; x < max; x++) {
            tempArray.push(x);
        }
        return(tempArray);
    }

    generateDefaultColours = () => {
        const max = 144;
        const tempArray = [];
        const defaultColour = `#fff`
        for (let x = 0; x < max; x++) {
            tempArray.push(defaultColour);
        }
        return (tempArray);
    }

    changeButtonValue = (event) => {
        event.preventDefault();
        let position = event.target.id;
        let colourArray = this.state.buttonPixelColours;
        colourArray[position] = this.state.selectedColour;
        this.setState({
            buttonPixelColours: colourArray,
        });
        
    }

    changeSelectedColour = (event) => {
        this.setState({
            selectedColour: event.target.value,
        });
    }

    componentDidMount() {
        // firebase connected successfully!
    }

    publishArt = (event) => {
        event.preventDefault();
        console.log('you hit publish');

        let newArtObject = {
            colourArray: this.state.buttonPixelColours,
            name: this.state.title,
            maker: this.state.authour,
        }
        console.log(newArtObject);
        const dbRef = firebase.database().ref();
        dbRef.push(newArtObject);

        this.setState({
            buttonPixelColours: this.generateDefaultColours(),
            selectedColour: `#fff`,
            title: "",
            authour: "", 
        });
    }

    render() {
        console.log('current state', this.state);

        return(
            <section id="section1" className="section1">
                <h2>make art!</h2>
                <form action="submit">
                    <button className="cancelPixelArt" onClick={this.hideSection1}><i className="fas fa-window-close"></i></button>
                    <div id="artMaker" className="artMaker art-container">
                        {
                            this.state.buttonPixels.map( (thing) => {
                                return (
                                    <button key={thing} className="buttonPixel" value={this.state.buttonPixelColours[thing]} style={{background: this.state.buttonPixelColours[thing]}} id={thing} onClick={this.changeButtonValue}></button>
                                );
                            })
                        }
                    </div>
                    <fieldset>
                        <legend className="sr-only">select a colour</legend>
                        
                        <label htmlFor="white" className="sr-only">white</label>
                        <input type="radio" id="white" name="palette" value="#fff" onClick={this.changeSelectedColour} defaultChecked />

                        <label htmlFor="silver" className="sr-only">silver</label>
                        <input type="radio" id="silver" name="palette" value="#c0c0c0" onClick={this.changeSelectedColour} />
                        
                        <label htmlFor="black" className="sr-only">black</label>
                        <input type="radio" id="black" name="palette" value="#000" onClick={this.changeSelectedColour} />

                        <label htmlFor="blue" className="sr-only">blue</label>
                        <input type="radio" id="blue" name="palette" value="#0000ff" onClick={this.changeSelectedColour} />

                        <label htmlFor="aqua" className="sr-only">aqua</label>
                        <input type="radio" id="aqua" name="palette" value="#00ffff" onClick={this.changeSelectedColour} />

                        <label htmlFor="lime" className="sr-only">lime</label>
                        <input type="radio" id="lime" name="palette" value="#00ff00" onClick={this.changeSelectedColour} />

                        <label htmlFor="yellow" className="sr-only">yellow</label>
                        <input type="radio" id="yellow" name="palette" value="#ffff00" onClick={this.changeSelectedColour} />

                        <label htmlFor="red" className="sr-only">red</label>
                        <input type="radio" id="red" name="palette" value="#ff0000" onClick={this.changeSelectedColour} />

                        <label htmlFor="fuchsia" className="sr-only">fuchsia</label>
                        <input type="radio" id="fuchsia" name="palette" value="#ff00ff" onClick={this.changeSelectedColour} />

                        <label htmlFor="purple" className="sr-only">purple</label>
                        <input type="radio" id="purple" name="palette" value="#800080" onClick={this.changeSelectedColour} />
                    </fieldset>
                </form>
                {/* add title and name inputs */}
                <button className="publish" onClick={this.publishArt} >publish</button>
            </section> // /* section1 */ 
        );
    }
}

export default Section1;