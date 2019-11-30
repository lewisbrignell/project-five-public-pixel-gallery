import React, { Component } from 'react';


class Section1 extends Component {
    constructor() {
        super();

        let buttonArray = this.generateButtons();
        
        this.state = {
            buttonPixels: buttonArray,
        }
        console.log('state', this.state)
    }

    hideSection1 = (event) => {
        const element = document.getElementById("section1");
        element.style.top = "-700px";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
    }

    generateButtons = () => {
        const max = 144;
        const tempArray = [];
        for (let x = 0; x < max; x++) {
            tempArray.push(x);
        }
        console.log(tempArray)
        return(tempArray);
    }

    returnButtonVal = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    componentDidMount() {
        
    }


    /* <button className="buttonPixel" id="0" onClick={this.returnButtonVal}></button> */ 

    render() {
        return(
            <section id="section1" className="section1">
                <h2>make art!</h2>
                <button className="cancelPixelArt" onClick={this.hideSection1}><i className="fas fa-window-close"></i></button>
                <div id="artMaker" className="artMaker art-container">
                    {
                        this.state.buttonPixels.map( (thing) => {
                            return (
                                <button key={thing} className="buttonPixel" id={thing} onClick={this.returnButtonVal}></button>
                            );
                        })
                    }
                </div>
            </section> // /* section1 */ 
        );
    }
}

export default Section1;