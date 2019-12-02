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
        
        event.target.previousSibling.style.border = "3px solid red";
        this.setState({
            selectedColour: event.target.value,
        });
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    }

    changeName = (event) => {
        this.setState({
            authour: event.target.value,
        });
    }

    publishArt = (event) => {
        event.preventDefault();

        if (this.state.title !== "" && this.state.authour !== "") {
            let newArtObject = {
                colourArray: this.state.buttonPixelColours,
                name: this.state.title,
                maker: this.state.authour,
            }
            const dbRef = firebase.database().ref();
            dbRef.push(newArtObject);

            this.setState({
                buttonPixelColours: this.generateDefaultColours(),
                selectedColour: `#fff`,
                title: "",
                authour: "",
            });
        } else {
            alert('Please input a title and name.')
        }

        
    }

    render() {
        console.log('state: ', this.state);
        return(
            <section id="section1" className="section1">
                <h2>make art!</h2>
                <form action="submit">
                    <button className="cancelPixelArt" onClick={this.hideSection1}><i className="fas fa-window-close"></i></button>
                    <fieldset id="artMaker" className="artMaker art-container">
                        <legend className="sr-only">here you can colour the pixels</legend>
                        {
                            this.state.buttonPixels.map( (thing) => {
                                return (
                                    <button key={thing} className="buttonPixel" value={this.state.buttonPixelColours[thing]} style={{background: this.state.buttonPixelColours[thing]}} id={thing} onClick={this.changeButtonValue}></button>
                                );
                            })
                        }
                    </fieldset>
                    <fieldset>
                        <legend className="sr-only">select a colour</legend>
                        
                        <label style={{background: '#fff'}} className="radioLabel" htmlFor="white">white</label>
                        <input type="radio" id="white" name="palette" value="#fff" className="sr-only" onClick={this.changeSelectedColour} defaultChecked />

                        <label style={{ background: '#c0c0c0' }} className="radioLabel" htmlFor="silver">silver</label>
                        <input type="radio" id="silver" name="palette" value="#c0c0c0" className="sr-only" onClick={this.changeSelectedColour} />
                        
                        <label style={{ background: '#000' }}  className="radioLabel" htmlFor="black">black</label>
                        <input type="radio" id="black" name="palette" value="#000" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#0000ff' }}  className="radioLabel" htmlFor="blue">blue</label>
                        <input type="radio" id="blue" name="palette" value="#0000ff" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#00ffff' }}  className="radioLabel" htmlFor="aqua">aqua</label>
                        <input type="radio" id="aqua" name="palette" value="#00ffff" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#00ff00' }}  className="radioLabel" htmlFor="lime">lime</label>
                        <input type="radio" id="lime" name="palette" value="#00ff00" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#ffff00' }}  className="radioLabel" htmlFor="yellow">yellow</label>
                        <input type="radio" id="yellow" name="palette" value="#ffff00" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#ff0000' }}  className="radioLabel" htmlFor="red">red</label>
                        <input type="radio" id="red" name="palette" value="#ff0000" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#ff00ff' }}  className="radioLabel" htmlFor="fuchsia">fuchsia</label>
                        <input type="radio" id="fuchsia" name="palette" value="#ff00ff" className="sr-only" onClick={this.changeSelectedColour} />

                        <label style={{ background: '#800080' }}  className="radioLabel" htmlFor="purple">purple</label>
                        <input type="radio" id="purple" name="palette" value="#800080" className="sr-only" onClick={this.changeSelectedColour} />
                    </fieldset>
                    <div className="inputContainer">
                        <label htmlFor="titleInput" className="sr-only">art title here</label>
                        <input id="titleInput" type="text" placeholder="art title here" maxLength="15" required onChange={this.changeTitle}/>

                        <label htmlFor="nameInput" className="sr-only">your name here</label>
                        <input id="nameInput" type="text" placeholder="your name here" maxLength="18" required onChange={this.changeName}/>
                    </div>

                </form>
                {/* add title and name inputs */}
                <button className="publish" onClick={this.publishArt} >publish</button>
            </section> // /* section1 */ 
        );
    }
}

export default Section1;