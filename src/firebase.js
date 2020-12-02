import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyATbwt9GBeeFLCEr3I9TVnoRw5oNitA6t8",
  authDomain: "clone-reactjs-abf58.firebaseapp.com",
  databaseURL: "https://clone-reactjs-abf58.firebaseio.com",
  projectId: "clone-reactjs-abf58",
  storageBucket: "clone-reactjs-abf58.appspot.com",
  messagingSenderId: "48414791338",
  appId: "1:48414791338:web:f0334df77ca8e1b82ba2d3",
  measurementId: "G-TX0MSBRV38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }