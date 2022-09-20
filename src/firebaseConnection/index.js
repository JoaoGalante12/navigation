import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDRhRwn5oHo0o0U9e4tyz7GNOWndDZ5AIo",
    authDomain: "aula01-7a7b4.firebaseapp.com",
    databaseURL: "https://aula01-7a7b4-default-rtdb.firebaseio.com",
    projectId: "aula01-7a7b4",
    storageBucket: "aula01-7a7b4.appspot.com",
    messagingSenderId: "299754551143",
    appId: "1:299754551143:web:054905cb68e6ec8ba921c2",
    measurementId: "G-2EMK9CR4R6"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;