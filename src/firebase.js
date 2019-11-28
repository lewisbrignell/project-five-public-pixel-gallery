// firebase.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZaz9EEFRjf5fhYEiLHRjHoX5cEG39TYg",
    authDomain: "public-pixel-gallery.firebaseapp.com",
    databaseURL: "https://public-pixel-gallery.firebaseio.com",
    projectId: "public-pixel-gallery",
    storageBucket: "public-pixel-gallery.appspot.com",
    messagingSenderId: "79919068692",
    appId: "1:79919068692:web:b8598345ffe172b8641901"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
