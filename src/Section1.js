import React, { Component } from 'react';
import firebase from './firebase.js';

class Section1 extends Component {

    // default button ids and default white colour is assigned 
    //  to all generated pixel buttons.
    // state contains the following:
    //   - an array (length 144) of button id numbers, 0-143
    //   - an array (length 144) of respective button colours
    //      which are initialized to #fff at start.
    //   - a default selected radio colour, #fff.
    //   - art piece title and authour set to "".
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

    // hides pixel art creation section, re-revealing the gallery
    hideSection1 = (event) => {
        event.preventDefault();
        const element = document.getElementById("section1");
        element.style.left = "-100vw";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
    }

    // at start, 144 pixel buttons are generated and assigned to a square grid
    generateButtons = () => {
        const max = 144;
        const tempArray = [];
        for (let x = 0; x < max; x++) {
            tempArray.push(x);
        }
        return(tempArray);
    }

    // at start, 144 default colours of #fff are assigned to each button and the 
    //  array that tracks changes
    generateDefaultColours = () => {
        const max = 144;
        const tempArray = [];
        const defaultColour = `#fff`
        for (let x = 0; x < max; x++) {
            tempArray.push(defaultColour);
        }
        return (tempArray);
    }

    // when clicked, the target button is assigned the colour value corresponding 
    //  to the currently selected radio button value.
    // this value is passed on to the array in state that will eventually be pushed
    //  to firebase.
    changeButtonValue = (event) => {
        event.preventDefault();
        let position = event.target.id;
        let colourArray = this.state.buttonPixelColours;
        colourArray[position] = this.state.selectedColour;
        this.setState({
            buttonPixelColours: colourArray,
        });
        
    }

    // the currently selected radio colour is updated in state.
    changeSelectedColour = (event) => {
        this.setState({
            selectedColour: event.target.value,
        });
        // event.target.previousSibling.style.border = "3px solid gold";
    }

    // tracks changes to the title text input, state is updated accordingly
    changeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    }

    // tracks changes to the authour name text input, state is updated accordingly
    changeName = (event) => {
        this.setState({
            authour: event.target.value,
        });
    }

    // if the title and name aren't "", all state info is made into an art object
    //  and pushed to firebase, on render this new information will be displayed 
    //  on the main gallery page.
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

            document.getElementById('titleInput').value = "";
            document.getElementById('nameInput').value = "";
        } else {
            alert('Please input a title and name.')
        }

        
    }

    render() {
        return(
            <section id="section1" className="section1">
                <div className="wrapper">
                    <div className="flexParent">
                        <h2>make art!</h2>
                        <button className="cancelPixelArt" onClick={this.hideSection1}><i className="fas fa-window-close"></i></button>
                    </div>

                    <form action="submit">
                        <div id="artMaker" className="artMaker artContainer">
                            <legend className="sr-only">here you can colour the pixels</legend>
                            {
                                this.state.buttonPixels.map( (thing) => {
                                    return (
                                        <button key={thing} className="buttonPixel" value={this.state.buttonPixelColours[thing]} style={{background: this.state.buttonPixelColours[thing]}} id={thing} onClick={this.changeButtonValue}></button>
                                    );
                                })
                            }
                        </div>

                        <div className="radioContainer">
                            <legend className="sr-only">select a colour</legend>
                            
                            <label style={{background: '#fff'}} className="radioLabel" htmlFor="white"><p className="sr-only">
                                white
                            </p></label>
                            <input type="radio" id="white" name="palette" value="#fff" className="sr-only" onClick={this.changeSelectedColour} defaultChecked />
    
                            <label style={{ background: '#c0c0c0' }} className="radioLabel" htmlFor="silver"><p className="sr-only">
                                silver
                            </p></label>
                            <input type="radio" id="silver" name="palette" value="#c0c0c0" className="sr-only" onClick={this.changeSelectedColour} />
                            
                            <label style={{ background: '#000' }}  className="radioLabel" htmlFor="black"><p className="sr-only">
                                black
                            </p></label>
                            <input type="radio" id="black" name="palette" value="#000" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#0000ff' }}  className="radioLabel" htmlFor="blue"><p className="sr-only">
                                blue
                            </p></label>
                            <input type="radio" id="blue" name="palette" value="#0000ff" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#00ffff' }}  className="radioLabel" htmlFor="aqua"><p className="sr-only">
                                aqua
                            </p></label>
                            <input type="radio" id="aqua" name="palette" value="#00ffff" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#00ff00' }}  className="radioLabel" htmlFor="lime"><p className="sr-only">
                                lime
                            </p></label>
                            <input type="radio" id="lime" name="palette" value="#00ff00" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#ffff00' }}  className="radioLabel" htmlFor="yellow"><p className="sr-only">
                                yellow
                            </p></label>
                            <input type="radio" id="yellow" name="palette" value="#ffff00" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#ff0000' }}  className="radioLabel" htmlFor="red"><p className="sr-only">
                                red
                            </p></label>
                            <input type="radio" id="red" name="palette" value="#ff0000" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#ff00ff' }}  className="radioLabel" htmlFor="fuchsia"><p className="sr-only">
                                fuchsia
                            </p></label>
                            <input type="radio" id="fuchsia" name="palette" value="#ff00ff" className="sr-only" onClick={this.changeSelectedColour} />
    
                            <label style={{ background: '#800080' }}  className="radioLabel" htmlFor="purple"><p className="sr-only">
                                purple
                            </p></label>
                            <input type="radio" id="purple" name="palette" value="#800080" className="sr-only" onClick={this.changeSelectedColour} />
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="titleInput" className="sr-only">art title here</label>
                            <input id="titleInput" type="text" placeholder="art title here" maxLength="15" required onChange={this.changeTitle}/>
    
                            <label htmlFor="nameInput" className="sr-only">your name here</label>
                            <input id="nameInput" type="text" placeholder="your name here" maxLength="18" required onChange={this.changeName}/>
                        </div>
                        
                        <button className="publish" onClick={this.publishArt} >publish</button>
                    </form>
                </div> {/* wrapper */}

            </section> // /* section1 */ 
        );
    }
}

export default Section1;