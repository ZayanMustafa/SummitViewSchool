// Import firebase  
import { getAuth , createUserWithEmailAndPassword } from "../../Firebase Auth/firebase.js";


// Import elements from html
const userFirstName = document.getElementById("firstName")
const userLastName = document.getElementById("lastName")
const userEmail = document.getElementById("emailUser")
const userPassword = document.getElementById("passwordUser")

// Complete user Name
const userName = userFirstName + userLastName

// Import button for SignUp from Email and Google 
const SignUpBtn = document.getElementById("signUp")
const SignUpGoogleBtn = document.getElementById("googleSignUp")

SignUpBtn.addEventListener( "click" , createUserWithEmailAndPassword())

funcation createUserWithEmailAndPassword(){
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
});
}
