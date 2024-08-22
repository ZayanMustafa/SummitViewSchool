// Import fireBase 
import { getAuth , signOut } from "../Firebase Auth/firebase.js"

document.getElementById("logOut").addEventListener("click" , () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Sign-out successful")
      window.location.href = "../index.html"
    }).catch((error) => {
      // An error happened.
    });
})
