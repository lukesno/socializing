import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBLZEfW7A2P8ENPs51vcWILrWe8HqJ65CQ",
    authDomain: "sec2020-12360.firebaseapp.com",
    databaseURL: "https://sec2020-12360.firebaseio.com",
    projectId: "sec2020-12360",
    storageBucket: "sec2020-12360.appspot.com",
    messagingSenderId: "755156927095",
    appId: "1:755156927095:web:86d356bb92788f3e7dfc72",
    measurementId: "G-5XS7QX5KP1"
};

// Establishes connection with firebase
const fire = app.initializeApp(firebaseConfig);

export default fire;