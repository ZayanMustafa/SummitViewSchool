// Import firebase  
import { getAuth , signInWithEmailAndPassword } from "../../Firebase Auth/firebase.js";

// Import Element from html 
const email = document.getElementById("email")
const password = document.getElementById("password")
const logInBtn = document.getElementById("loginBtn")


// SignIn user with email and Password Btn Funcation 

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.href.location = "../../Registered User / registeredUser.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
