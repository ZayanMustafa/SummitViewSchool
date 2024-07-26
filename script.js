// Import necessary functions from Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Check if user is already signed in or not
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is here");

    // Check if the user's email is admin@gmail.com
    if (user.email === 'admin@gmail.com') {
      window.location.href = './Admin/admin.html';
    } else {
      window.location.href = './Registered User/registeredUser.html';
    }
    // Optional: You can access other user details here
    const uid = user.uid;
    // ...
  } else {
    console.log("User is not here");
  }
});
