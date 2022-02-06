import firebase from 'firebase/app';
//import 'firebase/auth';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyDaAl50cyMldTM4A8xB3SRFjPa78hGMgO4",
  authDomain: "sistema-cc0ff.firebaseapp.com",
  projectId: "sistema-cc0ff",
  storageBucket: "sistema-cc0ff.appspot.com",
  messagingSenderId: "965003712051",
  appId: "1:965003712051:web:7be9a9a5d2472056f0f546",
  measurementId: "G-WYW7KDK4E0"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);