// Import Firebase methods1;
import { auth } from "../Firebase Auth/firebase.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener("click" , ()=>{
  console.log("userEmail==>",userEmail.value)
  console.log("userPassword==>",userPassword.value)
  
})
console.log(auth)