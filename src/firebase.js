import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArpzLAsTn6Ks0iiziO_2ahBsAWnqS7PZY",
  authDomain: "union-strategies-challenge.firebaseapp.com",
  projectId: "union-strategies-challenge",
  storageBucket: "union-strategies-challenge.appspot.com",
  messagingSenderId: "1020658677066",
  appId: "1:1020658677066:web:9ff868682c2b20c82ffdb3"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
