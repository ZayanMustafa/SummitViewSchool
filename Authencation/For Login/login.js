// Import firebase  
import { getAuth, signOut } from "/";

// Import Element from html 
const email = document.getElementById("email")
const password = document.getElementById("password")
const logInBtn = document.getElementById("loginBtn")


// Logout Btn Funcation 
function logout() {
    signOut(auth).then(() => {
        console.log('User signed out successfully');
        window.location.href = '/index.html'; // Redirect to login page (change the path as needed)
    }).catch((error) => {
        console.error('Error signing out:', error);

    });
}



