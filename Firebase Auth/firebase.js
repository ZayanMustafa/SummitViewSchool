  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import {  getAuth ,
            onAuthStateChanged,
            createUserWithEmailAndPassword,
            GoogleAuthProvider,
            signInWithPopup,
            signInWithEmailAndPassword,
            signOut,
          } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getStorage,
           ref,
           uploadBytes,
           getDownloadURL
         } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
  import { getFirestore,
           collection,
           doc,
           setDoc,
           addDoc,
           getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";   

   
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQtQsZ6VoJEfa86G_NaCPK-cmXdOv5Iw",
  authDomain: "firsteducationlwebsite.firebaseapp.com",
  projectId: "firsteducationlwebsite",
  storageBucket: "firsteducationlwebsite.appspot.com",
  messagingSenderId: "757131881060",
  appId: "1:757131881060:web:85f54bcc57eb442ecd8d71",
  measurementId: "G-ZV87DCV7MP"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const storage = getStorage(app);
 const db = getFirestore(app);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

// Export Firebase services and methods
export {
  // Authencation
  app,
  analytics,
  auth,
  provider,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // Storage
  storage,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  // DataBase
  db,
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc
};