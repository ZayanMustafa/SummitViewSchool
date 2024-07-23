  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth ,
          onAuthStateChanged,
          createUserWithEmailAndPassword,
          GoogleAuthProvider,
          signInWithPopup,
          signInWithEmailAndPassword,
          signOut,
          } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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
  console.log(app)


  const auth = getAuth();
  const user = auth.currentUser;

// Export From FireBase 
export{
  auth,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
}
