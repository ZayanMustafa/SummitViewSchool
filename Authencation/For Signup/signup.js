// Import Firebase methods and elements
import { auth, createUserWithEmailAndPassword } from "../../Firebase Auth/firebase.js";
import { setDoc, doc, db , provider , GoogleAuthProvider , signInWithPopup} from "../../Firebase Auth/firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "../../Firebase Auth/firebase.js";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const profileIcon = document.getElementById("profileIcon");
const profilePicture = document.getElementById("profilePicture");
const profileImage = document.getElementById("profileImage");
const signUpBtn = document.getElementById("signUp");

// Event listener to trigger file input click
profileIcon.addEventListener("click", () => {
  profilePicture.click();
});

// Event listener for file input change
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

// Event listener for sign-up button
signUpBtn.addEventListener("click", async function() {
  try {
    // Get input values
    const email = userEmail.value;
    const password = userPassword.value;
    const firstName = userFirstName.value;
    const lastName = userLastName.value;
    signUpBtn.innerHTML = "Creating Account...";
    
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('User created:', user);
    
    // Upload the image to Firebase Storage if a file is selected
    let downloadURL = '';
    const file = profilePicture.files[0];
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${user.uid}-${file.name}`);
      await uploadBytes(storageRef, file);
      downloadURL = await getDownloadURL(storageRef);
      console.log('File uploaded:', downloadURL);
    }
    
    // Save user data to Firestore
    await setDoc(doc(db, 'UserData', user.uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      profileImageUrl: downloadURL,
    });
    console.log('User data saved to Firestore');
    
    // Debugging log
    console.log('Redirecting to login page...');
    
    // Redirect to login page
    window.location.href = "../For Login/login.html";
    
  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up: ' + error.message);
  }
});





























document.getElementById("googleSignUpBtn").addEventListener("click" , accountByGoogle )

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
