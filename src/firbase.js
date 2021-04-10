import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7MTo63McPbd7KjSQHoI1FFZpTmGkOikU",
  authDomain: "amazo-sb.firebaseapp.com",
  projectId: "amazo-sb",
  storageBucket: "amazo-sb.appspot.com",
  messagingSenderId: "759448302404",
  appId: "1:759448302404:web:9b64a3edf10d153b37dd11",
  measurementId: "G-GVJ059BS1Z"
})

const auth = firebase.auth();

export {auth}