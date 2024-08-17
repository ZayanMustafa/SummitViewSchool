import { getAuth, onAuthStateChanged , databaseRef , getDatabase , get , signOut } from "../Firebase Auth/firebase.js";

const auth = getAuth();
const database = getDatabase();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const userRef = databaseRef(database, 'UserData/' + user.uid);

    console.log(user.uid, "user");

    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("User Data Retrieved: ", userData);
          // Call a function to update the UI with the user data
          displayUserData(userData)
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  } else {
    console.log("No user is signed in");
  }
});
  
function displayUserData(userData) {
  console.log("Displaying user data: ", userData);

  document.getElementById('studentName').textContent = userData.firstName + " " + userData.lastName;
  document.getElementById('profilePicture').src = userData.profileImageUrl;
}



 // Import Elements from html 
 document.getElementById('logOutBtn').addEventListener('click', () => {
     const auth = getAuth();
     signOut(auth).then(() => {
       // Sign-out successful.
       alert("Sign-out successful")
       window.location.href = "../index.html"
     }).catch((error) => {
       // An error happened.
     });
 }); 