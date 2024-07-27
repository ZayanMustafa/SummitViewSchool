// Import necessary functions from Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Check if user is already signed in or not
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is here");
    // Cptional: You can access other user details here
    const uid = user.uid;
  } else {
    console.log("User is not here");
  }
});
