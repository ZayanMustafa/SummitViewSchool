// Import Firebase methods
import { createUserWithEmailAndPassword, auth } from "../../Firebase Auth/firebase.js";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const signUpBtn = document.getElementById("signUp");

// Event listener for the sign-up button
signUpBtn.addEventListener("click", createUserAccount);

async function createUserAccount() {
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value);
        
        // Signed up successfully
        const user = userCredential.user;
        console.log("User Created");

        // Redirect to login page
        window.location.href = "../../Authencation/For Login/login.html";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error In making Account: " + errorMessage);

        // Clear input fields
        userFirstName.value = "";
        userLastName.value = "";
        userEmail.value = "";
    }
}
