// Import firebase  
import { auth , signInWithEmailAndPassword } from "../../Firebase Auth/firebase.js";

// Import Element from html 
const email = document.getElementById("email")
const password = document.getElementById("password")
const logInBtn = document.getElementById("loginBtn")


// SignIn user with email and Password Btn Funcation 

logInBtn.addEventListener("click" , signIn)

function signIn (){
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    // Redirect to index.html
      window.location.href = "../../index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}
