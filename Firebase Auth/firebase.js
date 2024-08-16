// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { 
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { 
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import { 
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { 
  getDatabase,
  ref as databaseRef,
  set 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKhpP37k2muOM4ulUVNnQcAgIuTKoLcFE",
  authDomain: "summitviewschool1.firebaseapp.com",
  databaseURL: "https://summitviewschool1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summitviewschool1",
  storageBucket: "summitviewschool1.appspot.com",
  messagingSenderId: "514893141429",
  appId: "1:514893141429:web:53850a5db5f66790b5f5fc",
  measurementId: "G-ZGS0H889B2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

console.log(
  "App==>", app,
  "Analytics==>", analytics,
  "Storage==>", storage,
  "Firestore==>", db,
  "Auth==>", auth,
  "Provider==>", provider,
  "Realtime Database==>", database
);

  // Export Firebase services and methods
  export {
    // Authentication
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
    getFirestore,
    storage,
    getStorage,
    storageRef,
    uploadBytes,
    getDownloadURL,
    // Firestore
    db,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    // Realtime Database
    database,
    getDatabase,
    databaseRef,
    set
  };