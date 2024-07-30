// Import Firebase methods and elements
import {
    getStorage,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    createUserWithEmailAndPassword,
    auth,
    provider,
    GoogleAuthProvider, 
    signInWithPopup,
} from "../../Firebase Auth/firebase.js";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const profileIcon = document.getElementById("profileIcon");
const profilePicture = document.getElementById("profilePicture");
const profileImage = document.getElementById("profileImage");
const profileContainer = document.getElementById("profileContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const signUpBtn = document.getElementById("signUp");
const googleSignUp = document.getElementById("googleSignUpBtn");


signUpBtn.addEventListener("click" , userAccountCreate )

function userAccountCreate (){

    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // User signed up
      console.log('User signed up:', userCredential.user);
    //   window.location.href = "../For Login/login.html"
    alert('User Succefully make')
        
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
}
