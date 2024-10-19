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
  get,
  getDatabase,
  ref as databaseRef,
  set 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfq5jMywCUO-sNrFqkzVe0_zpQxx4YWOM",
  authDomain: "some-projects-of-zayyan.firebaseapp.com",
  databaseurl: "https://some-projects-of-zayyan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "some-projects-of-zayyan",
  storageBucket: "some-projects-of-zayyan.appspot.com",
  messagingSenderId: "940547270190",
  appId: "1:940547270190:web:3b31458c19bb69e5f221bf",
  measurementId: "G-02SBWE9GNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
  // Log Firebase services and methods to the console for debugging purposes
 // Note: You should not log sensitive information like API keys and secrets in a production environment.  Instead, consider using environment variables or secure configuration storag
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
    get,
    database,
    getDatabase,
    databaseRef,
    set
  };