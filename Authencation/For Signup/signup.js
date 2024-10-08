// Import Firebase methods and elements
import { 
  auth, 
  createUserWithEmailAndPassword, 
  provider, 
  GoogleAuthProvider, 
  signInWithPopup, 
  storage, 
  storageRef, 
  uploadBytes, 
  getDownloadURL, 
  database, 
  databaseRef, 
  set ,
  
} from "../../Firebase Auth/firebase.js";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const profileIcon = document.getElementById("profileIcon");
const profilePicture = document.getElementById("profilePicture");
const profileImage = document.getElementById("profileImage");
const signUpBtn = document.getElementById("signUp");

profileIcon.addEventListener("click", () => {
  profilePicture.click();
});

profilePicture.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImage.src = e.target.result;
      profileImage.classList.remove('hidden');
      profileIcon.classList.add('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    alert("Upload jpg or png file only!");
  }
});

// SignUp
signUpBtn.addEventListener("click", async function() {
  try {

    const email = userEmail.value;
    const password = userPassword.value;
    const firstName = userFirstName.value;
    const lastName = userLastName.value;
    signUpBtn.innerHTML = "Creating Account...";

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User Created!==>" , user)

    let downloadURL = '';
    const file = profilePicture.files[0];
    if (file) {
    const storageReference = storageRef(storage, `profilePictures/${user.uid}-${file.name}`);
    await uploadBytes(storageReference, file);
    downloadURL = await getDownloadURL(storageReference);
   }
    console.log("Image Uploaded!==>" , downloadURL)

    // Save user data to Realtime Database
    await set(databaseRef(database, 'UserData/' + user.uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      profileImageUrl: downloadURL,
    });
    console.log("Data Saved to DataBase")
    // Redirect to login page
    window.location.href = "../For Login/login.html";

  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up: ' + error.message);
    signUpBtn.innerHTML = "Sign Up Again";

  }
});

document.getElementById("googleSignUpBtn").addEventListener("click", accountByGoogle);

function accountByGoogle() {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      const displayName = user.displayName || "";
      const [firstName, lastName = ""] = displayName.split(' '); // Split displayName into first and last names
      const email = user.email;
      const profileImageUrl = user.photoURL;

      // Save user data to Realtime Database
      await set(databaseRef(database, 'UserData/' + user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        profileImageUrl: profileImageUrl,
      });
      // Redirect the user to the registered user page
      window.location.href = "../../Registered User/registeredUser.html";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;  // Safe access
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error("Error during Google Sign-In:", errorCode, errorMessage);
    });
}
