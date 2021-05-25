import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD8TLTiJYEQ3ZiLbcnIK6WMzdaobBo9DDI",
  authDomain: "book-santa-app-fbaab.firebaseapp.com",
  database: "https://book-santa-app-fbaab.firebaseapp.com",
  projectId: "book-santa-app-fbaab",
  storageBucket: "book-santa-app-fbaab.appspot.com",
  messagingSenderId: "89169995607",
  appId: "1:89169995607:web:c65ea3b8425961c09b4012"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
