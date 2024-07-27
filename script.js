// Import necessary functions from Firebase
import { getAuth ,onAuthStateChanged } from "/Firebase Auth/firebase.js";



// Check if user is already signed in or not
const auth = getAuth();
console.log("AKSA")
onAuthStateChanged( auth, (user) => {
  if (user) {
    console.log("User is here");
    // Optional: You can access other user details here
    const uid = user.uid;
    // Check if the user is admin
    if (user.email === "admin@gmail.com") {
      window.location.href = "../../Admin/admin.html";
    } else {
      window.location.href = "../../Registered User/registeredUser.html";
    }
  } else {
    console.log("User is not here");
  }
});