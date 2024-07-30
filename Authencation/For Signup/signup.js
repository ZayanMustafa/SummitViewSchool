// Import Firebase methods and elements
import { auth, createUserWithEmailAndPassword, getAuth } from "../../Firebase Auth/firebase.js";
import { setDoc, doc, db,  } from "../../Firebase Auth/firebase.js";


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

signUpBtn.addEventListener("click", userAccountCreate);

async function userAccountCreate() {
  try {
    // Get input values
    const email = userEmail.value;
    const password = userPassword.value;
    const firstName = userFirstName.value;
    const lastName = userLastName.value;

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Collect profile data, default to empty strings if undefined
    const profileIconSrc = profileIcon ? profileIcon.src : '';
    const profilePictureSrc = profilePicture ? profilePicture.src : '';
    const profileImageSrc = profileImage ? profileImage.src : '';

    // Save additional user data to Firestore
    await setDoc(doc(db, 'UserData', user.uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      profileIcon: profileIconSrc,
      profilePicture: profilePictureSrc,
      profileImage: profileImageSrc,
    });

    console.log('User created and data saved:', user);
    alert('User successfully created!');
  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up: ' + error.message); // Provide user-friendly error message
  }
}
