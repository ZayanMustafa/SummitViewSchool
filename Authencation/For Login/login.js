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
      logInBtn.innerText = 'Loading...'
      logInBtn.disable = true

      if(email.value === "admin@gmail.com"){
      window.location.href = "../../Admin/admin.html";
      }else {
      // Signed in 
      window.location.href = "../../Registered User/registeredUser.html";
      }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)

    
    logInBtn.innerText = 'Login'
    logInBtn.disable = false

  });
}
