// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIrxKmOGQWlonhX5ARbvagcm7Nn4nlieQ",
  authDomain: "voshi-28545.firebaseapp.com",
  projectId: "voshi-28545",
  storageBucket: "voshi-28545.appspot.com",
  messagingSenderId: "437427660877",
  appId: "1:437427660877:web:74202a129fa01d994c9404",
  databaseURL: "https://voshi-28545.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);