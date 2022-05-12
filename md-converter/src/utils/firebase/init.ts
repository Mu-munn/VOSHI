// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBj_HPty0c9KSIylZzUzVYJCNV7Y9KuEI",
  authDomain: "studyapp-eef43.firebaseapp.com",
  projectId: "studyapp-eef43",
  storageBucket: "studyapp-eef43.appspot.com",
  messagingSenderId: "289652663065",
  appId: "1:289652663065:web:8e9e7745d96ca9fba89b88",
  measurementId: "G-M3FG77J6T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);