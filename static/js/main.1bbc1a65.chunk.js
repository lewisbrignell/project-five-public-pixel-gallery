(this["webpackJsonppublic-pixel-gallery"]=this["webpackJsonppublic-pixel-gallery"]||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(15),o=a.n(r),c=(a(22),a(6)),s=a(7),i=a(9),u=a(8),m=a(10),p=a(12),d=a.n(p);d.a.initializeApp({apiKey:"AIzaSyDZaz9EEFRjf5fhYEiLHRjHoX5cEG39TYg",authDomain:"public-pixel-gallery.firebaseapp.com",databaseURL:"https://public-pixel-gallery.firebaseio.com",projectId:"public-pixel-gallery",storageBucket:"public-pixel-gallery.appspot.com",messagingSenderId:"79919068692",appId:"1:79919068692:web:b8598345ffe172b8641901"});var h=d.a,f=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).hideSection1=function(e){e.preventDefault(),document.getElementById("section1").style.left="-100vw",document.getElementsByTagName("html")[0].style.overflow="scroll"},e.generateButtons=function(){for(var e=[],t=0;t<144;t++)e.push(t);return e},e.generateDefaultColours=function(){for(var e=[],t=0;t<144;t++)e.push("#fff");return e},e.changeButtonValue=function(t){t.preventDefault();var a=t.target.id,l=e.state.buttonPixelColours;l[a]=e.state.selectedColour,e.setState({buttonPixelColours:l})},e.changeSelectedColour=function(t){e.setState({selectedColour:t.target.value})},e.changeTitle=function(t){e.setState({title:t.target.value})},e.changeName=function(t){e.setState({authour:t.target.value})},e.publishArt=function(t){if(t.preventDefault(),""!==e.state.title&&""!==e.state.authour){var a={colourArray:e.state.buttonPixelColours,name:e.state.title,maker:e.state.authour};h.database().ref().push(a),e.setState({buttonPixelColours:e.generateDefaultColours(),selectedColour:"#fff",title:"",authour:""}),document.getElementById("titleInput").value="",document.getElementById("nameInput").value=""}else alert("Please input a title and name.")};var a=e.generateButtons(),l=e.generateDefaultColours();return e.state={buttonPixels:a,buttonPixelColours:l,selectedColour:"#fff",title:"",authour:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{id:"section1",className:"section1"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"flexParent"},n.a.createElement("h2",null,"make art!"),n.a.createElement("button",{className:"cancelPixelArt",onClick:this.hideSection1},n.a.createElement("i",{className:"fas fa-window-close"}))),n.a.createElement("form",{action:"submit"},n.a.createElement("fieldset",{id:"artMaker",className:"artMaker artContainer"},n.a.createElement("legend",{className:"sr-only"},"here you can colour the pixels"),this.state.buttonPixels.map((function(t){return n.a.createElement("button",{key:t,className:"buttonPixel",value:e.state.buttonPixelColours[t],style:{background:e.state.buttonPixelColours[t]},id:t,onClick:e.changeButtonValue})}))),n.a.createElement("fieldset",{className:"radioContainer"},n.a.createElement("legend",{className:"sr-only"},"select a colour"),n.a.createElement("label",{style:{background:"#fff"},className:"radioLabel",htmlFor:"white"},n.a.createElement("p",{className:"sr-only"},"white")),n.a.createElement("input",{type:"radio",id:"white",name:"palette",value:"#fff",className:"sr-only",onClick:this.changeSelectedColour,defaultChecked:!0}),n.a.createElement("label",{style:{background:"#c0c0c0"},className:"radioLabel",htmlFor:"silver"},n.a.createElement("p",{className:"sr-only"},"silver")),n.a.createElement("input",{type:"radio",id:"silver",name:"palette",value:"#c0c0c0",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#000"},className:"radioLabel",htmlFor:"black"},n.a.createElement("p",{className:"sr-only"},"black")),n.a.createElement("input",{type:"radio",id:"black",name:"palette",value:"#000",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#0000ff"},className:"radioLabel",htmlFor:"blue"},n.a.createElement("p",{className:"sr-only"},"blue")),n.a.createElement("input",{type:"radio",id:"blue",name:"palette",value:"#0000ff",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#00ffff"},className:"radioLabel",htmlFor:"aqua"},n.a.createElement("p",{className:"sr-only"},"aqua")),n.a.createElement("input",{type:"radio",id:"aqua",name:"palette",value:"#00ffff",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#00ff00"},className:"radioLabel",htmlFor:"lime"},n.a.createElement("p",{className:"sr-only"},"lime")),n.a.createElement("input",{type:"radio",id:"lime",name:"palette",value:"#00ff00",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#ffff00"},className:"radioLabel",htmlFor:"yellow"},n.a.createElement("p",{className:"sr-only"},"yellow")),n.a.createElement("input",{type:"radio",id:"yellow",name:"palette",value:"#ffff00",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#ff0000"},className:"radioLabel",htmlFor:"red"},n.a.createElement("p",{className:"sr-only"},"red")),n.a.createElement("input",{type:"radio",id:"red",name:"palette",value:"#ff0000",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#ff00ff"},className:"radioLabel",htmlFor:"fuchsia"},n.a.createElement("p",{className:"sr-only"},"fuchsia")),n.a.createElement("input",{type:"radio",id:"fuchsia",name:"palette",value:"#ff00ff",className:"sr-only",onClick:this.changeSelectedColour}),n.a.createElement("label",{style:{background:"#800080"},className:"radioLabel",htmlFor:"purple"},n.a.createElement("p",{className:"sr-only"},"purple")),n.a.createElement("input",{type:"radio",id:"purple",name:"palette",value:"#800080",className:"sr-only",onClick:this.changeSelectedColour})),n.a.createElement("div",{className:"inputContainer"},n.a.createElement("label",{htmlFor:"titleInput",className:"sr-only"},"art title here"),n.a.createElement("input",{id:"titleInput",type:"text",placeholder:"art title here",maxLength:"15",required:!0,onChange:this.changeTitle}),n.a.createElement("label",{htmlFor:"nameInput",className:"sr-only"},"your name here"),n.a.createElement("input",{id:"nameInput",type:"text",placeholder:"your name here",maxLength:"18",required:!0,onChange:this.changeName})),n.a.createElement("button",{className:"publish",onClick:this.publishArt},"publish")))," ")}}]),t}(l.Component),y=(a(33),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).displaySection1=function(e){document.getElementById("section1").style.left="0",document.getElementsByTagName("html")[0].style.overflow="hidden"},e.state={pixelArtArray:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=[];for(var l in t.val())a.push(t.val()[l]);e.setState({pixelArtArray:a})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"public pixel gallery"),n.a.createElement("button",{className:"makePixelArt",onClick:this.displaySection1},"make pixel art")),n.a.createElement("main",null,n.a.createElement(f,null),n.a.createElement("section",{className:"section2"},n.a.createElement("ul",{className:"wrapper gallery"},this.state.pixelArtArray.map((function(e){return n.a.createElement("li",null,n.a.createElement("h2",null,e.name),n.a.createElement("div",{className:"artContainer"},e.colourArray.map((function(e){return n.a.createElement("div",{style:{background:e}})}))),n.a.createElement("h3",null,e.maker))})))," ")),n.a.createElement("footer",null,n.a.createElement("h4",null,"copyright lewis brignell 2019")))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.1bbc1a65.chunk.js.map