// Import fireBase 
import { getAuth , signOut ,database, databaseRef } from "../Firebase Auth/firebase.js"
// import{ user} from "../Authencation/For Signup/signup.js"

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

const userRef = databaseRef(database, 'UserData/' + user.uid);

    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("User Data Retrieved: ", userData);
          // Call a function to update the UI with the user data
          displayUserData(userData);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  


const name = document.getElementById("studentName")
name.innerHTML = ""
