// Import Firebase methods and elements
import {
    createUserWithEmailAndPassword,
    auth,
    provider,
    signInWithPopup
  } from "../../Firebase Auth/firebase.js";
  
  // Import elements from HTML
  const userFirstName = document.getElementById("firstName");
  const userLastName = document.getElementById("lastName");
  const userEmail = document.getElementById("emailUser");
  const userPassword = document.getElementById("passwordUser");
  const profileIcon = document.getElementById("profileIcon");
  const profilePicture = document.getElementById("profilePicture");
  const signUpBtn = document.getElementById("signUp");
  const googleSignUp = document.getElementById("googleSignUpBtn");
  
 
    
  // Event listener for the sign-up button
  signUpBtn.addEventListener("click", createUserAccount);
  
  async function createUserAccount() {
      try {
        
         signUpBtn.innerText = "Account Creating...";
         signUpBtn.disabled = true;        
         
         const userCredential = await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value);
         const user = userCredential.user;

         const fullName = `${userFirstName.value} ${userLastName.value}`;


         window.location.href = "../../Authencation/For Login/login.html";
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Error In making Account: " + errorMessage);
          
          // Clear input fields
          userFirstName.value = "";
          userLastName.value = "";
          userEmail.value = "";
          userPassword.value = "";

          signUpBtn.innerText = "Sign Up";
          signUpBtn.disabled = false;
      }
  }
  
  // Handle Google Sign-In
  googleSignUp.addEventListener("click", signUpWithGoogle);
  
  async function signUpWithGoogle() {
      try {
          const result = await signInWithPopup(auth, provider);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
  
          console.log('User:', user);
          console.log('Token:', token);
  
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error: ${errorMessage}`);
      }
  
  }
