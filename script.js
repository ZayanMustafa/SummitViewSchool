// Import necessary functions from Firebase
import { app, getAuth ,onAuthStateChanged } from "/Firebase Auth/firebase.js";


 const auth = getAuth(app);
 console.log("User is not here");

  // Check if user is already signed in or not
  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is here");
    const uid = user.uid;

    if (user.email === "admin@gmail.com") {
      window.location.href = "../../Admin/admin.html";
    } else {
      window.location.href = "../../Registered User/registeredUser.html";
    }
  } else {

  }
  });