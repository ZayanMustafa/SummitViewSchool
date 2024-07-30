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
    setDoc,
    doc, 
    db,
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

async function userAccountCreate (){

    try {

        const email = userEmail.value; // Make sure `userEmail` is defined and has a value
        const password = document.getElementById("passwordUser").value; // Make sure this field exists and is retrieved correctly
        const firstName = userFirstName.value; // Make sure `userFirstName` is defined and has a value
        const lastName = userLastName.value; // Make sure `userLastName` is defined and has a value

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value);
        const user = userCredential.user;
    
        // Save additional user data to Firestore
        await setDoc(doc(db, 'UserData', user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email
        });
      console.log('User created and data saved:', user);
      } catch (error) {
        alert(error)
        console.error('Error signing up:', error);
      }
    
}
