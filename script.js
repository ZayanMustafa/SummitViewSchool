  // Import necessary functions from Firebase
  import { app, getAuth ,onAuthStateChanged } from "/Firebase Auth/firebase.js";


 const auth = getAuth(app);

  // Check if user is already signed in or not
  onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    if (user.email === "admin@gmail.com") {
      window.location.href = "../../Admin/admin.html";
    } else if (user.uid !== "admin@gmail.com")
      window.location.href = "../../Registered User/registeredUser.html";
  }
  });