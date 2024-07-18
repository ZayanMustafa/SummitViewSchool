// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkQtQsZ6VoJEfa86G_NaCPK-cmXdOv5Iw",
  authDomain: "firsteducationlwebsite.firebaseapp.com",
  projectId: "firsteducationlwebsite",
  storageBucket: "firsteducationlwebsite.appspot.com",
  messagingSenderId: "757131881060",
  appId: "1:757131881060:web:e451a4f1e4b6df46cd8d71",
  measurementId: "G-21G3G4LZBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);