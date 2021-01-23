
import firebase from 'firebase'
require ('@firebase/firestore')

  var firebaseConfig = {
  apiKey: "AIzaSyDF20Z0_s4T8yFnrHygFZrMHRrkGInnrac",
  authDomain: "story-app-f60b3.firebaseapp.com",
  databaseURL: "https://story-app-f60b3-default-rtdb.firebaseio.com",
  projectId: "story-app-f60b3",
  storageBucket: "story-app-f60b3.appspot.com",
  messagingSenderId: "1031198675383",
  appId: "1:1031198675383:web:0819cbc6292bd3b1309832"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);;

  export default firebase.firestore()