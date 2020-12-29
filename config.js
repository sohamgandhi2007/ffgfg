import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB6buvibN_12eq4qHIHEHKd77UaRSW-OWA",
  authDomain: "booksanta-4be96.firebaseapp.com",
  databaseURL: "https://booksanta-4be96.firebaseio.com",
  projectId: "booksanta-4be96",
  storageBucket: "booksanta-4be96.appspot.com",
  messagingSenderId: "392205138210",
  appId: "1:392205138210:web:f4d749751c693266924d7b"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
