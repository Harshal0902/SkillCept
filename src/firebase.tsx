import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAgbePxdBusXTwMd9omS8BVLVERNTqmZWE",
  authDomain: "skillcept-74faf.firebaseapp.com",
  projectId: "skillcept-74faf",
  storageBucket: "skillcept-74faf.appspot.com",
  messagingSenderId: "1016124352405",
  appId: "1:1016124352405:web:aa401fbfa0d329e73eb89c",
  measurementId: "G-3W0QP755F4"
};

const firebaseAuth = firebase.initializeApp(firebaseConfig)

export default firebaseAuth;