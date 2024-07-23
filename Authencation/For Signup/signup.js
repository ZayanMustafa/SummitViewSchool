// Import Firebase methods1;
import { auth } from "../../Firebase Auth/firebase.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");

// Complete user name function
const getUserName = () => `${userFirstName.value} ${userLastName.value}`;

// Import buttons for SignUp from Email and Google
const signUpBtn = document.getElementById("signUp");
const signUpGoogleBtn = document.getElementById("googleSignUp");

// Event listener for SignUp button (Email/Password)
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = userEmail.value;
  const password = userPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      const userName = getUserName();
      console.log("User created:", user);
      // Optionally update the user profile with userName here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Event listener for SignUp button (Google)
signUpGoogleBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Signed in with Google
      const user = result.user;
      console.log("Google user signed in:", user);
      // Optionally update the user profile with user information here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
