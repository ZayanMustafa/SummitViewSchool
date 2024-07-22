// Import fireBase 
import { getAuth , signOut } from "../Firebase Auth/firebase.js"


// Import Elements from html 
document.getElementById('logOutBtn').addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Sign-out successful")
      window.location.href = "../index.html"
    }).catch((error) => {
      // An error happened.
    });
});

