// Import Firebase methods and elements
import { auth, createUserWithEmailAndPassword,  getAuth, signInWithPopup, GoogleAuthProvider , provider } from "../../Firebase Auth/firebase.js";
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
    window.location.href = "../For Login/login.html"
  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up: ' + error.message); // Provide user-friendly error message
  }
}

googleSignUp.addEventListener("click" , accountByGoogle )

function accountByGoogle(){

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href = "../../Registered User/registeredUser.html"
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    // alert("Please Wait")
}
